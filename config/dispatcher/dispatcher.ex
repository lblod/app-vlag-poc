defmodule Dispatcher do
  use Matcher
  define_accept_types [
    html: [ "text/html", "application/xhtml+html" ],
    json: [ "application/json", "application/vnd.api+json" ],
    upload: ["multipart/form-data"],
    sparql: ["application/sparql-results+json"],
    any: [ "*/*" ],
  ]

  @any %{}
  @json %{ accept: %{ json: true } }
  @html %{ accept: %{ html: true } }

  define_layers [ :static, :sparql, :api_services, :frontend_fallback, :not_found ]

  options "/*path", _ do
    conn
    |> Plug.Conn.put_resp_header( "access-control-allow-headers", "content-type,accept" )
    |> Plug.Conn.put_resp_header( "access-control-allow-methods", "*" )
    |> send_resp( 200, "{ \"message\": \"ok\" }" )
  end

##############################################
# LDES STREAM
##############################################

  match  "/example-stream/*path", %{ accept: [:any], layer: :api_services} do
    Proxy.forward conn, path, "http://producer/example-stream/"
  end

##############################################
# RESOURCES
##############################################

  get "/themes/*path", @any do
    forward conn, path, "http://resource/themes/"
  end

  get "/geopoints/*path", %{ accept: [:any], layer: :api_services} do
    Proxy.forward conn, path, "http://resource/geopoints/"
  end

  get "/road-sign-concepts/*path", %{ accept: [:any], layer: :api_services} do
    Proxy.forward conn, path, "http://resource/road-sign-concepts/"
  end

##############################################
# METIS
##############################################

  match "/uri-info/*path", %{ layer: :api_services, accept: %{ json: true } } do
    Proxy.forward conn, path, "http://uri-info/"
  end

  get "/resource-labels/*path", %{ accept: %{ json: true } } do
    Proxy.forward conn, path, "http://resource-labels-cache/"
  end

  match "/resource-labels/*path", %{ layer: :api_services, accept: %{ json: true } } do
    Proxy.forward conn, path, "http://resource-labels/"
  end

##############################################
# SPARQL
##############################################

  match "/sparql", %{ layer: :sparql, accept: %{ html: true } } do
    forward conn, [], "http://frontend/sparql"
  end

  match "/sparql", %{ layer: :sparql, accept: %{ sparql: true } } do
    forward conn, [], "http://database:8890/sparql"
  end

##############################################
# FRONTEND
##############################################

match "/assets/*path", %{ layer: :static } do
  forward conn, path, "http://frontend/assets/"
end

match "/*path", %{ layer: :frontend_fallback, accept: %{ html: true } } do
  # We forward path for fastboot
  forward conn, path, "http://frontend/"
end

match "/favicon.ico", %{ layer: :static } do
  send_resp( conn, 404, "" )
end

 match "/*_", %{ layer: :not_found } do
    send_resp( conn, 404, "Route not found.  See config/dispatcher.ex" )
  end
end

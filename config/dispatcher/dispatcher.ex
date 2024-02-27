defmodule Dispatcher do
  use Matcher
  define_accept_types [
    html: [ "text/html", "application/xhtml+html" ],
    json: [ "application/json", "application/vnd.api+json" ],
    upload: ["multipart/form-data"],
    sparql_json: ["application/sparql-results+json"],
    any: [ "*/*" ],
  ]

  @any %{}
  @json %{ accept: %{ json: true } }
  @html %{ accept: %{ html: true } }

  define_layers [ :static, :services, :not_found ]

  options "/*path", _ do
    conn
    |> Plug.Conn.put_resp_header( "access-control-allow-headers", "content-type,accept" )
    |> Plug.Conn.put_resp_header( "access-control-allow-methods", "*" )
    |> send_resp( 200, "{ \"message\": \"ok\" }" )
  end

##############################################
# LDES STREAM
##############################################

  match  "/example-stream/*path", %{ accept: [:any], layer: :services} do
    Proxy.forward conn, path, "http://producer/example-stream/"
  end

##############################################
# RESOURCES
##############################################

  get "/themes/*path", @any do
    forward conn, path, "http://resource/themes/"
  end

  get "/geopoints/*path", %{ accept: [:any], layer: :services} do
    Proxy.forward conn, path, "http://resource/geopoints/"
  end

  get "/road-sign-concepts/*path", %{ accept: [:any], layer: :services} do
    Proxy.forward conn, path, "http://resource/road-sign-concepts/"
  end

##############################################
# METIS
##############################################

  get "/uri-info/*path", %{ accept: %{ json: true } } do
    forward conn, path, "http://uri-info/"
  end

  get "/resource-labels/*path", %{ accept: %{ json: true } } do
    forward conn, path, "http://resource-labels-cache/"
  end

  get "/resource-labels/*path" do
    Proxy.forward conn, path, "http://resource-labels/"
  end

  match "/*_", %{ layer: :not_found } do
    send_resp( conn, 404, "Route not found.  See config/dispatcher.ex" )
  end
end

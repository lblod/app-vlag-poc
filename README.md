# VLAG POC Backend
## Getting Started
### Installation
1. `cp .env.example .env`
2. `docker-compose -f docker-compose.yml -f docker-compose.dev.yml up -d`

### Update the triplestore
1. Run the following command:
```
curl -v   POST http://localhost/example-stream?resource=https://example.org/person/80325 \
   -H "Content-Type: application/ld+json" \
   -d '{"@context":"https://json-ld.org/contexts/person.jsonld","@id":"https://example.org/person/80325","@type":"Person","name":"John Lennon","born":"2040-10-09","spouse":"http://dbpedia.org/resource/Cynthia_Lennon"}'
```
2. Wait for 30 seconds
3. Go to `http://localhost:8890/sparql`
4. Run the following sparql query (You should have John Lennon and his wife in resource):
```sparql
select * where {
   graph <http://mu.semte.ch/application>{
       ?s ?p ?o
   }
}
```
5. Now let's update John Lennon to Bob Dylan:
```
curl -v   POST http://localhost/example-stream?resource=https://example.org/person/80325 \
   -H "Content-Type: text/turtle" \
   -d '<https://example.org/person/80325> <http://xmlns.com/foaf/0.1/name> "Bob Dylan".'
```
6. Wait for 30 seconds
7. Execute the same sparql query as above. You should see Bob Dylan in the triplestore now.

### Check the LDES feed
- Navigate to `http://localhost/example-stream/1`
You should see the history of updates made to the triplestore in the LDES feed. 

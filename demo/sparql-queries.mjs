export const DEFAULT_SIGNS = [
  "http://data.lblod.info/traffic-sign-concepts/618EDA887BD6C8000800000B",
  "http://data.lblod.info/traffic-sign-concepts/64395F6F94519A619E4412C9",
  "http://data.lblod.info/traffic-sign-concepts/643C1C2794519A619E4412CC",
  "http://data.vlaanderen.be/id/concept/Verkeersbordconcept/0b8edba107bc181f01ea9fcf241c76f6befff04e15a697acf1c6cdeb49e71868",
  "http://data.vlaanderen.be/id/concept/Verkeersbordconcept/0c471075e7f9f4f6b5c12abf3ed2acb4b1c2dd17545671ae2359ac2e9d524647",
  "http://data.vlaanderen.be/id/concept/Verkeersbordconcept/1027d42a7b5eaa16b31d3da9c8c4ae75fd1100a2e26119037070373bc9709edc",
  "http://data.vlaanderen.be/id/concept/Verkeersbordconcept/10e42121244614faee3f458e4b74c2b84bc54ecf6a79583e81de8420aba2f147",
  "http://data.vlaanderen.be/id/concept/Verkeersbordconcept/14d5a8165d331e00e2f669abca60e2db5df7d28973bf15e5fd3ea4cfa575a0a1",
];

export const LDES_DATA_FEED_TEMPL = `

 <http://data.lblod.info/geo-points/#uuid> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <https://www.w3.org/2003/01/geo/Point>.
 <http://data.lblod.info/geo-points/#uuid>  <http://mu.semte.ch/vocabularies/core/uuid> "#uuid".
 <http://data.lblod.info/geo-points/#uuid> <https://www.w3.org/2003/01/geo/lat> "#lat"^^<http://www.w3.org/2001/XMLSchema#decimal>.
   <http://data.lblod.info/geo-points/#uuid> <https://www.w3.org/2003/01/geo/long>   "#long"^^<http://www.w3.org/2001/XMLSchema#decimal>.
    <http://data.lblod.info/geo-points/#uuid>     <http://mu.semte.ch/vocabularies/ext/hasSign> <#sign>.
`;

export const INSERT_MOW_QUERY = `
prefix rdf:	<http://www.w3.org/1999/02/22-rdf-syntax-ns#> 
prefix mobiliteit:	<https://data.vlaanderen.be/ns/mobiliteit#> 
prefix mu:	<http://mu.semte.ch/vocabularies/core/> 
prefix ext:	<http://mu.semte.ch/vocabularies/ext/> 
prefix skos:	<http://www.w3.org/2004/02/skos/core#> 
prefix ns4:	<http://data.vlaanderen.be/id/concept/Verkeersbordconcept/> 
insert data {
graph <http://mu.semte.ch/graphs/public> {
	
<http://data.lblod.info/traffic-sign-concepts/64395F6F94519A619E4412C9>	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"64395F6F94519A619E4412C9" ;
	skos:prefLabel	"tes upload" ;
	mobiliteit:grafischeWeergave	"https://dev.roadsigns.lblod.info/files/64395f6fabf38b000b00000a/download" .
	
	
<http://data.lblod.info/traffic-sign-concepts/643C1C2794519A619E4412CC>	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"643C1C2794519A619E4412CC" ;
	skos:prefLabel	"test files" ;
	mobiliteit:grafischeWeergave	"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Vienna_Convention_road_sign_B2a.svg/1024px-Vienna_Convention_road_sign_B2a.svg.png" .
ns4:ad6a486a0290a55f43963593ec16976dc028cc9fa76b1a294c3e729ae00f8740	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"ad6a486a0290a55f43963593ec16976dc028cc9fa76b1a294c3e729ae00f8740" ;
	skos:prefLabel	"F45b" ;
	mobiliteit:grafischeWeergave	"http://mobiliteit.vo.data.gift/images/1f99eb5bba96bb018d19509f34470a52125309588fa9003a7fdb095fec42914a" .
<http://data.lblod.info/traffic-sign-concepts/618EC7D37BD6C80008000001>	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"618EC7D37BD6C80008000001" ;
	skos:prefLabel	"B13" ;
	mobiliteit:grafischeWeergave	"https://dev.roadsigns.lblod.info/files/618ec7d32a7b3b000d000000/download" .
<http://data.lblod.info/traffic-sign-concepts/618ECA767BD6C80008000003>	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"618ECA767BD6C80008000003" ;
	skos:prefLabel	"F17r" ;
	mobiliteit:grafischeWeergave	"https://dev.roadsigns.lblod.info/files/618eca762a7b3b000d000004/download" .
<http://data.lblod.info/traffic-sign-concepts/618ECBDE7BD6C80008000004>	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"618ECBDE7BD6C80008000004" ;
	skos:prefLabel	"M5" ;
	mobiliteit:grafischeWeergave	"https://dev.roadsigns.lblod.info/files/618ecbde2a7b3b000d000006/download" .
<http://data.lblod.info/traffic-sign-concepts/618ECD027BD6C80008000005>	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"618ECD027BD6C80008000005" ;
	skos:prefLabel	"Parkeerautomaat" ;
	mobiliteit:grafischeWeergave	"https://dev.roadsigns.lblod.info/files/61b20bcfb82487000d00000c/download" .
<http://data.lblod.info/traffic-sign-concepts/618ED5267BD6C80008000009>	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"618ED5267BD6C80008000009" ;
	skos:prefLabel	"A31" ;
	mobiliteit:grafischeWeergave	"https://dev.roadsigns.lblod.info/files/618ed5262a7b3b000d00001a/download" .
<http://data.lblod.info/traffic-sign-concepts/618ED57D7BD6C8000800000A>	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"618ED57D7BD6C8000800000A" ;
	skos:prefLabel	"A35" ;
	mobiliteit:grafischeWeergave	"https://dev.roadsigns.lblod.info/files/618ed57d2a7b3b000d00001c/download" .
<http://data.lblod.info/traffic-sign-concepts/618EDA887BD6C8000800000B>	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"618EDA887BD6C8000800000B" ;
	skos:prefLabel	"F3b_H" ;
	mobiliteit:grafischeWeergave	"https://dev.roadsigns.lblod.info/files/618eda882a7b3b000d00001e/download" .
<http://data.lblod.info/traffic-sign-concepts/618EDAF37BD6C8000800000C>	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"618EDAF37BD6C8000800000C" ;
	skos:prefLabel	"F8" ;
	mobiliteit:grafischeWeergave	"https://dev.roadsigns.lblod.info/files/618edaf32a7b3b000d000020/download" .
<http://data.lblod.info/verkeersbordconcepten/61324053CC7A640008000002>	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"61324053CC7A640008000002" ;
	skos:prefLabel	"M1_Bromfiets" ;
	mobiliteit:grafischeWeergave	"https://dev.roadsigns.lblod.info/files/61324053b93c54000c000004/download" .
<http://data.lblod.info/verkeersbordconcepten/613240C8CC7A640008000003>	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"613240C8CC7A640008000003" ;
	skos:prefLabel	"M1_Motor" ;
	mobiliteit:grafischeWeergave	"https://dev.roadsigns.lblod.info/files/61404d54b93c54000c000024/download" .
<http://data.lblod.info/verkeersbordconcepten/6132418BCC7A640008000004>	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"6132418BCC7A640008000004" ;
	skos:prefLabel	"M1_Plus8Pl" ;
	mobiliteit:grafischeWeergave	"https://dev.roadsigns.lblod.info/files/61404bb1b93c54000c000022/download" .
<http://data.lblod.info/verkeersbordconcepten/61324B0BCC7A640008000005>	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"61324B0BCC7A640008000005" ;
	skos:prefLabel	"M1_WoonWerk" ;
	mobiliteit:grafischeWeergave	"https://dev.roadsigns.lblod.info/files/61324b0bb93c54000c000010/download" .
<http://data.lblod.info/verkeersbordconcepten/6167DBE6A40DDE0009000002>	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"6167DBE6A40DDE0009000002" ;
	skos:prefLabel	"A50" ;
	mobiliteit:grafischeWeergave	"https://dev.roadsigns.lblod.info/files/6167dbe6b93c54000d000002/download" .
<http://data.vlaanderen.be/id/concept/Verkeersbordconcept/00939dd22288b0ef321908552d49f97c6e77e53de6e14b303f32c9a499839557>	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"00939dd22288b0ef321908552d49f97c6e77e53de6e14b303f32c9a499839557" ;
	skos:prefLabel	"B21" ;
	mobiliteit:grafischeWeergave	"http://mobiliteit.vo.data.gift/images/efc5dcdd73633d3a864dea5e8d4ed57da8a6bb5bab78883d17302899ccaf0d06" .
<http://data.vlaanderen.be/id/concept/Verkeersbordconcept/00c62afceb8661521659394983ff910b2b9cecd92b11ae0376bdb94b9d8c594c>	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"00c62afceb8661521659394983ff910b2b9cecd92b11ae0376bdb94b9d8c594c" ;
	skos:prefLabel	"F99c" ;
	mobiliteit:grafischeWeergave	"https://dev.roadsigns.lblod.info/files/618edc622a7b3b000d000022/download" .
<http://data.vlaanderen.be/id/concept/Verkeersbordconcept/00ec95d849486cfd9c41ba02e2125ac2f719f6bb85d26ae78f6cbd006ffd1f42>	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"00ec95d849486cfd9c41ba02e2125ac2f719f6bb85d26ae78f6cbd006ffd1f42" ;
	skos:prefLabel	"D3" ;
	mobiliteit:grafischeWeergave	"http://mobiliteit.vo.data.gift/images/e19b3472e80a42cfdb3d1e204ae9619d9ddaafd00cf3302070843274a04ec647" .
<http://data.vlaanderen.be/id/concept/Verkeersbordconcept/027c78149dc8e39fd0f81926fde71d973b0711772dca3dcd85a96d00981194ae>	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"027c78149dc8e39fd0f81926fde71d973b0711772dca3dcd85a96d00981194ae" ;
	skos:prefLabel	"F3b_V" ;
	mobiliteit:grafischeWeergave	"http://mobiliteit.vo.data.gift/images/6cded5601d7c0213aa4784fe8468a102599861f16a3f96dc8f613b40b89c7da0" .
<http://data.vlaanderen.be/id/concept/Verkeersbordconcept/02ee9abc37a79c9b74cab7eb93cc00c69aeeacac3fb2f6c34733a34c5ab94e9a>	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"02ee9abc37a79c9b74cab7eb93cc00c69aeeacac3fb2f6c34733a34c5ab94e9a" ;
	skos:prefLabel	"F101a" ;
	mobiliteit:grafischeWeergave	"https://dev.roadsigns.lblod.info/files/618edd972a7b3b000d000028/download" .
<http://data.vlaanderen.be/id/concept/Verkeersbordconcept/0354a9248d379808250847432a584e4dc2be39d0eaec787dff319a30e407e053>	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"0354a9248d379808250847432a584e4dc2be39d0eaec787dff319a30e407e053" ;
	skos:prefLabel	"M2" ;
	mobiliteit:grafischeWeergave	"http://mobiliteit.vo.data.gift/images/a624fe53d2f9c13168334ee8a1911064fe210dbc19d99baf1cbd3650288e80af" .
<http://data.vlaanderen.be/id/concept/Verkeersbordconcept/0527c3b6261a500eade105ef371d355c2b950fcdd14302bdfc6711da2933f33a>	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"0527c3b6261a500eade105ef371d355c2b950fcdd14302bdfc6711da2933f33a" ;
	skos:prefLabel	"M8" ;
	mobiliteit:grafischeWeergave	"http://mobiliteit.vo.data.gift/images/1784dbac1d5d7384d000a4a01fc060a1e1f9024eef52b7029a95404ffd9cf375" .
<http://data.vlaanderen.be/id/concept/Verkeersbordconcept/061d2edb3caf482931ee7cea26f85d49538a5d4d0781872c0faad20328650beb>	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"061d2edb3caf482931ee7cea26f85d49538a5d4d0781872c0faad20328650beb" ;
	skos:prefLabel	"GII" ;
	mobiliteit:grafischeWeergave	"http://mobiliteit.vo.data.gift/images/7ff65809ec9fd0fea5270774b7985e277afb51d43bf80d909c02f344d2def40a" .
<http://data.vlaanderen.be/id/concept/Verkeersbordconcept/09861a82322efebc4fee09562b36f1a51f70b59d930ed9df4146eef10731398b>	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"09861a82322efebc4fee09562b36f1a51f70b59d930ed9df4146eef10731398b" ;
	skos:prefLabel	"F17" ;
	mobiliteit:grafischeWeergave	"https://dev.roadsigns.lblod.info/files/619b8ee676cea6000e000008/download" .
<http://data.vlaanderen.be/id/concept/Verkeersbordconcept/0b8edba107bc181f01ea9fcf241c76f6befff04e15a697acf1c6cdeb49e71868>	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"0b8edba107bc181f01ea9fcf241c76f6befff04e15a697acf1c6cdeb49e71868" ;
	skos:prefLabel	"E9a" ;
	mobiliteit:grafischeWeergave	"http://mobiliteit.vo.data.gift/images/736b97752671b36ad5195507c9dd0cad67d321cebeabc6e3f2ef1827bc13a58c" .
<http://data.vlaanderen.be/id/concept/Verkeersbordconcept/0c471075e7f9f4f6b5c12abf3ed2acb4b1c2dd17545671ae2359ac2e9d524647>	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"0c471075e7f9f4f6b5c12abf3ed2acb4b1c2dd17545671ae2359ac2e9d524647" ;
	skos:prefLabel	"M11" ;
	mobiliteit:grafischeWeergave	"http://mobiliteit.vo.data.gift/images/153f4f4ffce6e96872ca36005ce1b1d08611dc504e99bd3f095b78eebeda446f" .
<http://data.vlaanderen.be/id/concept/Verkeersbordconcept/0c4c0e3561334e2bc50bca4979294fa85607520fa2a22bf25e4b32d350d924ae>	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"0c4c0e3561334e2bc50bca4979294fa85607520fa2a22bf25e4b32d350d924ae" ;
	skos:prefLabel	"C15" ;
	mobiliteit:grafischeWeergave	"http://mobiliteit.vo.data.gift/images/a8c58dab8948cd25b1f45e99c8ab4bbb0cf8137d5cc86015c01a90755d3096b0" .
<http://data.vlaanderen.be/id/concept/Verkeersbordconcept/0daabb880ba1458b6f05e6e451a55b97764929a7d2af674698338caa8e669fca>	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"0daabb880ba1458b6f05e6e451a55b97764929a7d2af674698338caa8e669fca" ;
	skos:prefLabel	"F1b_H" ;
	mobiliteit:grafischeWeergave	"http://mobiliteit.vo.data.gift/images/b6d53388c23990cb81edfe5467d72ed59164916e023a55faad0af2b8f4b7f9ac" .
<http://data.vlaanderen.be/id/concept/Verkeersbordconcept/1027d42a7b5eaa16b31d3da9c8c4ae75fd1100a2e26119037070373bc9709edc>	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"1027d42a7b5eaa16b31d3da9c8c4ae75fd1100a2e26119037070373bc9709edc" ;
	skos:prefLabel	"A1b" ;
	mobiliteit:grafischeWeergave	"http://mobiliteit.vo.data.gift/images/627f5f8e0f454daaf7e2448807fc91ba4ba99d70c8c2c6fa642ec885d7ffef69" .
<http://data.vlaanderen.be/id/concept/Verkeersbordconcept/10e42121244614faee3f458e4b74c2b84bc54ecf6a79583e81de8420aba2f147>	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"10e42121244614faee3f458e4b74c2b84bc54ecf6a79583e81de8420aba2f147" ;
	skos:prefLabel	"F29" ;
	mobiliteit:grafischeWeergave	"http://mobiliteit.vo.data.gift/images/7c97b618a9ae156623ed20464d5f61f263d73cab8a19e045612357d98a15f64c" .
<http://data.vlaanderen.be/id/concept/Verkeersbordconcept/11a00892550b4d76a4021b11c9769d4d8812e80a42808da341d72e49f81c5a0c>	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"11a00892550b4d76a4021b11c9769d4d8812e80a42808da341d72e49f81c5a0c" ;
	skos:prefLabel	"C37" ;
	mobiliteit:grafischeWeergave	"http://mobiliteit.vo.data.gift/images/089ef946fb598c5e3c27dd3b77e74dc7a6ce6c3c6d97a82103c3b28f7de2d481" .
<http://data.vlaanderen.be/id/concept/Verkeersbordconcept/11a07b567d603a2f01a987ce4feea54c709a57449554debc5f5ae63c602c722b>	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"11a07b567d603a2f01a987ce4feea54c709a57449554debc5f5ae63c602c722b" ;
	skos:prefLabel	"C25" ;
	mobiliteit:grafischeWeergave	"http://mobiliteit.vo.data.gift/images/b18329b567803c7e1f92c3083ca3599b8354cffd028ce49d5b2b1be418735e45" .
<http://data.vlaanderen.be/id/concept/Verkeersbordconcept/11d86f16056832a3cf2765f8de597aadf50d6699c4422afa408f34642c44b42c>	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"11d86f16056832a3cf2765f8de597aadf50d6699c4422afa408f34642c44b42c" ;
	skos:prefLabel	"F7" ;
	mobiliteit:grafischeWeergave	"http://mobiliteit.vo.data.gift/images/ad7f060d0ade8154110e5259d742eee1378b7cb91f82adafa6e3fa24bf9c7978" .
<http://data.vlaanderen.be/id/concept/Verkeersbordconcept/137112aad6b994f965bfd6ceb7e88bf0162db8ac885e57439ef8cbee363fe579>	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"137112aad6b994f965bfd6ceb7e88bf0162db8ac885e57439ef8cbee363fe579" ;
	skos:prefLabel	"E3" ;
	mobiliteit:grafischeWeergave	"http://mobiliteit.vo.data.gift/images/e970f48a9f125839814ee7af86373cb02faea842d641a29cc9d5cc33a89c9195" .
<http://data.vlaanderen.be/id/concept/Verkeersbordconcept/13e1ea2149022c8b94bf4668ba2161fe61e8ea0154025218c48fd066a4031961>	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"13e1ea2149022c8b94bf4668ba2161fe61e8ea0154025218c48fd066a4031961" ;
	skos:prefLabel	"F3b" ;
	mobiliteit:grafischeWeergave	"http://mobiliteit.vo.data.gift/images/d69b0de83b6e3b87908907522a79720953d0f77a0624c03cb20baa4f15068130" .
<http://data.vlaanderen.be/id/concept/Verkeersbordconcept/14d5a8165d331e00e2f669abca60e2db5df7d28973bf15e5fd3ea4cfa575a0a1>	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"14d5a8165d331e00e2f669abca60e2db5df7d28973bf15e5fd3ea4cfa575a0a1" ;
	skos:prefLabel	"GIV_uitgezonderdplaatselijkverkeer" ;
	mobiliteit:grafischeWeergave	"http://mobiliteit.vo.data.gift/images/42e7a4446d633372a201f99d537855f5deca7610d2b387abe43415907fb79374" .
<http://data.vlaanderen.be/id/concept/Verkeersbordconcept/16a5995da81246204622a99fe53665605b1d58a1f77518e31a1e15fde8bc5e2c>	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"16a5995da81246204622a99fe53665605b1d58a1f77518e31a1e15fde8bc5e2c" ;
	skos:prefLabel	"GVb" ;
	mobiliteit:grafischeWeergave	"http://mobiliteit.vo.data.gift/images/a4467691c75b8b0ba99b20cdd7792b6466e37b368c079e07e63a168d2e671de2" .
<http://data.vlaanderen.be/id/concept/Verkeersbordconcept/192093668d3375c2ad9b37d8c2d93fa7d91f165e53b653edeccb5a96194561dd>	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"192093668d3375c2ad9b37d8c2d93fa7d91f165e53b653edeccb5a96194561dd" ;
	skos:prefLabel	"A1" ;
	mobiliteit:grafischeWeergave	"/files/643fa81fabf38b000b00001e/download" .
<http://data.vlaanderen.be/id/concept/Verkeersbordconcept/1985d4792a4af9d46b27ce02c34bc63d647d0e5808f7bf93725968a70edbd67f>	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"1985d4792a4af9d46b27ce02c34bc63d647d0e5808f7bf93725968a70edbd67f" ;
	skos:prefLabel	"GIII_UitritVrachtwagen" ;
	mobiliteit:grafischeWeergave	"http://mobiliteit.vo.data.gift/images/4a06ce5395d043112055e15fc2a25ce2d4925f3926d9d819ed9fa98fb3e521d3" .
<http://data.vlaanderen.be/id/concept/Verkeersbordconcept/1a87027d46dd7d4a3cd3084db904dfe5d22e0cb0ae7dcc47ebed18eec7e52f81>	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"1a87027d46dd7d4a3cd3084db904dfe5d22e0cb0ae7dcc47ebed18eec7e52f81" ;
	skos:prefLabel	"C35" ;
	mobiliteit:grafischeWeergave	"http://mobiliteit.vo.data.gift/images/53c8c8bf188406025c9e2ec16b06792233d9dafa6bd5521603fdfb064170d2e8" .
<http://data.vlaanderen.be/id/concept/Verkeersbordconcept/1b0064d6a66dc26109c3173acb5254c81e508aa875ff16764b6d45cb34ef651a>	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"1b0064d6a66dc26109c3173acb5254c81e508aa875ff16764b6d45cb34ef651a" ;
	skos:prefLabel	"B5" ;
	mobiliteit:grafischeWeergave	"http://mobiliteit.vo.data.gift/images/3b3291d61283d2522afbea6ae5d9731ce8a6994fc75fecee6fd2f22f5114fc3b" .
<http://data.vlaanderen.be/id/concept/Verkeersbordconcept/1c6110b80aad28134ee6cc79cf506a65a0488d1c649841e152ffbdb5031bb5ee>	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"1c6110b80aad28134ee6cc79cf506a65a0488d1c649841e152ffbdb5031bb5ee" ;
	skos:prefLabel	"C43" ;
	mobiliteit:grafischeWeergave	"http://mobiliteit.vo.data.gift/images/0bbb3a6c24e0d6ff671dc0efe6bb823882edfc9c697bad54fc98c09322865564" .
<http://data.vlaanderen.be/id/concept/Verkeersbordconcept/1c7dc73190d75178b1c27d7ccea4bcaf2dfdefe91f947757550b9358f3541376>	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"1c7dc73190d75178b1c27d7ccea4bcaf2dfdefe91f947757550b9358f3541376" ;
	skos:prefLabel	"GIII" ;
	mobiliteit:grafischeWeergave	"http://mobiliteit.vo.data.gift/images/fdbf87d549a021785ec89e67ce868cb22e0c96668ac828d6b03ccaba8a5622af" .
<http://data.vlaanderen.be/id/concept/Verkeersbordconcept/20676d464152d3260196bba606060cb7e4b4fea1fa67b3b5b2006cc014bc0c8e>	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"20676d464152d3260196bba606060cb7e4b4fea1fa67b3b5b2006cc014bc0c8e" ;
	skos:prefLabel	"F27" ;
	mobiliteit:grafischeWeergave	"http://mobiliteit.vo.data.gift/images/094b9b0ae31d281d5652141243a689f8efc7b6ed7232a35850f9b7fc92a99320" .
<http://data.vlaanderen.be/id/concept/Verkeersbordconcept/207e9795e2fd438e6a47a96e4a2711336586bb114ebbf89f192f469ad4ba3e2e>	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"207e9795e2fd438e6a47a96e4a2711336586bb114ebbf89f192f469ad4ba3e2e" ;
	skos:prefLabel	"GVIId_rolstoel" ;
	mobiliteit:grafischeWeergave	"http://mobiliteit.vo.data.gift/images/5bdb189588134b937c1219486c14af25b6542a789b800d77a469286e5aba54c4" .
<http://data.vlaanderen.be/id/concept/Verkeersbordconcept/21757765d69e1a9d79127575e697648a02d4fc144d41276a138bbb2f07623c47>	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"21757765d69e1a9d79127575e697648a02d4fc144d41276a138bbb2f07623c47" ;
	skos:prefLabel	"F23b" ;
	mobiliteit:grafischeWeergave	"http://mobiliteit.vo.data.gift/images/b4979b1b5e8fe3a45861422aeb8d43a35fb1c870aefeed4703062ea1074d8536" .
<http://data.vlaanderen.be/id/concept/Verkeersbordconcept/22e5942e1f2f0e0e4162ec69933e317ede9c3c10200980665a682d30f19034e4>	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"22e5942e1f2f0e0e4162ec69933e317ede9c3c10200980665a682d30f19034e4" ;
	skos:prefLabel	"C31a" ;
	mobiliteit:grafischeWeergave	"http://mobiliteit.vo.data.gift/images/b8d230b3b21a14929c4e8186f2f4d2d1bb334691e4a24993b5ef5addac5f74d6" .
<http://data.vlaanderen.be/id/concept/Verkeersbordconcept/25a693b6497cc1c6bd53f85f018fceb52641719bb1f06cbb6a67517f9fe11b1d>	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"25a693b6497cc1c6bd53f85f018fceb52641719bb1f06cbb6a67517f9fe11b1d" ;
	skos:prefLabel	"C22" ;
	mobiliteit:grafischeWeergave	"http://mobiliteit.vo.data.gift/images/4d1d6c33a2f9b489fae41be3bd9ec23a35f900ef3b26c0f350abadd13853d8e3" .
<http://data.vlaanderen.be/id/concept/Verkeersbordconcept/25e471b12cc02eb9e4895e739168b610dd4406f6637eca6554f9beb99241e216>	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"25e471b12cc02eb9e4895e739168b610dd4406f6637eca6554f9beb99241e216" ;
	skos:prefLabel	"GVIId_elec" ;
	mobiliteit:grafischeWeergave	"http://mobiliteit.vo.data.gift/images/24bc9dc4349b6c256d062f64bb2f1ba47908dc1543ae697b49c4a06c12e5c93a" .
<http://data.vlaanderen.be/id/concept/Verkeersbordconcept/25edd560e9c1080dcc8275422f857a2b08c7f4efcfb9bb93eb4bf53b9719ead5>	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"25edd560e9c1080dcc8275422f857a2b08c7f4efcfb9bb93eb4bf53b9719ead5" ;
	skos:prefLabel	"C24a" ;
	mobiliteit:grafischeWeergave	"http://mobiliteit.vo.data.gift/images/86f4b38cd60fb53526ecc0056f98ae1629e6307008a5639d44043f2884c993a0" .
<http://data.vlaanderen.be/id/concept/Verkeersbordconcept/2721df3072ab4e96f50b345524806082f37252e7a1a802b14d640c3cfd7a1d49>	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"2721df3072ab4e96f50b345524806082f37252e7a1a802b14d640c3cfd7a1d49" ;
	skos:prefLabel	"F4b" ;
	mobiliteit:grafischeWeergave	"http://mobiliteit.vo.data.gift/images/4545d376d96442f4d509c580b3095c10b6ba0a93371cb836d6e21a92cfed7a82" .
<http://data.vlaanderen.be/id/concept/Verkeersbordconcept/2b08f73a820e4998ba2df0155922f480f1f13a286f34949dad8af8914d4f77cd>	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"2b08f73a820e4998ba2df0155922f480f1f13a286f34949dad8af8914d4f77cd" ;
	skos:prefLabel	"C23" ;
	mobiliteit:grafischeWeergave	"http://mobiliteit.vo.data.gift/images/b4e71103ffe7883aba32a8cc7bedb42933497ae2eb8fc40709a7ea2933eb7d89" .
<http://data.vlaanderen.be/id/concept/Verkeersbordconcept/2d4a6e35cc3d44c3f23f861296516298e5308815da4483543775a72c3444c977>	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"2d4a6e35cc3d44c3f23f861296516298e5308815da4483543775a72c3444c977" ;
	skos:prefLabel	"F34b2" ;
	mobiliteit:grafischeWeergave	"http://mobiliteit.vo.data.gift/images/3c903d2f35fad8c9ae29e37ea024572965df21080c704ecf81e57b0f0e805a4b" .
<http://data.vlaanderen.be/id/concept/Verkeersbordconcept/2e6a08b452101a179fdb003a253ea427979430961b52e180f682b510f9f2daa2>	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"2e6a08b452101a179fdb003a253ea427979430961b52e180f682b510f9f2daa2" ;
	skos:prefLabel	"B17" ;
	mobiliteit:grafischeWeergave	"http://mobiliteit.vo.data.gift/images/c4915e1e5dc4bbbee0d6d53e4aaf785cbc3cbd3960379ca1584843de1bf8ebea" .
<http://data.vlaanderen.be/id/concept/Verkeersbordconcept/2ef0f718f6780fa8f69d02d8c3e8ad3cc9879e1a125b361b627a883198b41400>	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"2ef0f718f6780fa8f69d02d8c3e8ad3cc9879e1a125b361b627a883198b41400" ;
	skos:prefLabel	"C9" ;
	mobiliteit:grafischeWeergave	"http://mobiliteit.vo.data.gift/images/ffb4722a5f3f7f495b8d9ca575ffb2bb8e71710fd7febd8fe22e0cc644f6ced6" .
<http://data.vlaanderen.be/id/concept/Verkeersbordconcept/2f862c9704d9e258ecac5245b185270180bfd83f791021abbb93d55c60a72cb3>	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"2f862c9704d9e258ecac5245b185270180bfd83f791021abbb93d55c60a72cb3" ;
	skos:prefLabel	"A41" ;
	mobiliteit:grafischeWeergave	"http://mobiliteit.vo.data.gift/images/d3c41d0207abd5647001b5c6584d172c70efa126e57d8c1aaf4dcd98f844448f" .
<http://data.vlaanderen.be/id/concept/Verkeersbordconcept/31bdd8a00cbe10bbe2908760820ca07226cb9bfd829e84e87b859d21d4bf6da5>	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"31bdd8a00cbe10bbe2908760820ca07226cb9bfd829e84e87b859d21d4bf6da5" ;
	skos:prefLabel	"F99b" ;
	mobiliteit:grafischeWeergave	"http://mobiliteit.vo.data.gift/images/793fd5f245f66397601098b992433f1eeade63c9b0e09d31d898b62b6b9b44b3" .
<http://data.vlaanderen.be/id/concept/Verkeersbordconcept/32a6431ad5ad20c5bc5eca29bcbbe0ce6bca180ac0a7fceed6e05127e60c16f0>	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"32a6431ad5ad20c5bc5eca29bcbbe0ce6bca180ac0a7fceed6e05127e60c16f0" ;
	skos:prefLabel	"D10" ;
	mobiliteit:grafischeWeergave	"http://mobiliteit.vo.data.gift/images/684b20b2efae3397c9156572ffc004c44bcf25855d4b49f7bb3a98bb029472b9" .
<http://data.vlaanderen.be/id/concept/Verkeersbordconcept/32ecdf2825fc33b6f97ccee36b5076ba429ee33ace3c123dd0fbec16aae975d8>	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"32ecdf2825fc33b6f97ccee36b5076ba429ee33ace3c123dd0fbec16aae975d8" ;
	skos:prefLabel	"GIb" ;
	mobiliteit:grafischeWeergave	"http://mobiliteit.vo.data.gift/images/c7fb5ee5e347add29c1d36f31c1eeae92fc87ef440fba4ab95d7366652a2aa54" .
<http://data.vlaanderen.be/id/concept/Verkeersbordconcept/332f5e44542833f7c5723fc1c55d20b56a7bc79da379613d8f3c48c65276184d>	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"332f5e44542833f7c5723fc1c55d20b56a7bc79da379613d8f3c48c65276184d" ;
	skos:prefLabel	"M15" ;
	mobiliteit:grafischeWeergave	"http://mobiliteit.vo.data.gift/images/095c05f96aedf443e70eead71888b5991f964068431df3343e38c4cc9dc7f9d2" .
<http://data.vlaanderen.be/id/concept/Verkeersbordconcept/33f67bdab2ee149144735719bd2f8b69374c665af7e6b49efc9484fe1a37d842>	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"33f67bdab2ee149144735719bd2f8b69374c665af7e6b49efc9484fe1a37d842" ;
	skos:prefLabel	"A21" ;
	mobiliteit:grafischeWeergave	"http://mobiliteit.vo.data.gift/images/7db1568b46d3d8c0fbb38a10f29d24902d85d17179469e815f393d086eeeb3d8" .
<http://data.vlaanderen.be/id/concept/Verkeersbordconcept/342d51819b4cb121e9071ff244bbf55a153c371792dc5b8d5773890525c7516d>	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"342d51819b4cb121e9071ff244bbf55a153c371792dc5b8d5773890525c7516d" ;
	skos:prefLabel	"A25" ;
	mobiliteit:grafischeWeergave	"http://mobiliteit.vo.data.gift/images/6f91ec56fef50258941453d390f474052b230c4dd23428e7daa949df62ece13a" .
<http://data.vlaanderen.be/id/concept/Verkeersbordconcept/3536ac197567d5c95e40959ec4f822bc54c2726e405cea617bffa2117d80b9c8>	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"3536ac197567d5c95e40959ec4f822bc54c2726e405cea617bffa2117d80b9c8" ;
	skos:prefLabel	"GXb" ;
	mobiliteit:grafischeWeergave	"http://mobiliteit.vo.data.gift/images/3904cfb00657bea3e86660af300a3c78cd1c71d802473ae9f2f843528a731e45" .
<http://data.vlaanderen.be/id/concept/Verkeersbordconcept/361c936975bc1f56b7b6b3689c20ad9357ba6d0e0e97dad0bd718c395f4ba9e1>	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"361c936975bc1f56b7b6b3689c20ad9357ba6d0e0e97dad0bd718c395f4ba9e1" ;
	skos:prefLabel	"C31b" ;
	mobiliteit:grafischeWeergave	"http://mobiliteit.vo.data.gift/images/d60a829bc6f2380dc87bcc249c2e843d4d1443042ef2d0bd95841e4535d62d8b" .
<http://data.vlaanderen.be/id/concept/Verkeersbordconcept/3674525b2c0a5d3fa43dcfe11525588b1391b809668234599144a9bfb2e45ea2>	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"3674525b2c0a5d3fa43dcfe11525588b1391b809668234599144a9bfb2e45ea2" ;
	skos:prefLabel	"F17l" ;
	mobiliteit:grafischeWeergave	"http://mobiliteit.vo.data.gift/images/07431dd4a5c8041fa9f0fb5d620ca29527636b4a2b30c83a4c43321146c5e22f" .
<http://data.vlaanderen.be/id/concept/Verkeersbordconcept/367e8886caac739058332e5f9087d4412a15fafeed0ac1d270c71643a7dd727a>	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"367e8886caac739058332e5f9087d4412a15fafeed0ac1d270c71643a7dd727a" ;
	skos:prefLabel	"M10" ;
	mobiliteit:grafischeWeergave	"http://mobiliteit.vo.data.gift/images/1ddd23d67ee53ba83df03b21b1ce0c8879394f8ff654f481557d4a78745ae6ce" .
<http://data.vlaanderen.be/id/concept/Verkeersbordconcept/36e7f05884aeb3cfe0ed5064713ca63ce7d9817dd14921eae9bd221766153216>	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"36e7f05884aeb3cfe0ed5064713ca63ce7d9817dd14921eae9bd221766153216" ;
	skos:prefLabel	"C47" ;
	mobiliteit:grafischeWeergave	"http://mobiliteit.vo.data.gift/images/b08808ffaaabb8386267c517c000f73ef719b2f05d8a339cc781122247252792" .
<http://data.vlaanderen.be/id/concept/Verkeersbordconcept/3ab5a7784511d3c2b96b8d4a51d2b69bc0221e625d1f954f0ad7b0036e980cb9>	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"3ab5a7784511d3c2b96b8d4a51d2b69bc0221e625d1f954f0ad7b0036e980cb9" ;
	skos:prefLabel	"B23" ;
	mobiliteit:grafischeWeergave	"http://mobiliteit.vo.data.gift/images/d918e8e339333bc91cb68c6cd87ebaf83819baed36e7344944d2da0d83437788" .
<http://data.vlaanderen.be/id/concept/Verkeersbordconcept/3b5ccd03c55162c506978a9f5ac0aededd217eb02bf59d70367d17c587012c77>	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"3b5ccd03c55162c506978a9f5ac0aededd217eb02bf59d70367d17c587012c77" ;
	skos:prefLabel	"A31" ;
	mobiliteit:grafischeWeergave	"http://mobiliteit.vo.data.gift/images/b03141af74e9f92f071cf8436f3b0585671dc6b8c5469511d46e380fe790bb27" .
<http://data.vlaanderen.be/id/concept/Verkeersbordconcept/3c9ae02b53c00f1795c77d0734136dc8dbe13d21157a31f3da988b69318cc47f>	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"3c9ae02b53c00f1795c77d0734136dc8dbe13d21157a31f3da988b69318cc47f" ;
	skos:prefLabel	"F3b_H" ;
	mobiliteit:grafischeWeergave	"http://mobiliteit.vo.data.gift/images/d69b0de83b6e3b87908907522a79720953d0f77a0624c03cb20baa4f15068130" .
<http://data.vlaanderen.be/id/concept/Verkeersbordconcept/3f3beb2a2efd889416c05e8b0bc7c1d8ef625620d33dfeb6e5474723e29a60e0>	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"3f3beb2a2efd889416c05e8b0bc7c1d8ef625620d33dfeb6e5474723e29a60e0" ;
	skos:prefLabel	"E9a-schijf" ;
	mobiliteit:grafischeWeergave	"http://mobiliteit.vo.data.gift/images/1bc4d86006cd8168880b64c5a3dc45ba1e07c96147889923d2db49f7152a7369" .
<http://data.vlaanderen.be/id/concept/Verkeersbordconcept/42c98b00feb78b15d8c225f8f018a703480d224d7cf48dcb4dc9f6edefc24a6e>	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"42c98b00feb78b15d8c225f8f018a703480d224d7cf48dcb4dc9f6edefc24a6e" ;
	skos:prefLabel	"A1d" ;
	mobiliteit:grafischeWeergave	"http://mobiliteit.vo.data.gift/images/9137bbcceafb5c97eed297c02640f17b94af12984f0051b68b4e57884ce831f6" .
<http://data.vlaanderen.be/id/concept/Verkeersbordconcept/439b3909b6eae9c6a87120b407e1bdcc0245cda415266347b1f4b930f3573535>	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"439b3909b6eae9c6a87120b407e1bdcc0245cda415266347b1f4b930f3573535" ;
	skos:prefLabel	"B9" ;
	mobiliteit:grafischeWeergave	"http://mobiliteit.vo.data.gift/images/4012cddb21075f609771195065d29a00ec4f066fd31fdde516099449124f6474" .
<http://data.vlaanderen.be/id/concept/Verkeersbordconcept/44354ebf53e7112f55f992b3290d810f5291438b536af1f3ca8e5c630e25c75d>	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"44354ebf53e7112f55f992b3290d810f5291438b536af1f3ca8e5c630e25c75d" ;
	skos:prefLabel	"GXa" ;
	mobiliteit:grafischeWeergave	"http://mobiliteit.vo.data.gift/images/4720929beccb59b1b8696929af23886f10892e17a78b5fefad7e879378aa1bd2" .
<http://data.vlaanderen.be/id/concept/Verkeersbordconcept/451d20f38b98efda6f0fa73fb26cccda41070b772e3c4fcc46caee62e004ea08>	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"451d20f38b98efda6f0fa73fb26cccda41070b772e3c4fcc46caee62e004ea08" ;
	skos:prefLabel	"C29" ;
	mobiliteit:grafischeWeergave	"http://mobiliteit.vo.data.gift/images/7f82be2b3d0f0f59acc055c8fb2c7f85299450d37a64ce1c7d4521b61681723c" .
<http://data.vlaanderen.be/id/concept/Verkeersbordconcept/4666c7f416e910d3b442c51c1c32bbe3ce9ad324c2f07badfad9610431bf1484>	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"4666c7f416e910d3b442c51c1c32bbe3ce9ad324c2f07badfad9610431bf1484" ;
	skos:prefLabel	"E9g" ;
	mobiliteit:grafischeWeergave	"http://mobiliteit.vo.data.gift/images/a91f1bdeea0b13e398b0011bdfa1ad55a9e88fd57e72375cafd7d8916fb96f6d" .
<http://data.vlaanderen.be/id/concept/Verkeersbordconcept/467fd28bb6c20b60929465203bbfd0d9f76a94d43d9f41574871a594ef6b3846>	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"467fd28bb6c20b60929465203bbfd0d9f76a94d43d9f41574871a594ef6b3846" ;
	skos:prefLabel	"GVI" ;
	mobiliteit:grafischeWeergave	"http://mobiliteit.vo.data.gift/images/a56ff02a730fa23d49e825759a42a1c7c272b381d4bdc65e1e035c1df864f666" .
<http://data.vlaanderen.be/id/concept/Verkeersbordconcept/47b523a23f2f2f578d171d5d78d343d01f9b215858733370177c5aab37baa29c>	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"47b523a23f2f2f578d171d5d78d343d01f9b215858733370177c5aab37baa29c" ;
	skos:prefLabel	"C7" ;
	mobiliteit:grafischeWeergave	"http://mobiliteit.vo.data.gift/images/5000a8277e1f96710045fa773f74cbdafd8fe48fe837723fca73f636d39a7eb3" .
<http://data.vlaanderen.be/id/concept/Verkeersbordconcept/47c9ffa15a0316eb8144e48eed44bef295c2ea742b37ab6675268611cbbb5b64>	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"47c9ffa15a0316eb8144e48eed44bef295c2ea742b37ab6675268611cbbb5b64" ;
	skos:prefLabel	"E9f" ;
	mobiliteit:grafischeWeergave	"http://mobiliteit.vo.data.gift/images/840367645635f1d2078627544e70c0854b28abe2e22bfa656760bd70b9419518" .
<http://data.vlaanderen.be/id/concept/Verkeersbordconcept/492b1a013cb0ef68ac92d13765a85db932af9197bc4b54de570e8f3840be9df4>	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"492b1a013cb0ef68ac92d13765a85db932af9197bc4b54de570e8f3840be9df4" ;
	skos:prefLabel	"F23c" ;
	mobiliteit:grafischeWeergave	"http://mobiliteit.vo.data.gift/images/a7ea4a72603c752e448c71ef7ee486df62d337bf5bd1e4472802e68ad98816fe" .
<http://data.vlaanderen.be/id/concept/Verkeersbordconcept/49ac19779361b74b50f178346eac76bc4cb7781b84937abce11097acefec1f65>	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"49ac19779361b74b50f178346eac76bc4cb7781b84937abce11097acefec1f65" ;
	skos:prefLabel	"GIV_uitgezonderdbus" ;
	mobiliteit:grafischeWeergave	"http://mobiliteit.vo.data.gift/images/32003783aed1ff68ecced18b7cb777cd09ada09138050f1ae0f8dad170779387" .
<http://data.vlaanderen.be/id/concept/Verkeersbordconcept/4a03dff5c229e10fbe2544c11236dfce5ab592d70626a0a0671ee23c16585fa6>	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"4a03dff5c229e10fbe2544c11236dfce5ab592d70626a0a0671ee23c16585fa6" ;
	skos:prefLabel	"C46" ;
	mobiliteit:grafischeWeergave	"http://mobiliteit.vo.data.gift/images/ba54560744ae7cec353d1a0b2f01606d05aa16fe93fcff5a1867dfaa1079051c" .
<http://data.vlaanderen.be/id/concept/Verkeersbordconcept/4a2ec210cf9459059de87c11a70b40d957edeb78f302963e1a526a47406d11ec>	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"4a2ec210cf9459059de87c11a70b40d957edeb78f302963e1a526a47406d11ec" ;
	skos:prefLabel	"E9d" ;
	mobiliteit:grafischeWeergave	"http://mobiliteit.vo.data.gift/images/341926802e3aadb1e829d748a230d70c7ef82270d43b18d1a498107d74ce3e72" .
<http://data.vlaanderen.be/id/concept/Verkeersbordconcept/4aab258f2269849dfae22e9bd2eed707d5000596a243e4b0c2d2aff3eb87c300>	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"4aab258f2269849dfae22e9bd2eed707d5000596a243e4b0c2d2aff3eb87c300" ;
	skos:prefLabel	"GIV" ;
	mobiliteit:grafischeWeergave	"http://mobiliteit.vo.data.gift/images/2ded86711c9593e6a7d80e29e5f3b6ff69524d1a73dbddb5e6455f967cb0ef2e" .
<http://data.vlaanderen.be/id/concept/Verkeersbordconcept/4b73739e98275b80264431306def82137b81e5ca6020fd16ac31ee736dd8f766>	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"4b73739e98275b80264431306def82137b81e5ca6020fd16ac31ee736dd8f766" ;
	skos:prefLabel	"F23d" ;
	mobiliteit:grafischeWeergave	"http://mobiliteit.vo.data.gift/images/98e9008efcc71f3646a0771ab208babdd3bf98bd755e549e65483e8185d8d9de" .
<http://data.vlaanderen.be/id/concept/Verkeersbordconcept/4bab5d3b6d4cdfa0d66dcc14ee7107275e2e71e14aa7940e51bc3e94d804c993>	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"4bab5d3b6d4cdfa0d66dcc14ee7107275e2e71e14aa7940e51bc3e94d804c993" ;
	skos:prefLabel	"F18" ;
	mobiliteit:grafischeWeergave	"http://mobiliteit.vo.data.gift/images/7458397b2c5c98a74c8624fee270f70b72af9fae61437b2924d8bd27412b03ea" .
<http://data.vlaanderen.be/id/concept/Verkeersbordconcept/4cdd5c7ae7f47341ae64e5a6f0d87ef4af6a73fc3cd2ba5b1a46cd0fa9c83465>	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"4cdd5c7ae7f47341ae64e5a6f0d87ef4af6a73fc3cd2ba5b1a46cd0fa9c83465" ;
	skos:prefLabel	"D13" ;
	mobiliteit:grafischeWeergave	"http://mobiliteit.vo.data.gift/images/5cd866a09caa74a283fbd8108687acb9f7c8137ceab4bdf715394bf330e028a8" .
<http://data.vlaanderen.be/id/concept/Verkeersbordconcept/4f857c0f9709924a47488596aee4387e2729c35b5dd512c5492a9b78715bd326>	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"4f857c0f9709924a47488596aee4387e2729c35b5dd512c5492a9b78715bd326" ;
	skos:prefLabel	"E5" ;
	mobiliteit:grafischeWeergave	"http://mobiliteit.vo.data.gift/images/fea5c2bdaf989394a948cd75aef401f597805ddbc4ff5eb198f5aa5703e8e362" .
<http://data.vlaanderen.be/id/concept/Verkeersbordconcept/500d6d21fd7e19a7e3827a1c4c2ed2c459df6b38f570962b6de1168ac7be4768>	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"500d6d21fd7e19a7e3827a1c4c2ed2c459df6b38f570962b6de1168ac7be4768" ;
	skos:prefLabel	"A1c" ;
	mobiliteit:grafischeWeergave	"http://mobiliteit.vo.data.gift/images/dc9a9eecf10a12ab3720dc70c295bc045af8a4f703c91248fab5fe3d83a8ba24" .
<http://data.vlaanderen.be/id/concept/Verkeersbordconcept/527b2109b1aacf1a69f31cdae3721302a51a118469ac337c85aba921fa0dca13>	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"527b2109b1aacf1a69f31cdae3721302a51a118469ac337c85aba921fa0dca13" ;
	skos:prefLabel	"C5" ;
	mobiliteit:grafischeWeergave	"http://mobiliteit.vo.data.gift/images/b51006c34484f829be9bf64e25cdd7c95c8fbcb8e798416826268698c32a8a84" .
<http://data.vlaanderen.be/id/concept/Verkeersbordconcept/538c99f7923838b697983a850a957fce6013d760e3a55b55b54bd5e212d40a61>	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"538c99f7923838b697983a850a957fce6013d760e3a55b55b54bd5e212d40a61" ;
	skos:prefLabel	"F15" ;
	mobiliteit:grafischeWeergave	"http://mobiliteit.vo.data.gift/images/cbd42cad50325895f540f797b146f4c653e06582d4e7da598b10162cc251e1e1" .
<http://data.vlaanderen.be/id/concept/Verkeersbordconcept/54047e29ccc04a916773bfca49532da57a6cbb2d13cca7c0dd6b676b84e75576>	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"54047e29ccc04a916773bfca49532da57a6cbb2d13cca7c0dd6b676b84e75576" ;
	skos:prefLabel	"B22" ;
	mobiliteit:grafischeWeergave	"http://mobiliteit.vo.data.gift/images/570b88eb7d65c3a173bf5e064793ebf081f8b529e4f79dc1434233f7467f4919" .
<http://data.vlaanderen.be/id/concept/Verkeersbordconcept/5446d50a99626e166d9c93fa1a1be0a5be5cb038388d837a5efdc316a441c5c0>	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"5446d50a99626e166d9c93fa1a1be0a5be5cb038388d837a5efdc316a441c5c0" ;
	skos:prefLabel	"E9h" ;
	mobiliteit:grafischeWeergave	"http://mobiliteit.vo.data.gift/images/3c631bb1d4ac7958e0e36b0654f8734d6f64dca2f81f0c5fd44880d24a32267c" .
<http://data.vlaanderen.be/id/concept/Verkeersbordconcept/547a8f06c0039902f75a68c763d9e66605fe8e78b96375964a0c3765d6f71203>	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"547a8f06c0039902f75a68c763d9e66605fe8e78b96375964a0c3765d6f71203" ;
	skos:prefLabel	"F83" ;
	mobiliteit:grafischeWeergave	"http://mobiliteit.vo.data.gift/images/c7fbded1b42dac9a1d7de77accb94b1bdd0ec7681980dceac58dc61947896286" .
<http://data.vlaanderen.be/id/concept/Verkeersbordconcept/54ad701e9011dca3be225508dde2a32a71ba17f7ca88e404a61b152dab402461>	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"54ad701e9011dca3be225508dde2a32a71ba17f7ca88e404a61b152dab402461" ;
	skos:prefLabel	"A45" ;
	mobiliteit:grafischeWeergave	"http://mobiliteit.vo.data.gift/images/e222fd30132d2f2d3f817530febb74bd6899e9943b67eacf331da306a5252f60" .
<http://data.vlaanderen.be/id/concept/Verkeersbordconcept/55162fd0c4ace95126afa15608016924b948ff4f6a955a6cb908d0c46262737c>	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"55162fd0c4ace95126afa15608016924b948ff4f6a955a6cb908d0c46262737c" ;
	skos:prefLabel	"C41" ;
	mobiliteit:grafischeWeergave	"http://mobiliteit.vo.data.gift/images/e510033cbca070d939ecb4e7abb7358ec511709098f7fbaa6c477b6b7a7603d4" .
<http://data.vlaanderen.be/id/concept/Verkeersbordconcept/553eb02c10145ea8fe7f2fc09a66a48da4820fa012c9697d49b16acc7df3a041>	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"553eb02c10145ea8fe7f2fc09a66a48da4820fa012c9697d49b16acc7df3a041" ;
	skos:prefLabel	"A47" ;
	mobiliteit:grafischeWeergave	"http://mobiliteit.vo.data.gift/images/81f3661bb5ad062e22f11c8a6408347f38529d15d0b65df7bfb03b7a2b5e03f7" .
<http://data.vlaanderen.be/id/concept/Verkeersbordconcept/55f0a4e186dc201149bd8509e0ea6fe363b86ef16f6f0766557a946572deb168>	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"55f0a4e186dc201149bd8509e0ea6fe363b86ef16f6f0766557a946572deb168" ;
	skos:prefLabel	"C48" ;
	mobiliteit:grafischeWeergave	"http://mobiliteit.vo.data.gift/images/2a0ecba3f7bfaceba03864003ff92b6ad51c7a421512ddaf3f83a9f6d9572884" .
<http://data.vlaanderen.be/id/concept/Verkeersbordconcept/57fdbb852e7bdcb6450e61b8d6b837930a26881c6709e2e456c3544d5cb465c9>	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"57fdbb852e7bdcb6450e61b8d6b837930a26881c6709e2e456c3544d5cb465c9" ;
	skos:prefLabel	"GVIII" ;
	mobiliteit:grafischeWeergave	"http://mobiliteit.vo.data.gift/images/26604b9990a5b68dcb4b5c4a4ff8f2fd9e515c0b7df8d1a81e70ccf3d981066d" .
<http://data.vlaanderen.be/id/concept/Verkeersbordconcept/599f34b8118a89d905d6e43944f22489fe770131e8d492bb92e62053afa13016>	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"599f34b8118a89d905d6e43944f22489fe770131e8d492bb92e62053afa13016" ;
	skos:prefLabel	"F79" ;
	mobiliteit:grafischeWeergave	"http://mobiliteit.vo.data.gift/images/81baaf81dc070641210517f93f1b6ea9e182f847628d977df88641f456dc500f" .
<http://data.vlaanderen.be/id/concept/Verkeersbordconcept/5a99bb07ee0886bcbc996b67327b2977bc70e67ad9ee9649d7e24f44f68b4684>	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"5a99bb07ee0886bcbc996b67327b2977bc70e67ad9ee9649d7e24f44f68b4684" ;
	skos:prefLabel	"F103" ;
	mobiliteit:grafischeWeergave	"http://mobiliteit.vo.data.gift/images/4561c65ad0c85f6bece5b9d7013d9ce09b9c6a6fab849f8dcd6f9b71281ee5b9" .
<http://data.vlaanderen.be/id/concept/Verkeersbordconcept/5d898e118d9f413d489cefe38a675ecab0c3a1a554475275b32fdb1e7f3a25da>	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"5d898e118d9f413d489cefe38a675ecab0c3a1a554475275b32fdb1e7f3a25da" ;
	skos:prefLabel	"F9" ;
	mobiliteit:grafischeWeergave	"http://mobiliteit.vo.data.gift/images/0ba92d7a27c077774e634811f0269377f43ed66186a43db6320a150084de0826" .
<http://data.vlaanderen.be/id/concept/Verkeersbordconcept/600b30431b96653057da8e807aa49c299ea450433b59291ba1e2442656d309ab>	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"600b30431b96653057da8e807aa49c299ea450433b59291ba1e2442656d309ab" ;
	skos:prefLabel	"M4" ;
	mobiliteit:grafischeWeergave	"http://mobiliteit.vo.data.gift/images/ec6812d215efe0f4d65b7b9926c1e57d66d9520c681e93f317d6821e69b28e7d" .
<http://data.vlaanderen.be/id/concept/Verkeersbordconcept/62322bcd7dbc57bff8219bd973ea664671c3788c7444be7bd6e2b8a773f4308b>	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"62322bcd7dbc57bff8219bd973ea664671c3788c7444be7bd6e2b8a773f4308b" ;
	skos:prefLabel	"F13" ;
	mobiliteit:grafischeWeergave	"http://mobiliteit.vo.data.gift/images/193808d9b4552e1e910cbcb5b49b553c6b7473457f9e24dc2110d970566026cc" .
<http://data.vlaanderen.be/id/concept/Verkeersbordconcept/62da21c7e453f5de930d244fbcf47580bd1f1b1773faf0c4c15a81a8f2cc3879>	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"62da21c7e453f5de930d244fbcf47580bd1f1b1773faf0c4c15a81a8f2cc3879" ;
	skos:prefLabel	"M9" ;
	mobiliteit:grafischeWeergave	"http://mobiliteit.vo.data.gift/images/311c358d6921f23570a3549cc95defc731ebd375c9701f2d98041e9e9867a3dd" .
<http://data.vlaanderen.be/id/concept/Verkeersbordconcept/63eca6e1d18ff9e92f71db5b637c0763e87b2d97fbdd6b1eb58e11a3514f8d8f>	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"63eca6e1d18ff9e92f71db5b637c0763e87b2d97fbdd6b1eb58e11a3514f8d8f" ;
	skos:prefLabel	"M14" ;
	mobiliteit:grafischeWeergave	"http://mobiliteit.vo.data.gift/images/9ea605176224681ec04e007fc7b7e21eade226da6561a6bc94f899c7fbcf6d2f" .
<http://data.vlaanderen.be/id/concept/Verkeersbordconcept/64d0148e08734e74f31a183130ab616a3fdb25ab8bd1c60a9cbb6b918908b244>	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"64d0148e08734e74f31a183130ab616a3fdb25ab8bd1c60a9cbb6b918908b244" ;
	skos:prefLabel	"B19" ;
	mobiliteit:grafischeWeergave	"http://mobiliteit.vo.data.gift/images/6447329c629b9590fa03efb46e494d98a8e1340c798afd2880199c1c5077f300" .
<http://data.vlaanderen.be/id/concept/Verkeersbordconcept/6863e3797bc06c1ef11a793e4462a32ccfc45d31642213209c15f87339a279f5>	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"6863e3797bc06c1ef11a793e4462a32ccfc45d31642213209c15f87339a279f5" ;
	skos:prefLabel	"C24c" ;
	mobiliteit:grafischeWeergave	"http://mobiliteit.vo.data.gift/images/987c56fec371b752f8e5027f9d0171fc3328dc96e831cdb3cec4dd89b41e9b33" .
<http://data.vlaanderen.be/id/concept/Verkeersbordconcept/69789f034ab0b39016cd2d17ac594edf1aaf3f5b7e167fb85025483c2bd63bf2>	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"69789f034ab0b39016cd2d17ac594edf1aaf3f5b7e167fb85025483c2bd63bf2" ;
	skos:prefLabel	"C27" ;
	mobiliteit:grafischeWeergave	"http://mobiliteit.vo.data.gift/images/73aa535474b9ef8b97ad12441b37951cf017df79df738cb5289814c80558729c" .
<http://data.vlaanderen.be/id/concept/Verkeersbordconcept/6b9d9a56cad922f1f99e67ff6b775a49acd896a04c8cdb1d69faab0255ef3260>	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"6b9d9a56cad922f1f99e67ff6b775a49acd896a04c8cdb1d69faab0255ef3260" ;
	skos:prefLabel	"GVIIa" ;
	mobiliteit:grafischeWeergave	"http://mobiliteit.vo.data.gift/images/f1bbe34257a7384f78134a60d7e52cfd22df2c4635340b5da9920a17e6f26d55" .
<http://data.vlaanderen.be/id/concept/Verkeersbordconcept/6bf808b4f6ff1a24e5646ab44302ae87252ec04dc0ffc5f49d14253b2e4c4c6c>	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"6bf808b4f6ff1a24e5646ab44302ae87252ec04dc0ffc5f49d14253b2e4c4c6c" ;
	skos:prefLabel	"F1a" ;
	mobiliteit:grafischeWeergave	"http://mobiliteit.vo.data.gift/images/a7ae38cb02c755a5b83ae0598827043ec116ae50e4c936cd7bc3cc3975c60e32" .
<http://data.vlaanderen.be/id/concept/Verkeersbordconcept/6cebe8cd9a145b9791d607b6b66fee19a080ab8efecdca98bef9dde1d7a3c228>	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"6cebe8cd9a145b9791d607b6b66fee19a080ab8efecdca98bef9dde1d7a3c228" ;
	skos:prefLabel	"C39" ;
	mobiliteit:grafischeWeergave	"http://mobiliteit.vo.data.gift/images/8d0bc2f6a6f458eb8f717a20743ed5200dfd98ddc56906d8c7334afd8903ec47" .
<http://data.vlaanderen.be/id/concept/Verkeersbordconcept/6d0c27ab98b20311e8a9ca5eb570d9ad005e7f6c92abdd46a4b99789124299bf>	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"6d0c27ab98b20311e8a9ca5eb570d9ad005e7f6c92abdd46a4b99789124299bf" ;
	skos:prefLabel	"A1a" ;
	mobiliteit:grafischeWeergave	"http://mobiliteit.vo.data.gift/images/a02d4e14cc9f0ac2a9e4201d535c302775fb725f2c87113c190cfcb632d48a40" .
<http://data.vlaanderen.be/id/concept/Verkeersbordconcept/6d546c2d3ee4a4fb232dbc72a0f4d6e6b27344ceb4ec3d03f8f98cc669f5f280>	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"6d546c2d3ee4a4fb232dbc72a0f4d6e6b27344ceb4ec3d03f8f98cc669f5f280" ;
	skos:prefLabel	"C49" ;
	mobiliteit:grafischeWeergave	"http://mobiliteit.vo.data.gift/images/e16207b38f1e5fae9dd42789755c34b872832b7f688dcdbd806cc236c04000ae" .
<http://data.vlaanderen.be/id/concept/Verkeersbordconcept/6ff25f28ed1b550860a007d3fbd8590b1839dd86adbc87b578dd57aa572e427d>	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"6ff25f28ed1b550860a007d3fbd8590b1839dd86adbc87b578dd57aa572e427d" ;
	skos:prefLabel	"F3a" ;
	mobiliteit:grafischeWeergave	"http://mobiliteit.vo.data.gift/images/28a979106c207631a26a172eee427d2cb7e1e764273be352325af2ac5bf57f08" .
<http://data.vlaanderen.be/id/concept/Verkeersbordconcept/73038f34804b2c4b5552eadd2cb7c8c677f7e7386e48286ac75873cb030fd617>	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"73038f34804b2c4b5552eadd2cb7c8c677f7e7386e48286ac75873cb030fd617" ;
	skos:prefLabel	"C17" ;
	mobiliteit:grafischeWeergave	"http://mobiliteit.vo.data.gift/images/15678e299dba6b611ea44867a9d38747b08b6542f37bf59deddc190e11fa9510" .
<http://data.vlaanderen.be/id/concept/Verkeersbordconcept/734eff1afee00937cb46123d801e75ac98a1d26e186d8f2386cc6df45e31d324>	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"734eff1afee00937cb46123d801e75ac98a1d26e186d8f2386cc6df45e31d324" ;
	skos:prefLabel	"M12" ;
	mobiliteit:grafischeWeergave	"http://mobiliteit.vo.data.gift/images/72f7967fc6835f70aba9d7d65f2d466a06960f5e34fa4c9d971b3f64bfcac6cc" .
<http://data.vlaanderen.be/id/concept/Verkeersbordconcept/735cd32e48f1535d2c9a1dc572e8e03a3d5907b7402675f901672d6c28d1a341>	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"735cd32e48f1535d2c9a1dc572e8e03a3d5907b7402675f901672d6c28d1a341" ;
	skos:prefLabel	"GXc" ;
	mobiliteit:grafischeWeergave	"http://mobiliteit.vo.data.gift/images/57a57a40ec7569de0ef96492d52e12725127bf7f6fb06b66056655e25c1da4c7" .
<http://data.vlaanderen.be/id/concept/Verkeersbordconcept/73b92a883ff7418db03e46e5b052d14a3e7e9c5ad12d643a6660fcb11160d9da>	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"73b92a883ff7418db03e46e5b052d14a3e7e9c5ad12d643a6660fcb11160d9da" ;
	skos:prefLabel	"A49" ;
	mobiliteit:grafischeWeergave	"http://mobiliteit.vo.data.gift/images/e64073fb6b95bb62b4f74cb06c33dffb3b2358bd78e7fc95b345728d9608755c" .
<http://data.vlaanderen.be/id/concept/Verkeersbordconcept/776b131c49bdc5b9b88d8a534acb9db8cd16a28f9ef15283f4c67bbf27e3bbce>	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"776b131c49bdc5b9b88d8a534acb9db8cd16a28f9ef15283f4c67bbf27e3bbce" ;
	skos:prefLabel	"GIa_150m" ;
	mobiliteit:grafischeWeergave	"http://mobiliteit.vo.data.gift/images/928f63b748baba5fa58f33582e828083e2a367717e3c4497764f4e0e4478ad04" .
<http://data.vlaanderen.be/id/concept/Verkeersbordconcept/780a355dca03588365bd17c52308b8ffc4348db47d678d418462a2b01482b349>	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"780a355dca03588365bd17c52308b8ffc4348db47d678d418462a2b01482b349" ;
	skos:prefLabel	"M20" ;
	mobiliteit:grafischeWeergave	"http://mobiliteit.vo.data.gift/images/2a539f7c09d8f74b076ab38367c42c94f235e9d412ad63951b208e36d573a850" .
<http://data.vlaanderen.be/id/concept/Verkeersbordconcept/79b74b6bfaa129c36bdd8fc39a0e071a15e6be38a4ec37bc0c34206fcc6a8d55>	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"79b74b6bfaa129c36bdd8fc39a0e071a15e6be38a4ec37bc0c34206fcc6a8d55" ;
	skos:prefLabel	"F12b" ;
	mobiliteit:grafischeWeergave	"http://mobiliteit.vo.data.gift/images/3f795d7185fd2a9f7e47ca19a9e5d5e9d570d5a13215e058feb24760bdec1af1" .
<http://data.vlaanderen.be/id/concept/Verkeersbordconcept/79d0bab2f07f815d457412b68edab1ba70ee15764d5fcbb531fa87ce24574da6>	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"79d0bab2f07f815d457412b68edab1ba70ee15764d5fcbb531fa87ce24574da6" ;
	skos:prefLabel	"GIa" ;
	mobiliteit:grafischeWeergave	"http://mobiliteit.vo.data.gift/images/0a816bb4aad1fc328653ce5ccb04a87ab796e2c51f8062f3258f889652a6847e" .
<http://data.vlaanderen.be/id/concept/Verkeersbordconcept/7b796f77edc7d487881bd4fbc5faebda6d803ff899740de440211257d706c136>	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"7b796f77edc7d487881bd4fbc5faebda6d803ff899740de440211257d706c136" ;
	skos:prefLabel	"D7" ;
	mobiliteit:grafischeWeergave	"http://mobiliteit.vo.data.gift/images/95f79f1453a1c21013f6d7d148f118650acf57ce85cdec321feb6a43c7546172" .
<http://data.vlaanderen.be/id/concept/Verkeersbordconcept/7caaef3cd26c046e13d8b8e83e779b6c77cb9e7330dd714ed902322f68be52e8>	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"7caaef3cd26c046e13d8b8e83e779b6c77cb9e7330dd714ed902322f68be52e8" ;
	skos:prefLabel	"GVa" ;
	mobiliteit:grafischeWeergave	"http://mobiliteit.vo.data.gift/images/6d1fcdfe1c9fb2d938b7492b5c04ce548dbdce8e8f514e02f0d1ff8ecfbe21d3" .
<http://data.vlaanderen.be/id/concept/Verkeersbordconcept/7cb4bc8c642fb904193fefc1ab8fbdbfa85467d2e1f4740a6946044bee4517a5>	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"7cb4bc8c642fb904193fefc1ab8fbdbfa85467d2e1f4740a6946044bee4517a5" ;
	skos:prefLabel	"GIXa" ;
	mobiliteit:grafischeWeergave	"http://mobiliteit.vo.data.gift/images/f8fb30809ddc1881bdd5c329c60e2b3f607bd52c37a138a76f78ddbd31497086" .
<http://data.vlaanderen.be/id/concept/Verkeersbordconcept/7d6a7b43528f9c71a42780a01dd1e43e1db1e2675c4f3e18effe6939bbc663ee>	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"7d6a7b43528f9c71a42780a01dd1e43e1db1e2675c4f3e18effe6939bbc663ee" ;
	skos:prefLabel	"C1" ;
	mobiliteit:grafischeWeergave	"http://mobiliteit.vo.data.gift/images/df653615a16ae06feaca7f04d6a116313d1da252f9e53f58379962096268381a" .
<http://data.vlaanderen.be/id/concept/Verkeersbordconcept/7da45b71ecfe8253f0cb56c27522c8372376ef6fdd3506e7e94ab4fdd7dd2e36>	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"7da45b71ecfe8253f0cb56c27522c8372376ef6fdd3506e7e94ab4fdd7dd2e36" ;
	skos:prefLabel	"F45" ;
	mobiliteit:grafischeWeergave	"http://mobiliteit.vo.data.gift/images/8a63d052945b42e274aadc5352422332573ed38e86cb85c8127adec656e9a205" .
<http://data.vlaanderen.be/id/concept/Verkeersbordconcept/81bc87f63baaf3f9257402ab10c859049afdc4440b2e2065837b424b97152781>	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"81bc87f63baaf3f9257402ab10c859049afdc4440b2e2065837b424b97152781" ;
	skos:prefLabel	"GIa_200m" ;
	mobiliteit:grafischeWeergave	"http://mobiliteit.vo.data.gift/images/e083e19f74eda7c6818f0a63d10a58b148a9683c7e718218d832e0cb2b818251" .
<http://data.vlaanderen.be/id/concept/Verkeersbordconcept/81dacb65d15dc41b3f92ffeb9b6d8a776180c1261b69d74db5783bcdb3d3e79f>	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"81dacb65d15dc41b3f92ffeb9b6d8a776180c1261b69d74db5783bcdb3d3e79f" ;
	skos:prefLabel	"C6" ;
	mobiliteit:grafischeWeergave	"http://mobiliteit.vo.data.gift/images/f75d3649d42f366bcf93651db324ed9459750a1187aaa1ecedf37931c57b6761" .
<http://data.vlaanderen.be/id/concept/Verkeersbordconcept/838ee6f9581cc3356ca509419cbeec9195dbb5e6d5aaf5e1f3fd16315a45d5e3>	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"838ee6f9581cc3356ca509419cbeec9195dbb5e6d5aaf5e1f3fd16315a45d5e3" ;
	skos:prefLabel	"A5" ;
	mobiliteit:grafischeWeergave	"http://mobiliteit.vo.data.gift/images/9253d9b5ece6bed3c022a371310e1c10c53184287af8a397055d110a5e6f88e8" .
<http://data.vlaanderen.be/id/concept/Verkeersbordconcept/84567323c818fdb559cc3df4dbc141d3e24efcf6f528473c5c0ec20e180e56e2>	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"84567323c818fdb559cc3df4dbc141d3e24efcf6f528473c5c0ec20e180e56e2" ;
	skos:prefLabel	"GVIId" ;
	mobiliteit:grafischeWeergave	"http://mobiliteit.vo.data.gift/images/4b0b8a46395448c496a786b27e553b70369b899b38e3579448cde9e248b3611e" .
<http://data.vlaanderen.be/id/concept/Verkeersbordconcept/87633686f31916bfc50b2225ce37ec54affbc79f79e9eea1e4a5cf64740697f4>	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"87633686f31916bfc50b2225ce37ec54affbc79f79e9eea1e4a5cf64740697f4" ;
	skos:prefLabel	"M17" ;
	mobiliteit:grafischeWeergave	"http://mobiliteit.vo.data.gift/images/a8d8f85cc8e39f70dec3c2cd0e6ff2c64a61ebe38d65048d3d0aef7f033a2b63" .
<http://data.vlaanderen.be/id/concept/Verkeersbordconcept/8780c6ff79d2880d39cbcddb3ed380dd006dcecfedb661a2891dc5f45c09b876>	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"8780c6ff79d2880d39cbcddb3ed380dd006dcecfedb661a2891dc5f45c09b876" ;
	skos:prefLabel	"F23a" ;
	mobiliteit:grafischeWeergave	"http://mobiliteit.vo.data.gift/images/5328b934938bdddce0158154679cba2e7707af38f78d4741732d3da3c5e9c171" .
<http://data.vlaanderen.be/id/concept/Verkeersbordconcept/87812202afe8a44d0a9fed57a3210338651f31fca8d666dbeda867dadced3ea4>	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"87812202afe8a44d0a9fed57a3210338651f31fca8d666dbeda867dadced3ea4" ;
	skos:prefLabel	"F49" ;
	mobiliteit:grafischeWeergave	"http://mobiliteit.vo.data.gift/images/012deb89a688825acc8f54d983b9f1c1934bee8fd56f6a8567fcb7d152af2000" .
<http://data.vlaanderen.be/id/concept/Verkeersbordconcept/879cbc04eb6fbbffdfcd88eaa139e13eac46bc673eb733f16612e02fed94ea11>	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"879cbc04eb6fbbffdfcd88eaa139e13eac46bc673eb733f16612e02fed94ea11" ;
	skos:prefLabel	"F117" ;
	mobiliteit:grafischeWeergave	"http://mobiliteit.vo.data.gift/images/10419525a23842385ccbd6a9f7185fb88b8fbaf7c4aa96dda0116182fa7b8235" .
<http://data.vlaanderen.be/id/concept/Verkeersbordconcept/8829a597cda9aea1fbcfe58f9de0c29f2c28dcd007c3d7e746b0e4920cc4dccc>	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"8829a597cda9aea1fbcfe58f9de0c29f2c28dcd007c3d7e746b0e4920cc4dccc" ;
	skos:prefLabel	"GIXa_r" ;
	mobiliteit:grafischeWeergave	"http://mobiliteit.vo.data.gift/images/afe1910072c1cb81cd717df4af032996330ae91dfdbc28839c2f5c4467f11481" .
<http://data.vlaanderen.be/id/concept/Verkeersbordconcept/8eea1ddf2b9b0a77c5045b557b58076973bca0e74be65ff2f4345a9a8f817a1d>	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"8eea1ddf2b9b0a77c5045b557b58076973bca0e74be65ff2f4345a9a8f817a1d" ;
	skos:prefLabel	"F33c" ;
	mobiliteit:grafischeWeergave	"http://mobiliteit.vo.data.gift/images/2741781f93836b50f8116fe35aa914355708c87b3c8d15ee98746c54b5927898" .
<http://data.vlaanderen.be/id/concept/Verkeersbordconcept/8f944b59e51667751b676806d537c79e3be7e38545f1e276fe5db1b5081ef5fc>	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"8f944b59e51667751b676806d537c79e3be7e38545f1e276fe5db1b5081ef5fc" ;
	skos:prefLabel	"F87" ;
	mobiliteit:grafischeWeergave	"http://mobiliteit.vo.data.gift/images/833e0e739cfa99d394dcc85f299db3548e3a07bd9a6739cfdb0c270cc8eeb950" .
<http://data.vlaanderen.be/id/concept/Verkeersbordconcept/9221a92ee3308a85d25ad18bc925e8d13f1e89735ea43307c266f363c3ef299f>	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"9221a92ee3308a85d25ad18bc925e8d13f1e89735ea43307c266f363c3ef299f" ;
	skos:prefLabel	"F1a_H" ;
	mobiliteit:grafischeWeergave	"http://mobiliteit.vo.data.gift/images/a7ae38cb02c755a5b83ae0598827043ec116ae50e4c936cd7bc3cc3975c60e32" .
<http://data.vlaanderen.be/id/concept/Verkeersbordconcept/92221b27491e15c4a76e505ed093e03da7f934f98c4befe5be99af71601615c5>	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"92221b27491e15c4a76e505ed093e03da7f934f98c4befe5be99af71601615c5" ;
	skos:prefLabel	"A39" ;
	mobiliteit:grafischeWeergave	"http://mobiliteit.vo.data.gift/images/abd5d3d84b0e8a9059abf2159d7c674204e93c851cf6f425243f551286d33010" .
<http://data.vlaanderen.be/id/concept/Verkeersbordconcept/92be90daa71f882c22281e67a3521120343b84e67214acf4156f6ef71132b79c>	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"92be90daa71f882c22281e67a3521120343b84e67214acf4156f6ef71132b79c" ;
	skos:prefLabel	"A7a" ;
	mobiliteit:grafischeWeergave	"http://mobiliteit.vo.data.gift/images/e1370ba6a8a3e54daaacce48b7c355e3d0c1527e419ff1983b70617837cd9a95" .
<http://data.vlaanderen.be/id/concept/Verkeersbordconcept/9375ac24955c89adb412e5bb7e3c4f56d0ebde1022963bf84e52affd987715e3>	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"9375ac24955c89adb412e5bb7e3c4f56d0ebde1022963bf84e52affd987715e3" ;
	skos:prefLabel	"M13" ;
	mobiliteit:grafischeWeergave	"http://mobiliteit.vo.data.gift/images/630d2115a976d7424b3ceb4d1e9ad4b80d723f813f7dee78b1dd66a11bbaea8e" .
<http://data.vlaanderen.be/id/concept/Verkeersbordconcept/950eeeaa70a8d7b9c29056a248fa0e673881f37a10fdce925e969828af827272>	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"950eeeaa70a8d7b9c29056a248fa0e673881f37a10fdce925e969828af827272" ;
	skos:prefLabel	"C45" ;
	mobiliteit:grafischeWeergave	"http://mobiliteit.vo.data.gift/images/19e284726a577592cc9eaafef5eab2a6bf07856f42b70dc176937fc582172d42" .
<http://data.vlaanderen.be/id/concept/Verkeersbordconcept/954557c970fea1888c7cd5fd11d1a1fd582517da4a05a02fc34599eb36853a76>	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"954557c970fea1888c7cd5fd11d1a1fd582517da4a05a02fc34599eb36853a76" ;
	skos:prefLabel	"F5" ;
	mobiliteit:grafischeWeergave	"http://mobiliteit.vo.data.gift/images/e67a5443a00b12b1a264fa15bf99ea605441a8e2b925190c2b67c239fe8ab2eb" .
<http://data.vlaanderen.be/id/concept/Verkeersbordconcept/955ad6f4bcf6b031cbf9932796d04f346c661c96e4fadb8db28e035ac9583a3a>	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"955ad6f4bcf6b031cbf9932796d04f346c661c96e4fadb8db28e035ac9583a3a" ;
	skos:prefLabel	"F118" ;
	mobiliteit:grafischeWeergave	"http://mobiliteit.vo.data.gift/images/892f49d61df2920044a59545a6995151d225cd79b3d50ee484fe00ddec40c886" .
<http://data.vlaanderen.be/id/concept/Verkeersbordconcept/9606024f199e0c7ed18cbcd1e0cf10e4628fcd80760af8a47e876ce9773eb593>	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"9606024f199e0c7ed18cbcd1e0cf10e4628fcd80760af8a47e876ce9773eb593" ;
	skos:prefLabel	"A9" ;
	mobiliteit:grafischeWeergave	"http://mobiliteit.vo.data.gift/images/b88ccd2b6b0eebc0355a7d4074892c760d6b6a72b5e1ef3e1a59ff2b73acc597" .
<http://data.vlaanderen.be/id/concept/Verkeersbordconcept/960fda0353243b3df9cd3b6cb43802d14500c1317b3aa320e63e247f3388c205>	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"960fda0353243b3df9cd3b6cb43802d14500c1317b3aa320e63e247f3388c205" ;
	skos:prefLabel	"F47" ;
	mobiliteit:grafischeWeergave	"http://mobiliteit.vo.data.gift/images/5b63b5579ac5756a13e2cb6f2993b8937193c52f0681ddb7f7fb8036591bd865" .
<http://data.vlaanderen.be/id/concept/Verkeersbordconcept/9a99ae7486d2f485d6540fb82b5c12d732788b46dcc66a2a5fcd0966929c6a43>	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"9a99ae7486d2f485d6540fb82b5c12d732788b46dcc66a2a5fcd0966929c6a43" ;
	skos:prefLabel	"E9c" ;
	mobiliteit:grafischeWeergave	"http://mobiliteit.vo.data.gift/images/dcede3888035ec32b3bf1a50eec6d5eb82c6e20641c274d6bf9afe455635b17a" .
<http://data.vlaanderen.be/id/concept/Verkeersbordconcept/9b894b5309edf009f7109cca9b21f2bad5d4b708a8d117b62c33a08dfec00f86>	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"9b894b5309edf009f7109cca9b21f2bad5d4b708a8d117b62c33a08dfec00f86" ;
	skos:prefLabel	"F3a_V" ;
	mobiliteit:grafischeWeergave	"http://mobiliteit.vo.data.gift/images/c512ce059e0a780c6f5f3d185208b951c2e07f9bfd6c404316d4c7fb91dc8795" .
<http://data.vlaanderen.be/id/concept/Verkeersbordconcept/9cbedafef411f1c41317f8b9f4066ea6eccfc832edfc930d421725c3ebc5c167>	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"9cbedafef411f1c41317f8b9f4066ea6eccfc832edfc930d421725c3ebc5c167" ;
	skos:prefLabel	"A3" ;
	mobiliteit:grafischeWeergave	"http://mobiliteit.vo.data.gift/images/c1b72c2960a2861d6c89b96db75b903061685d93646419147e4cdadfb05dee87" .
<http://data.vlaanderen.be/id/concept/Verkeersbordconcept/9e319ef775f2e8904c19ee5283ca886508e3f5d67543cc7accc5b128974d2c03>	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"9e319ef775f2e8904c19ee5283ca886508e3f5d67543cc7accc5b128974d2c03" ;
	skos:prefLabel	"F97r" ;
	mobiliteit:grafischeWeergave	"http://mobiliteit.vo.data.gift/images/25ec9fe86a21fb02f16cf52b09f63310bec270df845cdec10dbe2b74cd9c784c" .
<http://data.vlaanderen.be/id/concept/Verkeersbordconcept/9f44a10f221152c659d9485e0ad976c7950844d23a3ac4896ea520bd87b868ff>	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"9f44a10f221152c659d9485e0ad976c7950844d23a3ac4896ea520bd87b868ff" ;
	skos:prefLabel	"F50" ;
	mobiliteit:grafischeWeergave	"http://mobiliteit.vo.data.gift/images/d1c61fd4a3fd48cacd52e0907a18a6a9e1e18b032794ffd8b654f975edc7135c" .
ns4:a03dc4c14ea95352be3a61e999b541bf18b13f979a0a8fe127feee53b4fae490	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"a03dc4c14ea95352be3a61e999b541bf18b13f979a0a8fe127feee53b4fae490" ;
	skos:prefLabel	"F12a" ;
	mobiliteit:grafischeWeergave	"http://mobiliteit.vo.data.gift/images/3ab82d640086df2034159241676827d3bf9ddad816b3ad3f3316a16f40c5ac54" .
ns4:a044fe2e77e31276281d1e915f9cfbd97cc4bfc7505087987a13d9b27f2a1ca4	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"a044fe2e77e31276281d1e915f9cfbd97cc4bfc7505087987a13d9b27f2a1ca4" ;
	skos:prefLabel	"F101c" ;
	mobiliteit:grafischeWeergave	"http://mobiliteit.vo.data.gift/images/8df23962ac512bcadecfbfa4ac6a8a821650ecb8c28f24501957a8443e19d383" .
ns4:a12dc2565be0dd45f62af20493a2dbc17d83b544db425a804bdbe56f6d99b8cd	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"a12dc2565be0dd45f62af20493a2dbc17d83b544db425a804bdbe56f6d99b8cd" ;
	skos:prefLabel	"F101b" ;
	mobiliteit:grafischeWeergave	"http://mobiliteit.vo.data.gift/images/f4e0c95c822e4791951a954f638a621c70387e51bc819951925c8e1bbc7420bb" .
ns4:a14b8cd76fbf8e965f47adc3644eec7c9aaeb64927c755a6fb67de6d63a236ef	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"a14b8cd76fbf8e965f47adc3644eec7c9aaeb64927c755a6fb67de6d63a236ef" ;
	skos:prefLabel	"F19" ;
	mobiliteit:grafischeWeergave	"http://mobiliteit.vo.data.gift/images/a1bf43edf9d7e4000994cded8d6440977ffb9952e6bad940ced003ff70d3ce12" .
ns4:a4ceb321992924e35fa9b5a9a1915c4b82cb515e11fbc0379b255b4dcbc37631	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"a4ceb321992924e35fa9b5a9a1915c4b82cb515e11fbc0379b255b4dcbc37631" ;
	skos:prefLabel	"F1a_V" ;
	mobiliteit:grafischeWeergave	"http://mobiliteit.vo.data.gift/images/f2e1750495edb5bafac733c298de4ae3091c3cc0f895d4e2bd80b8ced5d661d2" .
ns4:a5124762c35c1d71e97bc164c78ed9e82ce7b2fd1967ebb7f6882633fc9faba9	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"a5124762c35c1d71e97bc164c78ed9e82ce7b2fd1967ebb7f6882633fc9faba9" ;
	skos:prefLabel	"M18" ;
	mobiliteit:grafischeWeergave	"http://mobiliteit.vo.data.gift/images/65f718bb5c9898e815aaace265195666c9421c7ba8e9cf850feabc9311516d13" .
ns4:adf551bbe4b45fb09fe65bbd515889acb611157d02385990ea44406c29376eef	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"adf551bbe4b45fb09fe65bbd515889acb611157d02385990ea44406c29376eef" ;
	skos:prefLabel	"F97" ;
	mobiliteit:grafischeWeergave	"http://mobiliteit.vo.data.gift/images/470d5606a4ffcc575c02e0aba7357131bea7f014fb7be2e07c461c068fd17a9e" .
ns4:aee7ac92ad6686f4734d30b0a257d174bc3543562c4afdfb6e8dbc600da44fbd	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"aee7ac92ad6686f4734d30b0a257d174bc3543562c4afdfb6e8dbc600da44fbd" ;
	skos:prefLabel	"F85" ;
	mobiliteit:grafischeWeergave	"http://mobiliteit.vo.data.gift/images/9d3e656a9d2e6cec0ccf48acca650ad3d2ee97b66233fdf0d77c0f29dc0c1ace" .
ns4:b01d15be48cc1bd95ada28cae1c18e37e64fbb723a83950eb6f9b1126b63c692	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"b01d15be48cc1bd95ada28cae1c18e37e64fbb723a83950eb6f9b1126b63c692" ;
	skos:prefLabel	"F99a" ;
	mobiliteit:grafischeWeergave	"https://dev.roadsigns.lblod.info/files/618edcfb2a7b3b000d000026/download" .
ns4:b0b50921fd34b0b2d4b4a8c72dbb7872071dc3b15a492ac77683707d308feae1	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"b0b50921fd34b0b2d4b4a8c72dbb7872071dc3b15a492ac77683707d308feae1" ;
	skos:prefLabel	"D11" ;
	mobiliteit:grafischeWeergave	"http://mobiliteit.vo.data.gift/images/c396501da0b29b0d9f54b226d95645baca6667eaac104531f9d4d6de5e6f88ba" .
ns4:b177403ff3ec65e0de763fd5d54110e4b57d0665b84eeb89ab2d6e7268bc37c1	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"b177403ff3ec65e0de763fd5d54110e4b57d0665b84eeb89ab2d6e7268bc37c1" ;
	skos:prefLabel	"M7" ;
	mobiliteit:grafischeWeergave	"http://mobiliteit.vo.data.gift/images/e6b212b9dbc3585bb08ccb2f1a9e155aa6ff9a19cf06efccee002b9e9f709d04" .
ns4:b220de78deaf7595b84fe86a8dc2b881009b6ea15428a0e2e7c4b679c61c29e5	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"b220de78deaf7595b84fe86a8dc2b881009b6ea15428a0e2e7c4b679c61c29e5" ;
	skos:prefLabel	"D4" ;
	mobiliteit:grafischeWeergave	"http://mobiliteit.vo.data.gift/images/24d68d637b5d9576fe04270cae5ab04d0f7b01a6da80094d38e87178e391488f" .
ns4:b4ce49f90460d0ed702ae714771dda6504e1e85b17eb7e89ec6fe00dfa444fbc	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"b4ce49f90460d0ed702ae714771dda6504e1e85b17eb7e89ec6fe00dfa444fbc" ;
	skos:prefLabel	"F11" ;
	mobiliteit:grafischeWeergave	"http://mobiliteit.vo.data.gift/images/e7c85f5deaa4e9cf9e54e7927f056dad27b6a839211edcee3b071b9e2d4a6cfe" .
ns4:b50450c1ea4686eafad40e281df265bc8ef2e3c27bac51f4a4a444c7e392d7fc	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"b50450c1ea4686eafad40e281df265bc8ef2e3c27bac51f4a4a444c7e392d7fc" ;
	skos:prefLabel	"GIII_ijzel" ;
	mobiliteit:grafischeWeergave	"http://mobiliteit.vo.data.gift/images/adffc85e5647362055c4b857b4e1ce3ea0bcb2eb37d72ee15046ade4213570cb" .
ns4:b56e3eab86de7c8c4d75b9b82778951d3c857b3249e2121297178910516d26c2	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"b56e3eab86de7c8c4d75b9b82778951d3c857b3249e2121297178910516d26c2" ;
	skos:prefLabel	"F81" ;
	mobiliteit:grafischeWeergave	"http://mobiliteit.vo.data.gift/images/4fd14f3473ea8b6174a363c6d8020b45e658ebba0a4225e7b6abb25396465956" .
ns4:b5e9f13d81ac78f0002aac342f4eb866394598088cfe0276013b928afd1560f8	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"b5e9f13d81ac78f0002aac342f4eb866394598088cfe0276013b928afd1560f8" ;
	skos:prefLabel	"E7" ;
	mobiliteit:grafischeWeergave	"http://mobiliteit.vo.data.gift/images/31aff0f573aa0e5c2dc89eb9993365c17ec6befd57ae95e8041259fe1388e058" .
ns4:b60a7295d946865b349e22b018784376f5b299ac1410eae384388c652baeb289	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"b60a7295d946865b349e22b018784376f5b299ac1410eae384388c652baeb289" ;
	skos:prefLabel	"B7" ;
	mobiliteit:grafischeWeergave	"http://mobiliteit.vo.data.gift/images/8bc176f91e63e4ace7c929b39611f8bf3673478944fab0e38636cdaedf346f07" .
ns4:b667a243b8ec32abc8cae6ff5cdff6dafb667cf1ddec6ff015824b451895d4d2	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"b667a243b8ec32abc8cae6ff5cdff6dafb667cf1ddec6ff015824b451895d4d2" ;
	skos:prefLabel	"E1" ;
	mobiliteit:grafischeWeergave	"http://mobiliteit.vo.data.gift/images/fad92aa06421de3634dcf557dd17b48fb1d0515096081f7b61da2d7e4bf2f0b3" .
ns4:b66e9e8ac16b07d9311e94a44dd7146b8e6ada618f414e8502eac53422c8b842	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"b66e9e8ac16b07d9311e94a44dd7146b8e6ada618f414e8502eac53422c8b842" ;
	skos:prefLabel	"C24b" ;
	mobiliteit:grafischeWeergave	"http://mobiliteit.vo.data.gift/images/d4e620518e7f942a54057d96468bd5ab6f75a65e1bfa60cffe75c96fe4381710" .
ns4:b6f496913382bd6183372a0b966f19e71230d65e2294e4d0c717c1f87dbac0d9	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"b6f496913382bd6183372a0b966f19e71230d65e2294e4d0c717c1f87dbac0d9" ;
	skos:prefLabel	"A15" ;
	mobiliteit:grafischeWeergave	"http://mobiliteit.vo.data.gift/images/563eef39cfd7ef6754c2a72ca8515491196d35dd2f5109f200a8f303e50ee091" .
ns4:b71a0edf486f599c2de35d225ae3c167753932da2423fb0dda1c9a3609606b9f	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"b71a0edf486f599c2de35d225ae3c167753932da2423fb0dda1c9a3609606b9f" ;
	skos:prefLabel	"E9a-rolstoel" ;
	mobiliteit:grafischeWeergave	"http://mobiliteit.vo.data.gift/images/800e47dca8bd8ae5d6c49c177336b0391e76a967ea9a02b7df226969f33c25a0" .
ns4:bacd3126b707b98ab097f8744a9f1333ff393413bc174912b133b31117fc69a8	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"bacd3126b707b98ab097f8744a9f1333ff393413bc174912b133b31117fc69a8" ;
	skos:prefLabel	"A14" ;
	mobiliteit:grafischeWeergave	"http://mobiliteit.vo.data.gift/images/a8e09f3e6b06011545599329426f6166d72ed0c9ec64b410353e06725f1022c1" .
ns4:bc05e44f54e530335872114a61a3959f423b0f369f464e3717495b14d8ffd1ca	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"bc05e44f54e530335872114a61a3959f423b0f369f464e3717495b14d8ffd1ca" ;
	skos:prefLabel	"D5" ;
	mobiliteit:grafischeWeergave	"http://mobiliteit.vo.data.gift/images/2bee79585d2da1b71c2de50ac1d93a4e5942e83bb1f7d7aae1fae070fdf3bfc7" .
ns4:bc312fc26af5cf71e7616e1d9fd0e3a34f8c44b0d97dfa8ab8a532d1faac3b87	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"bc312fc26af5cf71e7616e1d9fd0e3a34f8c44b0d97dfa8ab8a532d1faac3b87" ;
	skos:prefLabel	"M3" ;
	mobiliteit:grafischeWeergave	"https://dev.roadsigns.lblod.info/files/61b70ddab82487000d00000e/download" .
ns4:bc67b2aed58af8cba5f38d177bfc2525b97410a84dec019d0a54a072bae6c776	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"bc67b2aed58af8cba5f38d177bfc2525b97410a84dec019d0a54a072bae6c776" ;
	skos:prefLabel	"C13" ;
	mobiliteit:grafischeWeergave	"http://mobiliteit.vo.data.gift/images/596e276afb9a63e7b2b7301f1f001d7a0732e955b019c5a8b3be972e8b1a327e" .
ns4:bd68717b59b32f5cfc66e459f72f7fef6ff8bc33d9276dcc2ca7c8ca7e860371	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"bd68717b59b32f5cfc66e459f72f7fef6ff8bc33d9276dcc2ca7c8ca7e860371" ;
	skos:prefLabel	"E9e" ;
	mobiliteit:grafischeWeergave	"http://mobiliteit.vo.data.gift/images/290e66923ec3b9bcac58fd5d2f1e5c65313b46aeaecaf56dea45ea1353c431c3" .
ns4:be92d225a5de7d82b9021b75dd48c7bdaf91a7b6243215ba7c03160817ee9476	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"be92d225a5de7d82b9021b75dd48c7bdaf91a7b6243215ba7c03160817ee9476" ;
	skos:prefLabel	"GVIIb" ;
	mobiliteit:grafischeWeergave	"http://mobiliteit.vo.data.gift/images/3767d3b2df5e63d8cf6e51f13f577b6639d0e786841c522790772f25ffabebe6" .
ns4:bedd100cbf5d1795b9f4a9cf5d63846a65e0d5deb7f1122848e826f5b9e221af	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"bedd100cbf5d1795b9f4a9cf5d63846a65e0d5deb7f1122848e826f5b9e221af" ;
	skos:prefLabel	"C21" ;
	mobiliteit:grafischeWeergave	"http://mobiliteit.vo.data.gift/images/8618ae8704c6863d4153f3b7c45f97aa62399f0ddf1c16186348e1f4e4e30361" .
ns4:c013a71f9cd0f6084cd5beac514f11edb27aeb99cb9ed375150567c71db3b061	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"c013a71f9cd0f6084cd5beac514f11edb27aeb99cb9ed375150567c71db3b061" ;
	skos:prefLabel	"E9i" ;
	mobiliteit:grafischeWeergave	"http://mobiliteit.vo.data.gift/images/aa757b7bf200ef56ffb101da3ec493f9b7db9c519e87707baae95441c61eaabc" .
ns4:c25ef330519cb3001810fad0a95aadb0b1011bdba051d728b2267752449e3dca	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"c25ef330519cb3001810fad0a95aadb0b1011bdba051d728b2267752449e3dca" ;
	skos:prefLabel	"GIII_BijNatWegdek" ;
	mobiliteit:grafischeWeergave	"http://mobiliteit.vo.data.gift/images/f727e55f31f2c0fe26a291e3bc51401a416cfe86f5b129e49b805e8182ac2794" .
ns4:c325e2c889471d83f36a825b68a0801de16c2a4ba7e36a4c897f6c3493125dcf	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"c325e2c889471d83f36a825b68a0801de16c2a4ba7e36a4c897f6c3493125dcf" ;
	skos:prefLabel	"E11" ;
	mobiliteit:grafischeWeergave	"http://mobiliteit.vo.data.gift/images/c44b122c9eae119ebfadda83cfbe252243a6b89e5a4e164a3c9e8b84e804ed42" .
ns4:c362573ba2407ca71b0f5169a2e9ddda47a2284c58564bcb36ba40e9efb634c7	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"c362573ba2407ca71b0f5169a2e9ddda47a2284c58564bcb36ba40e9efb634c7" ;
	skos:prefLabel	"A17" ;
	mobiliteit:grafischeWeergave	"http://mobiliteit.vo.data.gift/images/eff12e08786dd8eadf86292c56a6a4af42f2303545655ab4ea143c64bd83bf68" .
ns4:c79e5d6420236e345184ff40f4aeebd7764f2281b1945fbd365bfde141181c1b	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"c79e5d6420236e345184ff40f4aeebd7764f2281b1945fbd365bfde141181c1b" ;
	skos:prefLabel	"F25" ;
	mobiliteit:grafischeWeergave	"http://mobiliteit.vo.data.gift/images/20f0f769643627b5cbbc4839a74372e29ca6dade5c82bd48614159dad0f97ebe" .
ns4:c8f5ec1e8e07096c736c24f09a5c02783d799d0956d281369a098629e3bab228	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"c8f5ec1e8e07096c736c24f09a5c02783d799d0956d281369a098629e3bab228" ;
	skos:prefLabel	"A27" ;
	mobiliteit:grafischeWeergave	"http://mobiliteit.vo.data.gift/images/3f632772c9ce44fda22b87c98314f717f98f4b48ae9fe7d7713adfb5f7dcfdaf" .
ns4:cbf8a964bc0e877ae0eb9574f982b5b0d9d5112d4a1673aed3e10b9250c27a77	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"cbf8a964bc0e877ae0eb9574f982b5b0d9d5112d4a1673aed3e10b9250c27a77" ;
	skos:prefLabel	"A23" ;
	mobiliteit:grafischeWeergave	"http://mobiliteit.vo.data.gift/images/11dfe093bfd7d71c10733e4dd1116d56885f0b6841036609ec63536f55ca5cbf" .
ns4:ccfce8f5c49bf6098900d566a57a37a34c152a713eded5f0e89d5badfac2a77f	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"ccfce8f5c49bf6098900d566a57a37a34c152a713eded5f0e89d5badfac2a77f" ;
	skos:prefLabel	"M16" ;
	mobiliteit:grafischeWeergave	"http://mobiliteit.vo.data.gift/images/73cbfcafa2fc685bdf8a94c9929e06dc4b068e9506d4e5a7d03ca8000677b101" .
ns4:ce4b8d325e769ba3239378723a3d04af417ca4b8b1c76fcc18af1fd70448ebdc	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"ce4b8d325e769ba3239378723a3d04af417ca4b8b1c76fcc18af1fd70448ebdc" ;
	skos:prefLabel	"M6" ;
	mobiliteit:grafischeWeergave	"http://mobiliteit.vo.data.gift/images/5f2f07955ffab556f953b478d9898061e535ced2073177392618ad3a66c51601" .
ns4:ce89d1a5cdd2078c5ae18dfacba050fe2e2db116c57f2e9934a5ce6eddf2e893	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"ce89d1a5cdd2078c5ae18dfacba050fe2e2db116c57f2e9934a5ce6eddf2e893" ;
	skos:prefLabel	"C19" ;
	mobiliteit:grafischeWeergave	"http://mobiliteit.vo.data.gift/images/6bf6402e80112e2c57f3bdd3bd6d8254821ff856505f7a1e3ece7f59de0e7e6a" .
ns4:cf6a4d6032ccd48355e7530a0d95e32c31064a00848bc8fcfd06245cfcb412ee	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"cf6a4d6032ccd48355e7530a0d95e32c31064a00848bc8fcfd06245cfcb412ee" ;
	skos:prefLabel	"F31" ;
	mobiliteit:grafischeWeergave	"http://mobiliteit.vo.data.gift/images/7ab5f108fdcbac5ac1b5e842cb1a19265f27ae888f77e6660e27368e85347900" .
ns4:d2eaca5fcc21522d4f1732550bc78e8b6a935e974c6350896ee59ed2c92fbf42	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"d2eaca5fcc21522d4f1732550bc78e8b6a935e974c6350896ee59ed2c92fbf42" ;
	skos:prefLabel	"F91" ;
	mobiliteit:grafischeWeergave	"http://mobiliteit.vo.data.gift/images/b0ed87849162d9dd55b27425c5ffabcdc035aa00eac20e7ee98684f73df93449" .
ns4:d56eb7958bd50f75219369a1d063eb26035353e8e462b6dc7adf704971482dd5	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"d56eb7958bd50f75219369a1d063eb26035353e8e462b6dc7adf704971482dd5" ;
	skos:prefLabel	"F33a" ;
	mobiliteit:grafischeWeergave	"http://mobiliteit.vo.data.gift/images/cbce0eea7c76e9a44d0dc4328db8a934a093efe9675405a0453a84aee6b4a381" .
ns4:d6994e5d8b2cfedffaad046aa1a0701e892b2f4feb901fadbf7814f678ae5663	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"d6994e5d8b2cfedffaad046aa1a0701e892b2f4feb901fadbf7814f678ae5663" ;
	skos:prefLabel	"GXd" ;
	mobiliteit:grafischeWeergave	"http://mobiliteit.vo.data.gift/images/0a71458b9171d3582df0f1baf7ec69b833296f03c314f502d28fe84f1d81747b" .
ns4:d6fa3d560d0655cd0db5644293a44357f235b1932cfd1b64ea6dd122326bd24b	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"d6fa3d560d0655cd0db5644293a44357f235b1932cfd1b64ea6dd122326bd24b" ;
	skos:prefLabel	"A19" ;
	mobiliteit:grafischeWeergave	"http://mobiliteit.vo.data.gift/images/fbddd4bbd8bfcc0317c9fbd953cf1ae9ab520c2fa47f7fa6f0db63b390b95e39" .
ns4:dad194b644e9e2727a0b0e166a28b9e06421f76f583bbae849c60b950c9be056	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"dad194b644e9e2727a0b0e166a28b9e06421f76f583bbae849c60b950c9be056" ;
	skos:prefLabel	"A51" ;
	mobiliteit:grafischeWeergave	"http://mobiliteit.vo.data.gift/images/934718f5b012cd7b6863de80bd3746e739a0b4bd6b52738cb195cf33ffe61e42" .
ns4:db7f076463027c70137d3b899b76586aa8ea0cc38001ed8d880d37d4810410a0	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"db7f076463027c70137d3b899b76586aa8ea0cc38001ed8d880d37d4810410a0" ;
	skos:prefLabel	"B3" ;
	mobiliteit:grafischeWeergave	"http://mobiliteit.vo.data.gift/images/30e2734e195990d176107327fcd2479dc562f04f4423aac864256e10cc1ad579" .
ns4:db86a155f3fd01da852a381b7dd15a19ff5685524db6f280c18e878e20cea5fd	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"db86a155f3fd01da852a381b7dd15a19ff5685524db6f280c18e878e20cea5fd" ;
	skos:prefLabel	"GIXa_l" ;
	mobiliteit:grafischeWeergave	"http://mobiliteit.vo.data.gift/images/1fc3151516d5bb37b1ecb5e69aae59e2c914b31e32a7fdad72a80b97c345317e" .
ns4:dd9fbcc750edb4f6cb439a5a014120c34c77c5cab6aaf91320ad53c3c748819f	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"dd9fbcc750edb4f6cb439a5a014120c34c77c5cab6aaf91320ad53c3c748819f" ;
	skos:prefLabel	"A7c" ;
	mobiliteit:grafischeWeergave	"http://mobiliteit.vo.data.gift/images/e88ce8c655d7a4de99103f37156595b8a0a56dc584c723b9e3830266e58e2c4e" .
ns4:dfa07fdaeb6870f1e2922ba694f0fbf5b929f2f9249b785d7c0591b0201ba4c8	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"dfa07fdaeb6870f1e2922ba694f0fbf5b929f2f9249b785d7c0591b0201ba4c8" ;
	skos:prefLabel	"C33" ;
	mobiliteit:grafischeWeergave	"http://mobiliteit.vo.data.gift/images/b424d361f54631ba8c8c8cc41aa4ef00efe4bf07bfc2d8a812d9cf4f366cb3db" .
ns4:e076d4553d8995d0739ad74dc30dbb5cf4095b6c0a9e9a68503e7a7da03f3b9e	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"e076d4553d8995d0739ad74dc30dbb5cf4095b6c0a9e9a68503e7a7da03f3b9e" ;
	skos:prefLabel	"B1" ;
	mobiliteit:grafischeWeergave	"http://mobiliteit.vo.data.gift/images/5bf80525a79eaace6bdd84e38d47eeb6de1f681ed757f2680976f3b9fdfee266" .
ns4:e3d7c392305c0e69ab2d9cef4e5686bf220e3e22afe4672865084a2b2ff6a76a	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"e3d7c392305c0e69ab2d9cef4e5686bf220e3e22afe4672865084a2b2ff6a76a" ;
	skos:prefLabel	"F14" ;
	mobiliteit:grafischeWeergave	"http://mobiliteit.vo.data.gift/images/cd9c5adac9feda29cf71d7c0cd4e166664b6734a7e6f0c6eec4d9c03a99a1420" .
ns4:e43ce5f4a2de5600887d52d0c83d16bbddac2d51264d501d33113c370f215ec4	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"e43ce5f4a2de5600887d52d0c83d16bbddac2d51264d501d33113c370f215ec4" ;
	skos:prefLabel	"M19" ;
	mobiliteit:grafischeWeergave	"http://mobiliteit.vo.data.gift/images/5c53060b71497b3b13b81f93f6e25319dce3f3ce4d7d95c170a95f251700ec10" .
ns4:e53601fbc656ad3806a470dc7c4a57579d169b52b1197a85f239373c2b5e92e1	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"e53601fbc656ad3806a470dc7c4a57579d169b52b1197a85f239373c2b5e92e1" ;
	skos:prefLabel	"A43" ;
	mobiliteit:grafischeWeergave	"http://mobiliteit.vo.data.gift/images/1a66c7669a526542d6b20c50418592883259155d08238a3d3e2e01ca4c81cc64" .
ns4:e6f178e53fc9ae0d1d17616ef08d3873f6892bfc46acf1f8850a77d34d4f85d2	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"e6f178e53fc9ae0d1d17616ef08d3873f6892bfc46acf1f8850a77d34d4f85d2" ;
	skos:prefLabel	"F105" ;
	mobiliteit:grafischeWeergave	"http://mobiliteit.vo.data.gift/images/a9d8d678383b17c2252b72741f7d783f239c09239b92d8d9403d66ad39731be8" .
ns4:e8464868874fc0b87cad2fd84ecd58b1983561668765591ea58187afb5d39cd4	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"e8464868874fc0b87cad2fd84ecd58b1983561668765591ea58187afb5d39cd4" ;
	skos:prefLabel	"F1b" ;
	mobiliteit:grafischeWeergave	"http://mobiliteit.vo.data.gift/images/b6d53388c23990cb81edfe5467d72ed59164916e023a55faad0af2b8f4b7f9ac" .
ns4:e84d5732cf1299f012da33d3f8d76b0dfb7213ae86f0ed0fe76044f7f900424f	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"e84d5732cf1299f012da33d3f8d76b0dfb7213ae86f0ed0fe76044f7f900424f" ;
	skos:prefLabel	"B11" ;
	mobiliteit:grafischeWeergave	"http://mobiliteit.vo.data.gift/images/27f5f61163082c1139fdc8af10bafdf879accb5c3c2c1aff68f8ca990e15e631" .
ns4:e8cdf86215d2202a9001f93e1ed3b7577885fe972a799a30f29998bf0fb34e02	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"e8cdf86215d2202a9001f93e1ed3b7577885fe972a799a30f29998bf0fb34e02" ;
	skos:prefLabel	"C3" ;
	mobiliteit:grafischeWeergave	"http://mobiliteit.vo.data.gift/images/31ed79ef4336f3288fa670f5bdae59e82bf1d314c132d3ec2f675221ec3469e3" .
ns4:e9749354c481b5ab2cb2281988979eadb226942b34f54699d0fb0ecffa9b3f39	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"e9749354c481b5ab2cb2281988979eadb226942b34f54699d0fb0ecffa9b3f39" ;
	skos:prefLabel	"F89" ;
	mobiliteit:grafischeWeergave	"http://mobiliteit.vo.data.gift/images/8f47490ac6d9d5e15db3ee5c1679eea3e018b037472378829efe4fd0375da07c" .
ns4:eadf7c2db13f747a7241c4689a212e02f4c93f6957844fa4ff26fdf2ce6165bc	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"eadf7c2db13f747a7241c4689a212e02f4c93f6957844fa4ff26fdf2ce6165bc" ;
	skos:prefLabel	"D9" ;
	mobiliteit:grafischeWeergave	"http://mobiliteit.vo.data.gift/images/304547d351cc3f4bca33dff95444649c87c7445b6801464571290bb922c687e6" .
ns4:ec0dd82c6870eef371bcd7e3bb57707aab6f3533f94cdefbe1dc079edbc4c8a9	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"ec0dd82c6870eef371bcd7e3bb57707aab6f3533f94cdefbe1dc079edbc4c8a9" ;
	skos:prefLabel	"F111" ;
	mobiliteit:grafischeWeergave	"http://mobiliteit.vo.data.gift/images/141377d7879013c7d7cfbae4ef5dd6191c7e5f24ce1196f77a835ec2c8c76ceb" .
ns4:ecedfa0ac528d4ba21050a5ff32e8f320fb7f1da82c799c29b1fa85fcf0a9024	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"ecedfa0ac528d4ba21050a5ff32e8f320fb7f1da82c799c29b1fa85fcf0a9024" ;
	skos:prefLabel	"F4a" ;
	mobiliteit:grafischeWeergave	"https://dev.roadsigns.lblod.info/files/619b7f4876cea6000e000006/download" .
ns4:ef95e7f29f423cb55cfb085749607778bfaf770137e9b0cfc3362f374094985f	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"ef95e7f29f423cb55cfb085749607778bfaf770137e9b0cfc3362f374094985f" ;
	skos:prefLabel	"D1" ;
	mobiliteit:grafischeWeergave	"https://dev.roadsigns.lblod.info/files/61c0534ecd19a7000e000000/download" .
ns4:efc00f794b4d66ddd9c1f8fee1f45e580c37052bc9607af89b09d5e665797eb2	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"efc00f794b4d66ddd9c1f8fee1f45e580c37052bc9607af89b09d5e665797eb2" ;
	skos:prefLabel	"A37" ;
	mobiliteit:grafischeWeergave	"http://mobiliteit.vo.data.gift/images/65135a1b376307e59ae7f4319fe64ca476ea67495872e63de4c44f0b22736932" .
ns4:f2d4482b8dfe27b35c630f209112ce2d0741378c51981789dafb760c115b04de	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"f2d4482b8dfe27b35c630f209112ce2d0741378c51981789dafb760c115b04de" ;
	skos:prefLabel	"A29" ;
	mobiliteit:grafischeWeergave	"http://mobiliteit.vo.data.gift/images/03b77fd72ac098d48764c6c01d87f60f563dec0439764c594e7daf5e4a4ba1e8" .
ns4:f304fa07025853d008cb86709fea2a4c19894ce5031f41b04076e3039bce466a	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"f304fa07025853d008cb86709fea2a4c19894ce5031f41b04076e3039bce466a" ;
	skos:prefLabel	"GVIIc" ;
	mobiliteit:grafischeWeergave	"http://mobiliteit.vo.data.gift/images/6335f1f914273370178c13011691b97a458ab5e11f2e1c17fa948c5de5662299" .
ns4:f46c41dce095d2e07a36a8e764c22834eebcc9283c48c36171e3a4ee483ca5ba	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"f46c41dce095d2e07a36a8e764c22834eebcc9283c48c36171e3a4ee483ca5ba" ;
	skos:prefLabel	"B15" ;
	mobiliteit:grafischeWeergave	"http://mobiliteit.vo.data.gift/images/f9fc9868a0a9eff37f1b8b2d430f9b6f359aad8b3ee7efa51487d6c87dc1f042" .
ns4:f4798e844b2bd16c4cf25d4a4c2290cc6139ab04824d380f2a3fd91fdae8bf2c	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"f4798e844b2bd16c4cf25d4a4c2290cc6139ab04824d380f2a3fd91fdae8bf2c" ;
	skos:prefLabel	"F21" ;
	mobiliteit:grafischeWeergave	"http://mobiliteit.vo.data.gift/images/7a0ed982ed7bf2a9e6b18cf4280d55043cf449138d83f61a7ac020673f09e67f" .
ns4:f620577abc2596eba29ab19c51ef29a5f5de950f0b058be8bc4319dbf5e1c3a2	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"f620577abc2596eba29ab19c51ef29a5f5de950f0b058be8bc4319dbf5e1c3a2" ;
	skos:prefLabel	"F1b_V" ;
	mobiliteit:grafischeWeergave	"http://mobiliteit.vo.data.gift/images/914cffe7410793c485de06ea5bb3d0ff924fc8d939b8b16c4cc836bb370bfaca" .
ns4:f74b9e8e4ddd1760f32d54063f96a3964846464bed031a942863f59f5187a268	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"f74b9e8e4ddd1760f32d54063f96a3964846464bed031a942863f59f5187a268" ;
	skos:prefLabel	"E9b" ;
	mobiliteit:grafischeWeergave	"http://mobiliteit.vo.data.gift/images/e52061a5eb7ef0a61a644b117b6300455c1f2b53e67fa4157871f092ace44e8e" .
ns4:f9312556b1bdfbb278ec04033417152abbb254466df0069ff1894d0ea7a55482	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"f9312556b1bdfbb278ec04033417152abbb254466df0069ff1894d0ea7a55482" ;
	skos:prefLabel	"abc" ;
	mobiliteit:grafischeWeergave	"http://mobiliteit.vo.data.gift/images/1fd921e5633bd866701861cfdb4288c8464f347e8929c4f46de31ef094c7a15c" .
ns4:fa3de7606ecb2c6ae3c923483a191fb4ffdf33d7f6bfd407f9049b50d48f50e0	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"fa3de7606ecb2c6ae3c923483a191fb4ffdf33d7f6bfd407f9049b50d48f50e0" ;
	skos:prefLabel	"F34b1" ;
	mobiliteit:grafischeWeergave	"http://mobiliteit.vo.data.gift/images/4f7c8352781298ab9041d9f5f1f57f589ffea0d8e5594767976eafbbc3e551ea" .
ns4:fa4db4e1284d3c686c2c7eb94bfbffb961d7358c980aa099c7ca0c4bfdfac9df	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"fa4db4e1284d3c686c2c7eb94bfbffb961d7358c980aa099c7ca0c4bfdfac9df" ;
	skos:prefLabel	"M1" ;
	mobiliteit:grafischeWeergave	"http://mobiliteit.vo.data.gift/images/2690afc4599cf03b2ff1a76e72b7f7684d3082c2c69f372baa98042acaaf3591" .
ns4:fbcc4839ac315ddc5bfb773c90333ae664723214dbc7c64e9e3f81075b2f68aa	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"fbcc4839ac315ddc5bfb773c90333ae664723214dbc7c64e9e3f81075b2f68aa" ;
	skos:prefLabel	"A7b" ;
	mobiliteit:grafischeWeergave	"http://mobiliteit.vo.data.gift/images/95806e70471ca9392d7c81005cd15f3a52c8add744facdd032237e45ef1ba944" .
ns4:fcc9d98e971d74253c641355dc88c94ea70f8a8a1a789ea4aef44a0f23a52728	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"fcc9d98e971d74253c641355dc88c94ea70f8a8a1a789ea4aef44a0f23a52728" ;
	skos:prefLabel	"C11" ;
	mobiliteit:grafischeWeergave	"http://mobiliteit.vo.data.gift/images/06a80d5bbccf0cfd0b1a8f60fe514f5143fec6d90f62fbf4b86c9b5699ef3b63" .
ns4:fdfa1e43849e5794251962b8a54c3977e9b37c1bd8b477e69828e0216fc8b6f4	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"fdfa1e43849e5794251962b8a54c3977e9b37c1bd8b477e69828e0216fc8b6f4" ;
	skos:prefLabel	"F50bis" ;
	mobiliteit:grafischeWeergave	"http://mobiliteit.vo.data.gift/images/568d84b35ad628b7fd6c800bc1e29d6874555c1f8a5918501d8aff7c28f62296" .
<http://data.lblod.info/traffic-sign-concepts/64395EEB94519A619E4412C7>	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"64395EEB94519A619E4412C7" ;
	skos:prefLabel	"asd" ;
	mobiliteit:grafischeWeergave	"https://dev.roadsigns.lblod.info/files/64395eebabf38b000b000006/download" .
<http://data.lblod.info/traffic-sign-concepts/61B8A2B2BF5C750009001300>	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"61B8A2B2BF5C750009001300" ;
	skos:prefLabel	"GIII_schoolstraat" ;
	mobiliteit:grafischeWeergave	"https://dev.roadsigns.lblod.info/files/61b8a2b2b82487000d000010/download" .
<http://data.lblod.info/traffic-sign-concepts/61B8A35EBF5C750009001303>	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"61B8A35EBF5C750009001303" ;
	skos:prefLabel	"GIII_speelstraat" ;
	mobiliteit:grafischeWeergave	"https://dev.roadsigns.lblod.info/files/61b8a35db82487000d000012/download" .
<http://data.lblod.info/traffic-sign-concepts/61ADD4F5BF5C750009000017>	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"61ADD4F5BF5C750009000017" ;
	skos:prefLabel	"GXII_C" ;
	mobiliteit:grafischeWeergave	"https://dev.roadsigns.lblod.info/files/61add4f5b82487000d000002/download" .
<http://data.lblod.info/traffic-sign-concepts/61ADD6D1BF5C750009000019>	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"61ADD6D1BF5C750009000019" ;
	skos:prefLabel	"GXII_D" ;
	mobiliteit:grafischeWeergave	"https://dev.roadsigns.lblod.info/files/61add6d0b82487000d000004/download" .
<http://data.lblod.info/traffic-sign-concepts/61ADD738BF5C75000900001B>	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"61ADD738BF5C75000900001B" ;
	skos:prefLabel	"GXII_E" ;
	mobiliteit:grafischeWeergave	"https://dev.roadsigns.lblod.info/files/61add738b82487000d000006/download" .
<http://data.lblod.info/traffic-sign-concepts/64357591A58B1CFD4756F1CC>	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"64357591A58B1CFD4756F1CC" ;
	skos:prefLabel	"TEST1" ;
	mobiliteit:grafischeWeergave	"https://dev.roadsigns.lblod.info/files/6435759107a0cd000d000000/download" .
<http://data.lblod.info/traffic-sign-concepts/61ADE67CBF5C75000900001F>	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"61ADE67CBF5C75000900001F" ;
	skos:prefLabel	"GXI" ;
	mobiliteit:grafischeWeergave	"https://dev.roadsigns.lblod.info/files/61ade67cb82487000d000008/download" .
<http://data.lblod.info/traffic-sign-concepts/61AE0B68BF5C75000900002E>	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"61AE0B68BF5C75000900002E" ;
	skos:prefLabel	"GV" ;
	mobiliteit:grafischeWeergave	"https://dev.roadsigns.lblod.info/files/61ae0b68b82487000d00000a/download" .
<http://data.lblod.info/traffic-sign-concepts/64380E1394519A619E4412BD>	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"64380E1394519A619E4412BD" ;
	skos:prefLabel	"test zstop" ;
	mobiliteit:grafischeWeergave	"/files/64380e12abf38b000b000004/download" .
<http://data.lblod.info/traffic-sign-concepts/64395F5094519A619E4412C8>	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"64395F5094519A619E4412C8" ;
	skos:prefLabel	"abc" ;
	mobiliteit:grafischeWeergave	"https://dev.roadsigns.lblod.info/files/64395f50abf38b000b000008/download" .
<http://data.lblod.info/traffic-sign-concepts/61ADD35DBF5C750009000015>	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"61ADD35DBF5C750009000015" ;
	skos:prefLabel	"GXII_B" ;
	mobiliteit:grafischeWeergave	"https://dev.roadsigns.lblod.info/files/61add35db82487000d000000/download" .
<http://data.lblod.info/traffic-sign-concepts/620CFD5683DEE2C0A0C18BFD>	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"620CFD5683DEE2C0A0C18BFD" ;
	skos:prefLabel	"test" ;
	mobiliteit:grafischeWeergave	"https://dev.roadsigns.lblod.info//files/620cfd553680d3000d000000/download" .
<http://data.lblod.info/traffic-sign-concepts/643806B094519A619E4412BC>	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"643806B094519A619E4412BC" ;
	skos:prefLabel	"test" ;
	mobiliteit:grafischeWeergave	"/files/64380837abf38b000b000002/download" .
<http://data.lblod.info/traffic-sign-concepts/6439601494519A619E4412CA>	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"6439601494519A619E4412CA" ;
	skos:prefLabel	"testupload2" ;
	mobiliteit:grafischeWeergave	"https://dev.roadsigns.lblod.info/files/64396014abf38b000b00000c/download" .
<http://data.lblod.info/traffic-sign-concepts/643D461494519A619E4412CD>	rdf:type	mobiliteit:Verkeersbordconcept ;
	mu:uuid	"643D461494519A619E4412CD" ;
	skos:prefLabel	"testzonal" ;
	mobiliteit:grafischeWeergave	"/files/643d4614abf38b000b00001a/download" .
	}
	}
`;

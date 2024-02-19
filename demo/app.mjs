import fetch from "node-fetch";
import FormData from "form-data";
import { v4 as uuidv4 } from "uuid";
import {
  DEFAULT_SIGNS,
  INSERT_MOW_QUERY,
  LDES_DATA_FEED_TEMPL,
} from "./sparql-queries.mjs";
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

function between(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
async function feed_ldes() {
  await init_mow();
  let lat = 51.213597;
  let long = 4.42392;
  for (const rs of DEFAULT_SIGNS) {
    let uuid = uuidv4();
    let feed = LDES_DATA_FEED_TEMPL.replaceAll("#uuid", uuid)
      .replaceAll("#lat", lat)
      .replaceAll("#long", long)
      .replaceAll("#sign", rs);

    lat += between(-9, 9) / 1000;
    long += between(-9, 9) / 1000;
    console.log("push", uuid);
    console.log(feed);
    const resp = await fetch(
      `http://localhost/example-stream?resource=http://data.lblod.info/geo-points/${uuid}`,
      {
        method: "POST",
        body: feed,
        headers: {
          "Content-Type": "application/n-triples",
        },
      },
    );
    if (resp.status != 201) {
      const text = await resp.text();
      throw "could not push feed " + text;
    }
    console.log("sleep 5s");
    await sleep(5000); // wait 5secs
  }
}

async function init_mow() {
  const data = new FormData();
  data.append("query", INSERT_MOW_QUERY);

  const resp = await fetch("http://localhost:8890/sparql", {
    method: "POST",
    body: data,
  });
  if (resp.status != 200) {
    const text = await response.text();
    throw "could not insert: " + text;
  }
}

feed_ldes().then(() => {
  console.log("done");
});

#!/usr/bin/env node
const path = require("node:path");
const {
  mylog,
  getDomainInfo,
  Authorization,
  CERTBOT_VALIDATION,
  wait_duration_seconds,
} = require("./helper");
const { json } = require("stream/consumers");

(async () => {
  const { baseDomain, subDomain, hostTxtRecord } = await getDomainInfo();

  const url = `https://api.name.com/core/v1/domains/${baseDomain}/records`;
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization,
    },
    body: JSON.stringify({
      answer: CERTBOT_VALIDATION,
      host: hostTxtRecord,
      ttl: 300,
      type: "TXT",
    }),
  };

  try {
    const resp = await fetch(url, options);
    const data = await resp.json();
    mylog(
      JSON.stringify({
        hostTxtRecord,
        subDomain,
        baseDomain,
        url,
        options,
      })
    );
    const delUrl = path.join(url, data.id.toString());
    console.log(JSON.stringify({ delUrl }));
  } catch (error) {
    mylog({ error });
  }

  setTimeout(() => {
    mylog(`Waiting ${wait_duration_seconds}s for propagation...`);
  }, wait_duration_seconds * 1000);
})();

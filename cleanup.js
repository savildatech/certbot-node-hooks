#!/usr/bin/env node
const { mylog, Authorization, CERTBOT_AUTH_OUTPUT } = require("./helper");

let auth_output;

try {
  auth_output = JSON.parse(CERTBOT_AUTH_OUTPUT);
} catch (error) {
  mylog("could not parse CERTBOT_AUTH_OUTPUT");
  process.exit(1);
}

if (!auth_output.delUrl) {
  mylog("delUrl evaluates to false...Could not clean up.");
  process.exit(1);
}

const { delUrl } = auth_output;

(async () => {
  const options = {
    method: "DELETE",
    headers: {
      Authorization,
    },
  };
  const resp = await fetch(delUrl, options);

  if (resp.status === 204) {
    mylog(`DELETE ${delUrl} success`);
  } else {
    const data = await resp.text();
    mylog(`DELETE Failed: ${JSON.stringify(data)}`);
  }
})();

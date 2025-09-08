const {
  name_com_user,
  name_com_token,
  wait_duration_seconds,
  log_file_location,
} = require("./settings.json");

const Authorization = "Basic " + btoa(`${name_com_user}:${name_com_token}`);

const { appendFileSync } = require("node:fs");

const parseDomain = (full, base) => {
  let result = {
    baseDomain: base,
    subDomain: "",
    hostTxtRecord: "_acme-challenge",
  };

  if (full === base) return result;
  const pFull = full.split(".");
  const pBase = base.split(".");
  const diff = Math.abs(pFull.length - pBase.length);
  result.subDomain = pFull.slice(0, diff).join(".");
  result.hostTxtRecord = result.hostTxtRecord + "." + result.subDomain;
  return result;
};

const timestamp = () => {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: true,
  }).format(new Date());
};

const mylog = (str) => {
  try {
    appendFileSync(log_file_location, `[${timestamp()}]:${str}\r\n`);
  } catch (error) {
    console.error({ message: "cannot log message.", error });
  }
};

const {
  CERTBOT_AUTH_OUTPUT,
  CERTBOT_DOMAIN,
  CERTBOT_ALL_DOMAINS,
  CERTBOT_REMAINING_CHALLENGES,
  CERTBOT_VALIDATION,
} = process.env;

const getDomainInfo = async () => {
  const res = await fetch(
    `https://api.name.com/core/v1/domains/${CERTBOT_DOMAIN}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization,
      },
    }
  );
  const resObj = await res.json();
  return parseDomain(CERTBOT_DOMAIN, resObj.domainName);
};

module.exports = {
  mylog,
  getDomainInfo,
  Authorization,
  wait_duration_seconds,
  CERTBOT_AUTH_OUTPUT,
  CERTBOT_DOMAIN,
  CERTBOT_ALL_DOMAINS,
  CERTBOT_REMAINING_CHALLENGES,
  CERTBOT_VALIDATION,
};

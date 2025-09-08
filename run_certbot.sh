#!/bin/bash

## for single domain:
local domains="domain.tld"

## comma-separated list for multiple domains:
#local domains="domain.tld,sub.domain.tld"

# Your email here:
local certbot_email="your_email@mail.domain.internal"

#comment out for production
local testmode="--test-cert --dry-run"

certbot certonly --manual --preferred-challenges dns \
--agree-tos -nm  "$certbot_email" \
--manual-auth-hook /opt/certbot-node-hooks/auth.js \
--manual-cleanup-hook /opt/certbot-node-hooks/cleanup.js \
-d "$domains" \
"$testmode"

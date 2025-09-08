#!/bin/bash

## for single domain:
certbot_domains="domain.tld"

## comma-separated list for multiple domains (no spaces):
#certbot_domains="domain.tld,sub.domain.tld"

# Your email here:
certbot_email="your_email@mail.domain.tld"

#comment out for production
certbot_testmode="--test-cert --dry-run"

certbot certonly --manual --preferred-challenges dns \
--agree-tos -nm  "$certbot_email" \
--manual-auth-hook "$(realpath ./auth.js)" \
--manual-cleanup-hook "$(realpath ./cleanup.js)" \
-d "$certbot_domains" \
$certbot_testmode

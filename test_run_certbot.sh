#!/bin/bash

certbot certonly --manual --preferred-challenges dns \
--agree-tos -nm your_email@mail.domain.internal \
--manual-auth-hook $(realpath ./auth.js) \
--manual-cleanup-hook $(realpath ./cleanup.js) \
--test-cert --dry-run \
-d domain.internal,sub.domain.internal
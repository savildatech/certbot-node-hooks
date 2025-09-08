#!/bin/bash

certbot certonly --manual --preferred-challenges dns \
--agree-tos -nm your_email@mail.domain.internal \
--manual-auth-hook /opt/certbot-node-hooks/auth.js \
--manual-cleanup-hook /opt/certbot-node-hooks/cleanup.js \
-d domain.internal,sub.domain.internal

# Add the following flags for testing
# --test-cert --dry-run

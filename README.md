
# certbot-node-hooks

name.com hooks for certbot DNS written in JS 

**Requirements**
- Nodejs
- Certbot
- Name.com domain with API token

***Recommended installation (Debian/Ubuntu)***
```bash
sudo su
apt update
apt upgrade -y
apt install -y npm git python3-certbot
npm i -g n
n lts
mkdir -p /opt/certbot-node-hooks/
cd /opt/certbot-node-hooks/
git clone https://github.com/savildatech/certbot-node-hooks.git .
cd -
exit
```
update ```settings.json``` and ```run_certbot.sh``` files with your information

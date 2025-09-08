**Requirements**
- Nodejs
- Certbot
- Name.com domain with API token

***Recommended installation (Debian 12/13)***
```bash
sudo su
apt update
apt upgrade -y
apt install -y n git python3-certbot
n lts
mkdir -p /opt/certbot/
cd /opt/certbot/
git clone https://github.com/savildatech/certbot-node-hooks.git .
```

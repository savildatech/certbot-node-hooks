**Requirements**
- Nodejs
- Certbot
- Name.com domain with API token

***Recommended installation (Debian/Ubuntu)***
```bash
sudo su
apt update
apt upgrade -y
apt install -y n git python3-certbot
n lts
mkdir -p /opt/certbot-node-hooks/
cd /opt/certbot-node-hooks/
git clone https://github.com/savildatech/certbot-node-hooks.git .
cd -
exit
```
update ```settings.json``` and ```run_certbot.sh``` files with your information

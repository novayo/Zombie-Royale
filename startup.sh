cd /home/ubuntu/app/zombie-royale
cp ../.env .
sudo docker-compose stop
sudo docker-compose build
sudo docker-compose up -d

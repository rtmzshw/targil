if you want to run via docker only:
***in my computer, docker only was very slow, i recommend running next using "npm run dev" and mongodb as docker.***

docker build -t my-app .
docker pull mongodb/mongodb-community-server
docker run --net=my_network -e "DB_HOST=mongodb://mongodb:27017" -d -p 3000:3000 my-app
docker run --net=my_network --name mongodb -d -p 27017:27017 mongodb/mongodb-community-server
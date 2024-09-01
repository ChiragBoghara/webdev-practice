set -e 

PROJECT_NAME=react-docker
DOCKER_COMPOSE_FILE=docker-compose-prod.yml

printf "starting containers with docker-compose file --->\n"
docker-compose \
    -p $PROJECT_NAME \
    -f $DOCKER_COMPOSE_FILE \
    up -d

if [ $? -eq 0 ]; then
    printf "Containers started successfully --->\n"
else
    echo "Error: Failed to start containers."
    exit 1
fi

printf "\n"

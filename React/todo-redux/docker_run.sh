set -e

BASE_URL=https://65cb1018efec34d9ed86a4f4.mockapi.io/api/v1
ENDPOINT=todos
CONTAINER_NAME=react-docker
IMAGE_NAME=react-frontend:latest
DEV_DOCKER_FILE=Dockerfile.dev

docker container stop $CONTAINER_NAME || true
docker container rm $CONTAINER_NAME || true

printf "creating image --->\n"
docker image build --tag $IMAGE_NAME --file $DEV_DOCKER_FILE .;
printf "image created --->\n"

printf "Running docker container --->\n"

# docker container run -d \
#   --env REACT_APP_API_BASE_URL=$BASE_URL \
#   --env REACT_APP_API_TODOS_ENDPOINT=$ENDPOINT \
#   --publish 3000:3000 \
#   --volume $PWD/src:/app/src \
#   --name $CONTAINER_NAME $IMAGE_NAME

docker container run -d \
  --env-file .env \
  --publish 3000:3000 \
  --volume $PWD/src:/app/src \
  --name $CONTAINER_NAME $IMAGE_NAME

if [ $? -eq 0 ]; then
  printf "Docker container is running successfully --->\n"
else
  echo "Error: Failed to run the docker container."
  exit 1
fi

printf "\n"
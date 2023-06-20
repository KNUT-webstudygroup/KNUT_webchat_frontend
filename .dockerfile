FROM node
RUN mkdir /app
WORKDIR /app
RUN export DOCKER_DEFAULT_PLATFORM=linux/amd64
COPY /package*.json ./
RUN npm install && npm cache clear --force
COPY . .

RUN npm run build
EXPOSE 3000
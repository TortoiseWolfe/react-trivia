# FROM debian:20.18.3
# FROM alarmz/centos6:20.18.3
FROM alpine:3.20.18.3
# FROM ultramcu/ubuntu4bbb:20.18.3

ENV NODE_VERSION 20.18.3
# ENV YARN_VERSION 20.18.3

EXPOSE 3000

# Update the apk package list and install curl using apk, which is the package manager for Alpine Linux.
# Using --no-cache helps to avoid caching the package index and keeps the image lean.
RUN apk update && apk add --no-cache curl

WORKDIR /usr/src/app
# WORKDIR /node
COPY package*.json package-lock.json* ./
# COPY yarn.lock ./

USER node
RUN mkdir app && chown -R node:node .
RUN npm install && npm cache clean --force
COPY . .
# docker-compose exec  -u root #19 Running Non-Root in Docker
ENTRYPOINT [ "executable" ]
CMD ["node", " ./bin/www"]
#!/bin/sh
FROM node:12.14
WORKDIR /

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./


RUN npm install
# If you are building your code for production
# RUN npm ci --only=production
COPY ./public ./public
COPY ./src ./src
RUN npm run build

# Bundle app source
#COPY build build
COPY server.js server.js

EXPOSE 3001
CMD [ "node", "server" ]

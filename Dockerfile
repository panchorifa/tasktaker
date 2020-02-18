ARG node_version
FROM node:$node_version

WORKDIR /usr/app

RUN rm -rf ~/db
RUN mkdir -p ~/db

COPY package.json .
COPY package-lock.json .

RUN npm ci

COPY . .

ARG node_version | 12
FROM node:$node_version

WORKDIR /usr/app

COPY package.json .
COPY package-lock.json .

RUN npm ci

COPY . .

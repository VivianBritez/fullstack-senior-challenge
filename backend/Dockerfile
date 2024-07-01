# Dockerfile
FROM node:18.18-slim AS base

RUN apt-get update && apt-get install -y dumb-init procps
RUN npm install -g npm

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

ARG RUN_BUILD=1
ENV RUN_BUILD=$RUN_BUILD
RUN if [ "$RUN_BUILD" -eq 1 ]; then npm run build; fi

CMD ["npm", "run", "start:dev"]

FROM node:18.18-slim AS base

RUN apt-get update && apt-get install -y dumb-init procps
RUN npm i -g npm 


FROM base AS deps
WORKDIR /app  
COPY ./package.json ./package-lock.yaml ./
RUN npm install


# Stage 2: Production
FROM base as build 
WORKDIR /app  
COPY . .

COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./


ARG RUN_BUILD=1
ENV RUN_BUILD=$RUN_BUILD
RUN if [ "$RUN_BUILD" -eq 1 ] ; then npm run build ; else : ; fi


CMD ["node", "dist/main"]
# Stage 1: Build
FROM node:14-alpine AS builder

WORKDIR /app

COPY package*.json ./

RUN npm cache clean --force
RUN npm install
RUN npm ls --depth 0

COPY . .

RUN npm run build

# Stage 2: Production
FROM node:14-alpine

WORKDIR /app

COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./

CMD ["node", "dist/main"]

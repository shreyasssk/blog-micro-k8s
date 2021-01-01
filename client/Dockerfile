FROM node:alpine AS builder

WORKDIR /app

COPY ./ ./

RUN npm install

RUN npm run build --prod

FROM nginx
COPY --from=builder /app/dist/microservices/ /usr/share/nginx/html 
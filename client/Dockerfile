FROM node:lts-alpine AS builder

WORKDIR /app

COPY ./ ./

RUN npm install

RUN npm run build --prod

FROM abdennour/nginx-distroless-unprivileged
COPY --from=builder /app/dist/microservices/ /usr/share/nginx/html 

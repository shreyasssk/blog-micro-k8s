FROM node:lts-alpine as build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

FROM astefanutti/scratch-node

COPY --from=build /app /app

ENTRYPOINT ["node", "app.js"]
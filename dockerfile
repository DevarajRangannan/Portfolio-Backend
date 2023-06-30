FROM node:18-alpine

ARG PORT=8080

WORKDIR /App

COPY . .

RUN npm install

EXPOSE $PORT

ENTRYPOINT [ "npm", "start" ]
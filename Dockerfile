FROM node:14.16.1-alpine3.13

RUN mkdir ./client

WORKDIR /client

COPY . .

EXPOSE 3000

RUN npm i

RUN npm start
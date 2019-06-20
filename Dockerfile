FROM node:alpine

WORKDIR /usr/src/app

COPY package.json /usr/src/app

RUN npm install --quiet

RUN apk add --no-cache bash

COPY . .

EXPOSE 4000

CMD ["npm", "start"]
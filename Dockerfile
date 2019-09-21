FROM node:alpine

WORKDIR /usr/src/app

COPY package.json /usr/src/app

RUN apk --no-cache add --virtual native-deps \
      g++ gcc libgcc libstdc++ linux-headers make python && \
      npm install --quiet node-gyp -g &&\
      npm install --quiet && \
      apk del native-deps

RUN npm install --quiet

RUN apk add --no-cache bash

COPY . .

EXPOSE 4000

CMD ["npm", "start"]
FROM node:12-slim

LABEL author="arunstiwari@gmail.com"

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --only=production

COPY . ./

CMD ["npm", "start"]
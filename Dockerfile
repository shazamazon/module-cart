FROM node:10-alpine
WORKDIR /usr/src/shaz_cart
COPY package*.json ./
COPY . .
RUN npm install
EXPOSE 4200
CMD [ "node", "server/index.js" ]

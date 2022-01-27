FROM node

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . /app

EXPOSE 80

ENV MONGODB_HOST=mongodb

ENV MONGODB_PORT=27017

ENV MONGODB_USERNAME=akku

ENV MONGODB_PASSWORD=akku1234

CMD [ "npm", "run", "start:dev" ]
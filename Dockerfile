FROM node:22-alpine

WORKDIR /home

COPY backend/package*.json ./

RUN npm install

COPY backend/. .

EXPOSE 8080

CMD [ "npm", "start" ]

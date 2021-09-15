FROM node:14.11.0-alpine3.10

WORKDIR /app

COPY . .

RUN npm i -g @angular/cli@14.11.0
RUN npm install -g json-server

RUN npm i
RUN npm run build:prod

EXPOSE $PORT

CMD [ "npm", "run" , "start:prod" ]
FROM node:14

RUN mkdir -p /usr/src/app 

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . . 

EXPOSE 3000

RUN npm run limpiar

RUN npm run build

CMD ["npm", "start"]
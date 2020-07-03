FROM node:latest

ENV PATH /node_modules/.bin:$PATH
COPY ./src ./
COPY ./public ./
COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

CMD ["npm","start"]


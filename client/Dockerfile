FROM node:20.11.0
WORKDIR /usr/src/app
COPY package*.json ./
COPY .env.development ./
COPY .env.production ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD [ "node", "dist/src/main.js" ]
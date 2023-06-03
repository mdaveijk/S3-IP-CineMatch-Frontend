FROM node:17-alpine

WORKDIR /app 

COPY package.json . 

## Shortcut for npm install
RUN npm i 

COPY . . 

EXPOSE 3000

CMD ["npm", "run", "dev"] 
FROM node:slim

WORKDIR /apps

COPY . .

RUN npm install

CMD ["npm", "run", "dev" "--host", "0.0.0.0"]
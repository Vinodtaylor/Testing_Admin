FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ENV NEXT_PUBLIC_API=http://localhost:8006


EXPOSE 3002

CMD ["npm", "run", "dev"]
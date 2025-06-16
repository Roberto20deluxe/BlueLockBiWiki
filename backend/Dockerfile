FROM node:20

WORKDIR /app

COPY package*.json ./

COPY . . 

RUN npm install 

RUN npx prisma generate --schema=src/db/prisma/schema.prisma

ENV PORT=3001

EXPOSE 3001 

CMD ["npm", "run", "start"]
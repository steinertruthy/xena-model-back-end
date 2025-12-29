FROM node:24

WORKDIR /usr/src/app

COPY package*.json ./

RUN corepack enable pnpm

RUN pnpm install

COPY . .

RUN npx prisma generate

RUN pnpm run build

EXPOSE 3000

CMD [ "pnpm", "run", "start:prod" ]
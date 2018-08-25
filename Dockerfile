FROM node

WORKDIR /usr/src/app

COPY ./package.json ./
COPY ./packages/client/package.json ./packages/client
COPY ./packages/server/package.json ./packages/server

RUN npm i -g yarn
RUN yarn install

COPY . .

RUN yarn build

EXPOSE 5000 4000
CMD [ "yarn", "start" ]
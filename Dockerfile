FROM node:10.16.3

ENV HOST 0.0.0.0

WORKDIR /agora-node-template

COPY package.json .
COPY yarn.lock .

RUN yarn

COPY . .

RUN yarn build

CMD [ "yarn", "start" ]

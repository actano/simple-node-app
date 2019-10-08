FROM node:10-alpine

WORKDIR /opt/actano/rplan

COPY yarn.lock yarn.lock
COPY babel.config.js babel.config.js
COPY package.json package.json
RUN yarn install --frozen-lockfile
COPY src src
COPY .rplan-config.yml .rplan-config.yml

RUN yarn build

EXPOSE 3000

ENTRYPOINT ["yarn", "start"]

FROM node:7

ENV appDir /var/www/app/conferences
ENV NODE_ENV prod
ENV NODE_PATH .

RUN mkdir -p ${appDir}
RUN curl -o- -L https://yarnpkg.com/install.sh | bash

WORKDIR ${appDir}

COPY package.json ${appDir}
COPY yarn.lock ${appDir}

RUN $HOME/.yarn/bin/yarn install

COPY . ${appDir}

EXPOSE 4000

CMD ["node", "server.js"]

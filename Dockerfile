FROM node:boron
MAINTAINER ACM@UIUC

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/
COPY yarn-lock.json /usr/src/
RUN cd /usr/src && yarn install && cd /usr/src/app

# Bundle app source
COPY . /usr/src/app

EXPOSE 3000

CMD["yarn", "run", "start"]

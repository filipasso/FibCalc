FROM node:alpine

WORKDIR /app

COPY index.js /app

ENTRYPOINT [ "node","/app/index.js"]
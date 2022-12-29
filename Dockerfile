FROM node:alpine

WORKDIR '/'

COPY index.php .

CMD ["php", "./index.php"]
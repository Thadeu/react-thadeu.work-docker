# thadeu.work [![Build Status](https://travis-ci.org/Thadeu/react-thadeu.work-docker.svg?branch=master)](https://travis-ci.org/Thadeu/react-thadeu.work-docker)

## Visit
Live preview in http://thadeu.work

## Dockerized Application

* Docker Compose
* Nginx 1.13
* Node 9
* React v16.2.0

In Development - access thadeuwork.local

```bash
docker-compose up --build dev
or
yarn dev:up
```

In Production - access thadeu.work

```bash
docker-compose up -d --build app server
or
yarn build
```

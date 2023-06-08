
# node-redis-mysql-project
=======
# react-node-redis-mysql-demo
---

## Setup instructions

1) `cd` into the `BackEnd` folder from project **root**.

> **Now install `docker` and then run the next command to setup `mysql` & `redis` server using `docker compose.`**
```shell
$ docker compose up
```

2) Go to  `http://localhost:8081` login using `username: root & password: pass` 

3) Run This SQL
```SQL
    CREATE TABLE `notesDB`.`notes` (`id` INT NOT NULL AUTO_INCREMENT , `title` VARCHAR(255) NOT NULL , `text` VARCHAR(500) NOT NULL , PRIMARY KEY (`id`)) ENGINE = InnoDB;
```
4) Start the `node.js` server from the `/server` folder
```shell
$ node app.js
```

5) Start the `react.js` app by opening another terminal at the project `root` folder & then `cd` into the `FrontEnd` folder.
```shell
# At the project root folder
# cd into the `app` folder
$ cd app
$ npm install
$ npm run dev
```


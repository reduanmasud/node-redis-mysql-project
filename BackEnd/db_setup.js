import mysql from "mysql2/promise";


(async ()=>{
    const query = `CREATE DATABASE notesDB`;
    const conn = await mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "pass",
        database: "notesDB",
      });
    await conn.execute(query);
    await conn.execute("CREATE TABLE `notesDB`. (`id` INT NOT NULL AUTO_INCREMENT , `title` VARCHAR(300) NOT NULL , `text` VARCHAR(500) NOT NULL , PRIMARY KEY (`id`)) ENGINE = InnoDB;");
    await conn.end()
    
})()


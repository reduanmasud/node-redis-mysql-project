import express from "express";
import cors from "cors";
import mysql from "mysql2/promise";

const dbConfig = {
    host: "localhost",
    user: "root",
    password: "pass",
    database: "notesDB",
    port: 6033
  }


const getNotesFromDB = async () => {
    const query = `SELECT * FROM notes`;
    const conn = await mysql.createConnection(dbConfig);
    const [data, _] = await conn.execute(query);
    await conn.end();
    return data;
}

const addNewNote = async (title, text) => {
    const query = `INSERT INTO notes (title, text) VALUES ('${title}', '${text}')`;
    const conn = await mysql.createConnection(dbConfig);
    const [data, _] = await conn.execute(query);
    await conn.end();
}
const PORT = 5000;

const notes = [
    { id: 2, title:"Note Title 2", text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has surviv" },
    { id: 1, title:"Note Title 1", text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has surviv" },
    { id: 3, title:"Note Title 3", text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has surviv" },
  ];


  const app = express();     
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({extended: true}));






  app.get("/", (_, res) => res.status(200).send("Hello World!"));
  
  app.get("/notes",async (_, res) => {
    try {
        const data = await getNotesFromDB();
        res.status(200).send(data);
    } catch (err)
    {
        res.status(500).send({ message: "Error getting news" });
    }
  })
  
  app.post("/createNote", async (req, res) => {
    try {
        const {title, text}  = req.body;
        await addNewNote(title, text);
        res.status(201).send({message: "New Note Created"});
    } catch (error) {
        res.status(500).send({ message: "Error creating news" });
    }
  });






  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));



import { useEffect, useState } from 'react'
import { Navbar } from './components/Navbar'
import { Card } from './components/Card'
import { CreateNotePage } from './pages/CreateNotePage'


const getNotes = async () => {
  const resp = await fetch(`http://localhost:3456/notes`);
  const data = await resp.json();
  return data;
};

const makeNote = async (title, text) => {
  const res = await fetch(`http://localhost:3456/createNote`,
  {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({title:title, text:text})
  })
  const msg = await res.json();
  return msg;
}

function App() {
  const [noteList, setNoteList] = useState([]);
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  useEffect(() => {
    getNotes()
      .then((res) => setNoteList(res))
      .catch((error) => console.log(error));
  }, [])

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      await makeNote(title, text);
      const lastUpdate = await getNotes();
      setNoteList(lastUpdate)

    } catch (error) {
      console.error("there is some error", error);
    }
    if(title.length == 0 || text.length == 0) {
      alert("Any Field Can not Be Empty");
    } else {

      // const newNote = [
      //   ...noteList,
      //   {id: notes.length + 1, title:title, text:text}
      // ]            
      setTitle("");
      setText("")
    }
    
    
  }

  return (
    <>
      <Navbar/>
      <CreateNotePage title={title} text={text} onSubmitHandler={onSubmitHandler} setTitle={setTitle} setText={setText}/>
      <div className="container">
        <div className="row row-cols-2 gy-5 mb-3">
          {
            noteList.map((note) => {
              return <Card key={note.id} title={note.title} text={note.text} />
            })
          }
        </div>
      </div>
    </>
  )
}

export default App

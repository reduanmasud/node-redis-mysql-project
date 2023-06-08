

export function CreateNotePage({title, text, setTitle, setText, onSubmitHandler}) {
    return (
        <form onSubmit={onSubmitHandler}>
            <div className="container">

                <div className="mb-3 mt-3">
                    <label className="form-label">Title</label>
                    <input type="text" onChange={(e) => setTitle(e.target.value)} className="form-control" value={title} placeholder="Title..... " />
                </div>

                <div className="mb-3">
                    <label className="form-label">Note</label>
                    <textarea className="form-control" onChange={(e) => setText(e.target.value)} id="note-text" rows="11" value={text}></textarea>
                </div>

                <div className="mb-3">
                    <button type="submit" className="btn btn-primary">Save</button>
                </div>

            </div>
        </form>
    )
  }
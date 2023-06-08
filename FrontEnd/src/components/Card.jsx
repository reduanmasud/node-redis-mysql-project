

export function Card({ title, text }) {
    return (

        <div className="card col-md-3 mx-3">
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{text}</p>
            {/* <a href="#" className="btn btn-success mx-1">View</a>
            <a href="#" className="btn btn-danger">Delete</a> */}
          </div>
        </div>
    )
  }
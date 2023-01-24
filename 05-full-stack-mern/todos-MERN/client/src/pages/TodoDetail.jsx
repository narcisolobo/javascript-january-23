import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function TodoDetail() {
  const { id } = useParams();
  const [todo, setTodo] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    axios
      .get(`http://localhost:5001/api/todos/${id}`, {
        signal: controller.signal,
      })
      .then((res) => setTodo(res.data))
      .catch((err) => console.log(err));
    return () => controller.abort();
  }, [id]);

  return (
    <div>
      <h1>Details:</h1>
      {todo && (
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{todo.task}</h5>
            <p>{todo.isComplete ? "Completed." : "Not completed."}</p>
          </div>
          <div className="card-footer d-flex justify-content-end">
            <Link to={`/todos/${todo._id}/edit`} className="btn btn-warning">
              Edit
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
export default TodoDetail;

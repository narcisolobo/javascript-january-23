import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function TodoDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
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

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:5001/api/todos/${id}`)
      .then((res) => {
        console.log(res.data);
        navigate('/todos');
      })
      .catch((err) => console.log(err));
  };

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
            <Link to={`/todos/${todo._id}/edit`} className="btn btn-warning me-2">
              Edit
            </Link>
            <button className="btn btn-danger" onClick={() => handleDelete(todo._id)}>Delete</button>
          </div>
        </div>
      )}
    </div>
  );
}
export default TodoDetail;

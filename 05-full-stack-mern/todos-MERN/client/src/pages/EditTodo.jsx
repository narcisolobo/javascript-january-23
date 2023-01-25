import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function EditTodo() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [todo, setTodo] = useState({
    task: "",
    isComplete: false,
  });

  useEffect(() => {
    const controller = new AbortController();
    axios
      .get(`http://localhost:5001/api/todos/${id}`, {
        signal: controller.signal,
      })
      .then((res) => {
        console.log(res.data);
        setTodo(res.data);
      })
      .catch((err) => console.log(err));
    return () => controller.abort();
  }, [id]);

  const handleChange = (e) => {
    setTodo({
      ...todo,
      [e.target.name]: e.target.value,
    });
  };

  const handleCheck = (e) => {
    setTodo({
      ...todo,
      isComplete: e.target.checked,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:5001/api/todos/${id}`, todo)
      .then((res) => {
        console.log(res.data);
        navigate('/todos');
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h1>Edit Todo:</h1>
      <div className="card">
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="task" className="form-label">
                Task:
              </label>
              <input
                type="text"
                name="task"
                id="task"
                className="form-control"
                value={todo.task}
                onChange={handleChange}
              />
            </div>
            <div className="form-check mb-3">
              <input
                type="checkbox"
                name="isComplete"
                id="isComplete"
                className="form-check-input"
                checked={todo.isComplete}
                onChange={handleCheck}
              />
              <label htmlFor="isComplete" className="form-check-label">
                Completed?
              </label>
            </div>
            <div className="d-flex justify-content-end">
              <button type="submit" className="btn btn-primary">
                EDIT TODO
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default EditTodo;

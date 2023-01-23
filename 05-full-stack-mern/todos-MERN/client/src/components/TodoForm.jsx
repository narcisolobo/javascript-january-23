import axios from "axios";
import { useState } from "react";

function TodoForm() {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      task,
      isComplete: false,
    };

    axios
      .post('http://localhost:5001/api/todos', newTodo)
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
  };

  return (
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
              value={task}
              onChange={(e) => setTask(e.target.value)}
            />
          </div>
          <div className="d-flex justify-content-end">
            <button type="submit" className="btn btn-primary">SUBMIT</button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default TodoForm;

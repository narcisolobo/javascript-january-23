import axios from 'axios';
import { Link } from "react-router-dom";

function TodoList({ todos, setLoaded }) {
  const handleCheck = (e, id) => {
    axios
      .put(`http://localhost:5001/api/todos/${id}`, {
        isComplete: e.target.checked,
      })
      .then(res => {
        console.log(res.data);
        setLoaded(false);
      })
      .catch(err => console.log(err));
  };

  return (
    todos &&
    todos.map((todo) => {
      return (
        <div key={todo._id} className="card mb-3">
          <div className="card-body">
            <div className="form-check">
              <input
                type="checkbox"
                name="isComplete"
                id="isComplete"
                className="form-check-input"
                checked={todo.isComplete}
                onChange={(e) => handleCheck(e, todo._id)}
              />
              <label htmlFor="isComplete" className="form-check-label">
                <Link to={`/todos/${todo._id}`}>{todo.task}</Link>
              </label>
            </div>
          </div>
        </div>
      );
    })
  );
}

export default TodoList;

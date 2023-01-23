import { Link } from "react-router-dom";

function TodoList({ todos }) {
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

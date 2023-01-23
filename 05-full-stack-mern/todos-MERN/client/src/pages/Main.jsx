import axios from "axios";
import { useEffect, useState } from "react";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";

function Main() {
  const [todos, setTodos] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    axios
      .get("http://localhost:5001/api/todos", { signal: controller.signal })
      .then((res) => {
        setTodos(res.data);
        setLoaded(true)
      })
      .catch((err) => console.log(err));
    return () => controller.abort();
  }, [loaded]);

  const reversedTodos = [...todos].reverse();

  return (
    <div>
      <h1>Main</h1>
      <TodoForm setLoaded={setLoaded} />
      {loaded && <TodoList todos={reversedTodos} />}
    </div>
  );
}
export default Main;

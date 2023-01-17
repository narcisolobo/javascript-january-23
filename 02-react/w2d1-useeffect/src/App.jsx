import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [post, setPost] = useState(null);
  const [id, setId] = useState(1);
  // First argument is a callback
  // Second argument is an array (the dependency array)
  // Any variables that you're watching in the dependency array
  // must always be primitive (scalar) data types.
  useEffect(() => {
    const controller = new AbortController();
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        signal: controller.signal,
      })
      .then((res) => {
        console.log(res.data);
        setPost(res.data);
      })
      .catch((err) => console.log(err));
    return () => controller.abort();
  }, [id]);

  return (
    <div className="container">
      <h1>Use Effect Hook</h1>
      <p>
        We can hook into the following component lifecycle events with
        useEffect:
      </p>
      <ul>
        <li>Component Did Mount</li>
        <li>Component Did Update</li>
        <li>Component Will Unmount</li>
      </ul>
      <form>
        <input
          type="number"
          name="id"
          id="id"
          className="form-control"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
      </form>
      <h2>Post {post && post.title}</h2>
      <p>{post && post.body}</p>
    </div>
  );
}
export default App;

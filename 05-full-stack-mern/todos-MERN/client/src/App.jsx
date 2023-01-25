import "bootstrap/dist/css/bootstrap.min.css";
import { Navigate, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import EditTodo from "./pages/EditTodo";

import Main from "./pages/Main";
import TodoDetail from "./pages/TodoDetail";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Navigate to="/todos" />} />
          <Route path="/todos" element={<Main />} />
          <Route path="/todos/:id" element={<TodoDetail />} />
          <Route path="/todos/:id/edit" element={<EditTodo />} />
        </Routes>
      </div>
    </>
  );
}
export default App;

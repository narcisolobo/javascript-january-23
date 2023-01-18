import { Outlet } from "react-router-dom";

function Characters() {
  return (
    <div className="card">
      <div className="card-body">
        <h1>Characters</h1>
        <Outlet />
      </div>
    </div>
  )
}
export default Characters;

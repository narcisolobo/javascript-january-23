import { Outlet } from "react-router-dom";

function Episodes() {
  return (
    <div className="card">
      <div className="card-body">
        <h1>Episodes</h1>
        <Outlet />
      </div>
    </div>
  )
}
export default Episodes;

import { Outlet } from "react-router-dom";

function Locations() {
  return (
    <div className="card">
      <div className="card-body">
        <h1>Locations</h1>
        <Outlet />
      </div>
    </div>
  )
}
export default Locations;

import { useParams } from "react-router-dom";

function OneProject() {
  const { id } = useParams();

  return (
    <div className="card mt-3">
      <div className="card-body">
        <h1>OneProject</h1>
        <h2>Project ID: {id}</h2>
      </div>
    </div>
  )
}
export default OneProject;

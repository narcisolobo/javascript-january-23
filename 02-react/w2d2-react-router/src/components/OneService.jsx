import { useParams } from "react-router-dom";

function OneService() {
  const params = useParams();

  return (
    <div className="card mt-3">
      <div className="card-body">
        <h1>OneService</h1>
        <h2>{params.service.toUpperCase()}</h2>
      </div>
    </div>
  )
}
export default OneService;
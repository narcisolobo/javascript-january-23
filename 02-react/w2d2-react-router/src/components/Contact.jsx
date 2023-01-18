import { useNavigate } from "react-router-dom";

function Contact() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/home');
  }

  return (
    <div className="card mt-3">
      <div className="card-body">
        <h1>Contact</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="comments" className="form-label">Comments:</label>
            <textarea name="comments" id="comments" className="form-control"></textarea>
          </div>
          <div className="d-flex justify-content-end">
            <button type="submit" className="btn btn-primary">SEND</button>
          </div>
        </form>
      </div>
    </div>
  )
}
export default Contact;
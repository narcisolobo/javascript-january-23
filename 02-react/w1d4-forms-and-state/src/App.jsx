import MuppetForm from "./components/MuppetForm";
import "./simplex.css";

function App() {
  return (
    <div className="container mt-3">
      <div className="card shadow">
        <div className="card-body">
          <h1>Simplex</h1>
          <MuppetForm />
        </div>
      </div>
    </div>
  );
}

export default App;

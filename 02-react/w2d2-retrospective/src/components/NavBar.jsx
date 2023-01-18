import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-3">
      <div className="container">
        <Link className="navbar-brand" to="/">Rick and Morty API</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/characters">Characters</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/locations">Locations</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/episodes">Episodes</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
export default NavBar;

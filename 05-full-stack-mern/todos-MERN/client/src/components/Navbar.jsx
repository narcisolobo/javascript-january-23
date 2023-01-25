import {Link} from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-3">
      <div className="container">
        <span className="navbar-brand">TODO LIST</span>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className='nav-link' to='/todos'>All Todos</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
export default Navbar;
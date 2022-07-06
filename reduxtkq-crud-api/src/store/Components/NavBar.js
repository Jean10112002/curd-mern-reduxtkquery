import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <nav className="navbar  navbar-dark bg-dark">
      <div className="container">
        <Link  className="navbar-brand" to="/">
          Home
        </Link>
        <ul className="navbar-nav  px-2">
        <li className="nav-item">
          <Link  className="nav-link active" to="/create">
            Ingresar
          </Link>
        </li>
      </ul>
      </div>
      
    </nav>
  );
};

export default NavBar;

import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/lecture-notes">Lecture Notes</Link></li>
        <li><Link to="/descartes">Descartes</Link></li>
        <li><Link to="/searle">Searle</Link></li>
        <li><Link to="/turing">Turing</Link></li>
        <li><Link to="/dennett">Dennett</Link></li>
      </ul>
    </nav>
  );
}

export default NavBar; 
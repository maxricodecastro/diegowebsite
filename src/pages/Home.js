import { Link } from 'react-router-dom';
import './Home.css';

// This is your existing home page layout
function Home() {
  const pages = [
    { path: '/lecture-notes', alt: 'Lecture Notes', delay: 0 },
    { path: '/descartes', alt: 'Descartes', delay: 0.2 },
    { path: '/turing', alt: 'Turing', delay: 0.4 },
    { path: '/searle', alt: 'Searle', delay: 0.6 },
    { path: '/dennett', alt: 'Dennett', delay: 0.8 }
  ];

  return (
    <div className="page-container">
      <p className="interaction-text">Click to interact</p>
      <div className="image-container">
        {pages.map((page, index) => (
          <Link to={page.path} key={index}>
            <img
              src={`${process.env.PUBLIC_URL}/tree.png`}
              alt={page.alt}
              className="square-image"
              style={{ animationDelay: `${page.delay}s` }}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import LectureNotes from './pages/LectureNotes';
import Descartes from './pages/Descartes';
import Searle from './pages/Searle';
import Turing from './pages/Turing';
import Dennett from './pages/Dennett';

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lecture-notes" element={<LectureNotes />} />
          <Route path="/descartes" element={<Descartes />} />
          <Route path="/searle" element={<Searle />} />
          <Route path="/turing" element={<Turing />} />
          <Route path="/dennett" element={<Dennett />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

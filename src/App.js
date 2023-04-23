import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import LearningResources from './pages/LearningResources';
// import Members from './pages/Members';
// import Gallery from './pages/Gallery';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src="https://avatars.githubusercontent.com/u/64628657" className="App-logo" alt="logo" />
          <h3 id="name">Coderplex Dev Community</h3>
        </header>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/learning-resources">Learning Resources</Link>
            </li>
            {/* <li>
              <Link to="/members">Members</Link>
            </li> */}
            {/* <li>
              <Link to="/gallery">Gallery</Link>
            </li> */}
          </ul>
        </nav>
        <div class="main-content">
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/learning-resources" element={<LearningResources />} />
              {/* <Route path="/members" element={<Members />} /> */}
              {/* <Route path="/gallery" element={<Gallery />} /> */}
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;

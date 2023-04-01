import React from 'react';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Japanese from './pages/Japanese';
import Gallery from './pages/Gallery';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom"

function App() {
  return (
    <Router basename='/'>
        <div id="navigation">
          <Link to="/">Home</Link>{" "}
          <Link to="/about">About</Link>{" "}
          <Link to="/japanese">Japanese</Link>{" "}
          <Link to="/gallery">Gallery</Link>{" "}
          <a href="">Resume</a>
        </div>

      <div id="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/japanese" element={<Japanese />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </div>

      <div id="navigationEnd">
        <div className="quote" style={{fontStyle: "oblique"}}>
          "Well, y'see, we keep looking for home, but we keep finding this pit, 
          so I just thought that if we looked for this pit, we might find{" "}
          <a href="#navigation">home</a>."
        </div>

        <img height="150px" src="https://lumiere-a.akamaihd.net/v1/images/winniethepooh_talking_a9f97246.gif" alt="Pooh"/>
      </div>

    </Router>
  );
}

export default App;

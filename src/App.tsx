import { useState } from 'react';

import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Nav from './components/Nav';
import Portfolio from './components/Portfolio';

import './App.css';

function App() {
  const [activeRoute, setRoute] = useState(window.location.href.split("#")[1]);
  return (
    <>
      <Nav {...{ activeRoute, setRoute }} />
      <Home />
      <About />
      <Portfolio />
      <Contact />
    </>
  );
}

export default App;

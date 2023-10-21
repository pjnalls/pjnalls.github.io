import { useState } from 'react';

import About from '../components/About/About';
import Contact from '../components/Contact/Contact';
import Home from '../components/Home/Home';
import Nav from '../components/Nav/Nav';
import Works from '../components/Works/Works';
import OneLove from '../components/OneLove/OneLove';

import './App.scss';

function App() {
  const [activeRoute, setRoute] = useState(window.location.href.split("#")[1]);
  return (
    <>
      <Nav {...{ activeRoute, setRoute }} />
      <Home />
      <About />
      <Works />
      <Contact />
      <OneLove />
    </>
  );
}

export default App;

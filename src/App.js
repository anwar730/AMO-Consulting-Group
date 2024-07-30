import React from 'react';
 import './output.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Footer from './components/Footer';

import About from './components/About';
import Powerapps from './components/Powerapps';
import Powerbi from './components/Powerbi';
import Powerautomate from './components/Powerautomate';
import Sharepoint from './components/Sharepoint';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses/powerapps" element={<Powerapps/>}/>
        <Route path="/courses/powerbi" element={<Powerbi/>}/>
        <Route path="/courses/powerautomate"element={<Powerautomate/>}/>
        <Route path="/courses/sharepoint" element={<Sharepoint/>}/>

        <Route path="/about" element={<About />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;


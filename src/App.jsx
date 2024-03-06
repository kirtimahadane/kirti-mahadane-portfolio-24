//import React from 'react';
import {  Routes, Route } from 'react-router-dom';
//import Navbar from './components/Navbar';
import Nav from './pages/Nav';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import Projects from './pages/Projects';

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <Nav /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About/>} />
        <Route path="contact" element={<Contact />} />
        <Route path="projects" element={<Projects />} />
      </Routes>
      <Footer/>
  </>
  );
}

export default App;

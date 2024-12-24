// src/App.js
import React from 'react';
// import Navbar from './components/Navbar';
import Homepage from './components/Homepage'; // Assuming the HeaderComponent is in the components folder
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <Homepage />
      <About />
      <Skills />
      <Contact />
      <Footer />
      {/* Add other components or content here */}
    </div>
  );
};

export default App;

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import Navbar from './Components/Homepage/Navbar/Navbar';
import Home from './Components/Home/Home';
// import PageNotFound from './Components/Homepage/PageNotFound/PageNotFound';
import About from './Components/Homepage/About/About';
import Skills from './Components/Homepage/Skills/Skills'
// import Projects from './Components/Homepage/Projects/Projects';
import Resume from './Components/Homepage/Resume/Resume'; 
import Contact from './Components/Homepage/Contact/Conatct';



import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const App = () => {
  return (
    <BrowserRouter>
    <Navbar/> 
    
      <Routes>
      
        <Route path="/" element={<Home />} />   
        {/* <Route path="/home" element={<Home />} />    */}
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        {/* <Route path="/projects" element={<Projects />} /> */}
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="*" element={<Navigate to="/" />} /> */}
        <Route path="*" element={<Home />} />
      
      
    </Routes>
    </BrowserRouter>

  );
};

export default App;



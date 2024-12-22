import React,{useEffect} from 'react'
import './Header.css'; // Import the CSS file for custom styles
import { Link } from 'react-router-dom';

import lathaImage from '../images/latha.jpeg';

const Header = () => {

  useEffect(() =>{
    document.title = 'My_Portfolio || Home'
},[]) 

return (
  <>
 
  <div className="d-flex justify-content-center align-items-center mt-20 ">
    <div className="AboutMe-container">
      {/* Header with text and image side by side */}
    <header className="Head">
        <div className="text-section">
          <h1 style={{color: 'white'}}>Hi, I'm <span>Latha Kumari</span></h1>
          <p>Frontend Web Developer</p>
          <Link to="/contact" className="btn btn-info">
          Contact Me <i className="fas fa-arrow-right"></i>
        </Link>
        </div>
        
        <div className="AboutMe-img">
        <img src={lathaImage} alt="latha" />

        </div>
      </header>
      
      <section id="about">
        <h2>About Me</h2>
        <p>
          I am a passionate web developer with expertise in HTML, CSS, JavaScript, and React.js. 
          I create responsive and visually appealing websites.
        </p>


        <Link to="/about" className="btn btn-info">
          Read More.. <i className="fas fa-arrow-right"></i>
        </Link>
      </section>
      
    </div>
  </div>
  </>
);
};


export default Header
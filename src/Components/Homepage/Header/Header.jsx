import React, { useEffect } from 'react'
import './Header.css'; // Import the CSS file for custom styles
import { Link } from 'react-router-dom';

import lathaImage from '../../Homepage/Images/latha.jpeg';

const Header = () => {

  useEffect(() => {
    document.title = 'My_Portfolio || Home'
  }, [])

  return (
    <>

      <div className="d-flex justify-content-center align-items-center mt-20 ">
        <div className="AboutMe-container">
          {/* Header with text and image side by side */}
          <header className="Head">
            <div className="text-section">
              <h1 style={{ color: 'white' }}>Hi, I'm Latha from <span>India...</span></h1>
              <p>I believe every student deserves the right opportunity. </p>
              <Link to="/contact" className="btn btn-info">
                Contact Me <i className="fas fa-arrow-right"></i>
              </Link>
            </div>

            <div className="AboutMe-img">
              <img src={lathaImage} alt="Latha" />

            </div>
          </header>

          <section id="about">
            <h2>About Me</h2>
            <p>
              Hi, I'm <b>Latha</b> from Hyderabad, India.
              <br />
            
              I provide <b>2 Months of Resume Support & Job Marketing Support</b> for USA students. <b /></p>
            <p> And also helping them explore <b> Full-Time opportunities</b> and <b>Improve their Job search journey...</b> and I'm happy to be a small part of that journey.
          
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
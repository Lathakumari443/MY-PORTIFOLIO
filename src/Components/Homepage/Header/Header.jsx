import React, { useEffect } from 'react'
import './Header.css'; // Import the CSS file for custom styles
import { Link } from 'react-router-dom';

import lathaImage from '../images/latha.jpeg';

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
              <img src={lathaImage} alt="latha" />

            </div>
          </header>

          <section id="about">
            <h2>About Me</h2>
            <p>
              Hi, I'm <b>Latha</b> from Hyderabad, India.
              <br />
              <br />
              I know the courage it takes to leave your <b>Country, family, and comfort zone to build a future in a new country.
              <br />
              <br /></b>

              Every day, you face challenges, uncertainty, and pressure while chasing your dreams. I truly appreciate the effort, dedication, and strength behind your journey.
              <br />
              <br />

              That's why I provide dedicated job marketing support to USA students for up to 2–3 months, helping them gain visibility and connect with the right opportunities.
              <br />
              <br />

              Your hard work is 99% of the journey. If my support can contribute even 1% toward helping you achieve your goals, that brings me great satisfaction.
              <br />
              <br />

              This platform was created with one mission — to support ambitious students and be a small part of their success story.
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
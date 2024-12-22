import React, {useEffect} from 'react';
import './Resume.css';
import resumeImage from '../images/Latha_kumari_matthe_resume.pdf'

const Resume = () => {

  useEffect(() =>{
    document.title = 'My_Portfolio || Resume'
},[])

  return (
    <div className="resume-container">
      
      {/* Embed PDF in the page */}
      <embed 
        src={resumeImage}
        type="application/pdf" 
        width="100%" 
        height="600px" 
        alt="Resume" 
      />

      <div className="download-section">
        <a 
          href='../../assets/images/.pdf' 
          download="Latha_kumari_resume.pdf"
          className="btn btn-danger download-btn"
        >
          Download Resume
        </a>
      </div>
    </div>
  );
};

export default Resume;




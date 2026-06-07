import React, {useEffect} from 'react';
import './Resume.css';
import resumeDataAnalyst from '../../Homepage/Images/Latha Matthe _Business Data Analyst_Resume.pdf';
import resumeBusinessAnalyst from '../../Homepage/Images/Latha Matthe _Business systems Analyst_Resume.pdf';
import resumeBA_ATS_Analyst from '../../Homepage/Images/Latha_Matthe BA_ATS_Resume.pdf';
import resumeQualityAnalyst from '../../Homepage/Images/Latha Matthe_Quality Engineer_Resume.pdf';
import resumeManufacturingAnalyst from '../../Homepage/Images/Latha Matthe_ Manufacture Engineer_Resume.pdf';

const Resume = () => {

  useEffect(() =>{
    document.title = 'My_Portfolio || Resume'
},[])

   return (
  <div className="resume-container">

    <h1 className="title">Sample Resumes</h1>

    <p className="subtitle">
      ATS Friendly Sample Resumes for Different Roles
    </p>

    <div className="resume-grid">

      {/* Business Data Analyst */}
      <div className="resume-card">
        <h3>Business Data Analyst</h3>

        <div className="pdf-wrapper">
          <iframe
            src={`${resumeDataAnalyst}#toolbar=0`}
            title="Business Data Analyst Resume"
          />
        </div>

        <a
          href={resumeDataAnalyst}
          target="_blank"
          rel="noopener noreferrer"
          className="download-btn"
        >
          View Resume
        </a>
      </div>

      {/* Business Systems Analyst */}
      <div className="resume-card">
        <h3>Business Systems Analyst</h3>

        <div className="pdf-wrapper">
          <iframe
            src={`${resumeBusinessAnalyst}#toolbar=0`}
            title="Business Systems Analyst Resume"
          />
        </div>

        <a
          href={resumeBusinessAnalyst}
          target="_blank"
          rel="noopener noreferrer"
          className="download-btn"
        >
          View Resume
        </a>
      </div>

      {/* BA ATS Resume */}
      <div className="resume-card">
        <h3>BA ATS Resume</h3>

        <div className="pdf-wrapper">
          <iframe
            src={`${resumeBA_ATS_Analyst}#toolbar=0`}
            title="BA ATS Resume"
          />
        </div>

        <a
          href={resumeBA_ATS_Analyst}
          target="_blank"
          rel="noopener noreferrer"
          className="download-btn"
        >
          View Resume
        </a>
      </div>

      {/* Quality Engineer */}
      <div className="resume-card">
        <h3>Quality Engineer</h3>

        <div className="pdf-wrapper">
          <iframe
            src={`${resumeQualityAnalyst}#toolbar=0`}
            title="Quality Engineer Resume"
          />
        </div>

        <a
          href={resumeQualityAnalyst}
          target="_blank"
          rel="noopener noreferrer"
          className="download-btn"
        >
          View Resume
        </a>
      </div>

      {/* Manufacturing Engineer */}
      <div className="resume-card">
        <h3>Manufacturing Engineer</h3>

        <div className="pdf-wrapper">
          <iframe
            src={`${resumeManufacturingAnalyst}#toolbar=0`}
            title="Manufacturing Engineer Resume"
          />
        </div>

        <a
          href={resumeManufacturingAnalyst}
          target="_blank"
          rel="noopener noreferrer"
          className="download-btn"
        >
          View Resume
        </a>
      </div>

    </div>

  </div>
);
};

export default Resume;
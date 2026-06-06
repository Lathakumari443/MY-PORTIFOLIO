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

          <iframe
            src={resumeDataAnalyst}
            type="application/pdf"
          />

          <a
            href={resumeDataAnalyst}
            download="Latha Matthe _Business Data Analyst_Resume.pdf"
            className="download-btn"
          >
            Download Resume
          </a>
        </div>

        {/* Business Systems Analyst */}
        <div className="resume-card">
          <h3>Business Systems Analyst</h3>

          <iframe
            src={resumeBusinessAnalyst}
            type="application/pdf"
          />

          <a
            href={resumeBusinessAnalyst}
            download="Latha Matthe _Business systems Analyst_Resume.pdf"
            className="download-btn"
          >
            Download Resume
          </a>
        </div>

        {/* Business Analyst ATS */}
        <div className="resume-card">
          <h3>BA ATS Resume</h3>

          <iframe
            src={resumeBA_ATS_Analyst}
            type="application/pdf"
          />

          <a
            href={resumeBA_ATS_Analyst}
            download="Latha_Matthe BA_ATS_Resume.pdf"
            className="download-btn"
          >
            Download Resume
          </a>
        </div>

        {/* Quality Engineer */}
        <div className="resume-card">
          <h3>Quality Engineer</h3>

          <iframe
            src={resumeQualityAnalyst}
            type="application/pdf"
          />

          <a
            href={resumeQualityAnalyst}
            download="Latha Matthe_Quality Engineer_Resume.pdf"
            className="download-btn"
          >
            Download Resume
          </a>
        </div>

        {/* Manufacturing Engineer */}
        <div className="resume-card">
          <h3>Manufacturing Engineer</h3>

          <iframe
            src={resumeManufacturingAnalyst}
            type="application/pdf"
          />

          <a
            href={resumeManufacturingAnalyst}
            download="Latha Matthe_ Manufacture Engineer_Resume.pdf"
            className="download-btn"
          >
            Download Resume
          </a>
        </div>

      </div>

    </div>
  );
};

export default Resume;
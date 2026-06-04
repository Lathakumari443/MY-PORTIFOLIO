import React, { useEffect } from 'react'
import './Skills.css'


import htmlImage from '../images/html.jpeg';
import cssImage from '../images/css.jpeg';
import jsImage from '../images/js.jpeg';
import reactImage from '../images/react.jpeg';

function Skills() {
  useEffect(() => {
    document.title = 'My_Portfolio || Skills';
  }, []);

  return (
    <>
      

      <div className="container-2">
        <h1 style={{ textAlign: 'center', color: 'blueviolet' }}>
          <b>Job Roles</b>
        </h1>
        <br />
        <br />

     <div className="product">
  <div className="product-list">
    <img src={htmlImage} alt="data-analyst" />
    <h3>Business or Data Analyst </h3><br />

    <ul>
      <li>Business Systems Analyst</li> <br />
      <li>Business Analyst</li><br />
      <li>Technical Business Analyst</li><br />
      <li>Business Data Analyst</li><br />
      <li>Data Analyst</li><br />
      <li>BI Analyst / Business Intelligence Analyst</li><br />
      <li>Power BI Developer</li><br />
      <li>Systems Analyst</li><br />
      <li>Process Analyst</li><br />
      <li>Operations Analyst</li><br />
      <li>Data Quality / Data Governance Analyst</li><br />
    </ul>
  </div>


<div className="product-list">
  <img src={cssImage} alt="quality-engineer" />
  <h3>Quality Engineer</h3><br />

  <ul>
       <li>Junior Quality Engineer</li><br />
       <li>Quality Engineer I</li><br />
       <li>Quality Engineer II</li><br />
      <li>Manufacturing Engineer (Entry Level)</li><br />
    <li>Graduate Manufacturing Engineer</li><br />
    <li>Process Engineer I</li><br />
    <li>Associate Process Engineer (Entry)</li><br />
    <li>Industrial Engineer I</li><br />
    <li>Junior Industrial Engineer</li><br />
  
   
    <li>Project Engineer (Entry)</li><br />
    <li>Assistant Project Engineer</li><br />
  </ul>
</div>

          <div className="product-list">
            <img src={jsImage} alt="js" />
            <h3>Manufacture Engineer</h3><br />
             <ul>
    <li>Manufacturing Engineer (Entry Level)</li><br />
    <li>Graduate Manufacturing Engineer</li><br />
    <li>Process Engineer I</li><br />
    <li>Associate Process Engineer (Entry)</li><br />
    <li>Industrial Engineer I</li><br />
    <li>Junior Industrial Engineer</li><br />
    <li>Quality Engineer I</li><br />
    <li>Junior Quality Engineer</li><br />
    <li>Project Engineer (Entry)</li><br />
    <li>Assistant Project Engineer</li><br />
  </ul>
</div>

          
        
        </div>
      </div>
    </>
  );
}

export default Skills;

import React, { useEffect } from 'react'
import './About.css'

const About = () => {

  useEffect(() => {
    document.title = 'My_Portfolio || About'
  }, [])


  return (
  <div className='container-443'>
    <p>
      Hi.. I'm <b>Latha from Hyderabad, India</b>
      <br />
      <br />

      I am a <b>B.Tech Graduate from JNTUK University</b>.
      <br />
      <br />

      I have over <b>1 year of experience in Resume Support</b>, helping USA-based students and job seekers secure full-time opportunities in roles such as <b>Data Analyst, Business Analyst, Quality Engineer, Manufacturing Engineer</b>, and related fields.
      <br />
      <br />

      Prior to this, I gained <b>2 years of professional experience in the Software Industry</b>, where I developed strong analytical, technical, and problem-solving skills.
      <br />
      <br />

      Additionally, I have <b>3 years of freelancing experience with Chegg India Pvt. Ltd.</b>, providing academic support and assisting students in achieving their learning goals.
      <br />
      <br />

      I am passionate about helping candidates build strong ATS-friendly resumes, improve their job search strategy, and move closer to their career goals.
      <br />
      <br />

      <b>Thank You For Visiting My Portfolio!</b>
    </p>
  </div>
)
}

export default About;

import React, { useEffect } from 'react'
import './About.css'

const About = () => {

  useEffect(() => {
    document.title = 'My_Portfolio || About'
  }, [])


  return (
    <div class='container-443'>
      <p> Hi.. I'm <b>Latha form INDIA</b>
      <br />
      <br />
        I have great respect for your journey.
        <br />
        <br />

      Every <b>International student</b> carries a story of courage, sacrifice, and ambition. Choosing to leave home and build a future in a new country is never easy, and I truly admire the strength behind that decision.
       <br /><br />

        My mission is to support USA students through dedicated job marketing support for up to 2–3 months, helping them gain visibility, connect with the right opportunities, and stay confident throughout their job search journey.
        <br />
        <br />

        Your hard work creates success. I'm here to help your talent get noticed and move one step closer to the future you've worked so hard to build.
        <br />
        <br />

        Your dream. Your effort. Your success.<br /><br />
        <b>Thank You!!</b> <b>In Advance</b>


      </p>

    </div>
  )
}

export default About;


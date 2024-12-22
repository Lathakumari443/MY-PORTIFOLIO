import React, { useEffect } from 'react'
import './About.css'

const About = () => {

  useEffect(() => {
    document.title = 'My_Portfolio || About'
  }, [])


  return (
    <div class='container-443'>
      <p> Hi.. I'm <b>Latha Kumari</b><br /><br />
        I’m B.Tech graduate from JNTUK University.

        And I’m familiar with front-end technologies like..<b> HTML, CSS, JavaScript, and React.Js library. </b>
        And I’m handling <b>UI</b> part in my project.<br /><br />

        My greatest strength is...
        My ability to stay organized & manage multiple tasks at once and also I’m flexible to handle the change.
        <br />
        <br />

        Every organization needs to good, honest and also hard working people, <br />
        I'm also that kind of person.. If you give me a chance,
        <br />
        <br />

        I’m excited to contribute your team success. <br /><br />
        <b>Thank You!!</b> <b>In Advance</b>


      </p>

    </div>
  )
}

export default About;


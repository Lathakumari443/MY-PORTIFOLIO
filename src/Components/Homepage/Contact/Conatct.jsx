import React, {useEffect} from 'react'
import './Contact.css'


const Contact = () => {

  useEffect(() =>{
    document.title = 'My_Portfolio || Contact'
},[]) 

  return (
    <div >
       <section id="contact">
      <h2>Contact Me</h2>

      <div className="contact-card">
    
        <p>
          <strong>Email:</strong>
          <a href="mailto:matthelatha44@gmail.com">
            matthelatha44@gmail.com
          </a>
        </p>
        <p>
          <strong>WhatsApp:</strong>
          <a
            href="https://wa.me/917093495300"
            target="_blank"
            rel="noopener noreferrer"
          >
            +91 7093495300
          </a>
        </p>
          
        <p>
          <strong>YouTube:</strong>
          <a
            href="https://www.youtube.com/@itsmelatha443/shorts"
            target="_blank"
            rel="noopener noreferrer"
          >
            @itsmelatha443
          </a>
        </p>
     
      </div>
    </section>
    
    </div>
  )
}

export default Contact;


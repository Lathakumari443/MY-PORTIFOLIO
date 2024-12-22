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
        <p>Email: lathamatthe443@gmail.com</p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/lathakumari443/">linkedin.com/in/lathakumari443/</a></p>
    </section>

    
    </div>
  )
}

export default Contact;


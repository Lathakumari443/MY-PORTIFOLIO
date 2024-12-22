import React, {useEffect}from 'react'
import './Skills.css'


import htmlImage from '../images/html.jpeg';
import cssImage from '../images/css.jpeg';
import jsImage from '../images/js.jpeg';
import reactImage from '../images/react.jpeg'
import reactjsImage from '../images/reactjs.jpeg'


function Skills() {
  useEffect(() => {
    document.title = 'My_Portfolio || Skills';
  }, []);

  return (
    <>
      <div className="react-bg">
      <img src={reactjsImage} alt="react" />
      </div>

      <div className="container-2">
        <h1 style={{ textAlign: 'center', color: 'blueviolet' }}>
          <b>Frontend Technologies Skills</b>
        </h1>
        <br />
        <br />

        <div className="product">
          <div className="product-list">
          <img src={htmlImage} alt="html" />
            <h1>HTML</h1>
            <dl>
              <dt>
                <b>HTML...stands for Hypertext Markup Language</b>
              </dt>
              <dd>The main purpose of HTML is to create the <mark>Structure</mark> of the website.</dd>
            </dl>
          </div>

          <div className="product-list">
          <img src={cssImage} alt="css" />
            <h1>CSS</h1>
            <dl>
              <dt>
                <b>CSS... stands for Cascading Style Sheet</b>
              </dt>
              <dd>The main purpose of CSS is to improve the <mark>Layout & Design</mark> of the website using HTML tags.</dd>
            </dl>
          </div>

          <div className="product-list">
          <img src={jsImage} alt="js" />
            <h1>JavaScript</h1>
            <dl>
              <dt>
                <b>JavaScript... is a high-level, interpreted, dynamically-typed programming language.</b>
              </dt>
              <dd>The main purpose of JavaScript is to <mark>add interactivity and dynamic behavior</mark> to a website.</dd>
            </dl>
          </div>

          <div className="product-list">
          <img src={reactImage} alt="react" />
            <h1>React JS</h1>
            <dl>
              <dt>
                <b>React JS... is a JavaScript Library, not a Framework.</b>
              </dt>
              <dd>React JS is used to <mark>build fast, dynamic, and interactive user interfaces</mark> for web applications.</dd>
            </dl>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;

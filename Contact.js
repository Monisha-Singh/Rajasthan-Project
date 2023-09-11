import React from 'react';
import {Footer} from './Footer';
import {useTypewriter,Cursor} from 'react-simple-typewriter';

export const Contact = () => {
  const [text]= useTypewriter({
    words: ['example@gmail.com','example@gmail.com'],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 100,
    });
  return (
    <div>
    <div id="contact">
        <h3>Send us email</h3>
        <div className="contact-input">
            <input type="email" placeholder={text} />
            <a href="#" onClick={()=>{
              alert("Thank You for contacting us. We'll reach out to you asap.");
            }}>Contact</a>
        </div>
    </div>
    <Footer />
    </div>
  )
}

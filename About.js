import React from 'react';
import {Navbar} from './Navbar';
import {ACarousel} from './ACarousel';
import {Culturecarousel} from './Culturecarousel';
import {Jcarousel} from './Jcarousel';
import {ASlider} from './ASlider';
import {Credits} from './Credits';
import {HFooter} from './HFooter';

import {useTypewriter,Cursor} from 'react-simple-typewriter';

export const About = () => {
  const [text]= useTypewriter({
    words: ['OUTLOOK'],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 0,
    });
  const [text1]= useTypewriter({
    words: ['CULTURE OF RAJASTHAN','COLORS OF RAJASTHAN'],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 0,
    });
    const [text2]= useTypewriter({
      words: ['JUDICIAL SYSTEM'],
      loop: {},
      typeSpeed: 120,
      deleteSpeed: 0,
      });
  return (
    <div>
      <Navbar />
      <div className='cheader setm'>
          {text}
        </div>
      <div className='acarousel'><ACarousel /></div>
      <hr />
    <div className='cheader'>
          {text2}
        </div>
        <div className='acarousel'><Jcarousel /></div>
        <hr />
        <div className='cheader'>
          {text1}
        </div>
    <div className='acarousel'><Culturecarousel /></div>
  
    <ASlider />
        <Credits c1="Wikipedia-Culture" c2="Wikipedia-Court" c3="Unsplash" linking1="https://en.wikipedia.org/wiki/Culture_of_Rajasthan#" linking2="https://en.wikipedia.org/wiki/Rajasthan_High_Court" linking3="https://unsplash.com/"/>
        <HFooter />
    </div>
  )
}

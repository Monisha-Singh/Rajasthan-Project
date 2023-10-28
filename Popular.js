import React from 'react';
import { Pcarousel } from './Pcarousel';
import { Navbar } from './Navbar';
import { PCredits } from './PCredits';
import { Footer } from './Footer';
import { Comment } from './Comment';

import {useTypewriter,Cursor} from 'react-simple-typewriter';
import { PFeature } from './PFeature';
import { PFeature1 } from './PFeature1';
import { PFeature2 } from './PFeature2';
import { PFeature3 } from './PFeature3';
import { PFeature4 } from './PFeature4';
import { PFeature5 } from './PFeature5';
import { Comp } from './Comp';

export const Popular = () => {
  const [text3]= useTypewriter({
    words: ['POPULAR'],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 0,
    });
  return (
    <div>
      <Navbar />
      <div className='cheader setm'>
          {text3}
        </div>
        <div className='acarousel'><Pcarousel /></div>
         <Comp title={'The Deserts of Rajasthan'} /><hr />
        <PFeature />
        <Comp title={'Jaipur- The Pink City'}/><hr />
        <PFeature1 />
        <Comp title={'The Forts'}/><hr />
        <PFeature2 />
        <Comp title={'Art & Dance'}/><hr />
        <PFeature3 />
        <Comp title={'Rajasthani Cuisines'}/><hr />
        <PFeature4 />
        <Comp title={'Marketplace'}/><hr />
        <PFeature5 />
        <PCredits c1="Wikipedia" c2=" GoDigit" c3="Unsplash" c4="MapsofIndia" 
        c5="Holidify" c6="TravelTriangle"
        linking1="https://www.godigit.com/explore/popular/what-is-jaipur-famous-for" 
        linking2="https://www.indianrajputs.com/history/" 
        linking3="https://unsplash.com/"
        linking4="https://www.mapsofindia.com/maps/rajasthan/people-culture-festivals/art-and-dance.html"
        linking5="https://www.holidify.com/pages/shopping-in-rajasthan-1561.html" 
        linking6="https://traveltriangle.com/blog/shopping-in-jodhpur/"
        />
        <Comment />
        
    </div>
  )
}

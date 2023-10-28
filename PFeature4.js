import React from 'react';
import PFeatureBox from './PFeatureBox';
import historyimg from '../images/RK.jpg';
import presentimg from '../images/C.jpg';
import touristimg from '../images/p1.jpg';

export const PFeature4 = () => {
  return (
        <div id="features2">
        <div className='a-container2'>
        <PFeatureBox image={presentimg} title="Dal Bati Churma" link="https://en.wikipedia.org/wiki/Dal_bati_churma"
            content="Dal Bati Churma is the most popular dish in Rajasthani cuisine. It is made of three components of bati, dal, and churma. Dal is lentils, bati is a baked wheat ball, and churma is powdered sweetened cereal. " />
            <PFeatureBox image={historyimg} title=" Raj Kachori" link="https://en.m.wikipedia.org/wiki/File:Raj_Kachori_Haldiram.jpg"
            content="Raj Kachori is a spicy chaat commonly found in north india. It is a all time snack, rich in spices and multiple flavours ranging from sweet, spicy, a tinge of sour. This image in particular is Raj Kachori served in multi restaurant chain of Haldiram's restaurant." />
                 <PFeatureBox image={touristimg} title="Ghevar" link="https://en.wikipedia.org/wiki/Ghevar"
            content="Ghevar or Ghewar is a Rajasthani cuisine disc-shaped sweet made from ghee, flour, and sugar syrup. It is traditionally associated with the month of Shravan and the Teej and Raksha Bandhan festivals." />
               </div>
        </div>
  )
}

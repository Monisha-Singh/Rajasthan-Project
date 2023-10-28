import React from 'react';
import PFeatureBox from './PFeatureBox';
import historyimg from '../images/m2.jpeg';
import presentimg from '../images/m1.jpg';
import touristimg from '../images/R10.jpg';

export const PFeature5 = () => {
  return (
        <div id="features2">
        <div className='a-container2'>
        <PFeatureBox image={presentimg} title="Johari Bazaar" link="https://www.holidify.com/pages/shopping-in-rajasthan-1561.html"
            content="Johari is another name for jewellery, hence Johari Bazar is all about pretty Rajasthani jewellery. This market is known for intricate Kundan work and the traditional Meenakshi jewellery." />
        <PFeatureBox image={historyimg} title="Umaid Bhawan Palace Market" link="https://traveltriangle.com/blog/shopping-in-jodhpur/"
            content="This could be one of your favorite places to visit in Jodhpur for exquisite antiques, metal works, and designer furniture if you have a taste for classic splendor. Choose from handicrafts made of sequins, mirrors and beads, pottery, metal and marble works, brass and copperware, paintings, textiles, puppets, silver jewelry and more." />
            <PFeatureBox image={touristimg} title="Nai Sarak" link="https://traveltriangle.com/blog/shopping-in-jodhpur/"
            content="Your shopping jaunt is incomplete without buying the traditional tie and dye fabric (also known as bandhej or bandhani) from this busiest Jodhpur market. " />
               </div>
        </div>
  )
}

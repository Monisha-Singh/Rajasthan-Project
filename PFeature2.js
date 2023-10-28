import React from 'react';
import PFeatureBox from './PFeatureBox';
import historyimg from '../images/CF.jpg';
import presentimg from '../images/MF.jpg';
import touristimg from '../images/AF1.jpg';

export const PFeature2 = () => {
  return (
        <div id="features2">
        <div className='a-container2'>
        <PFeatureBox image={presentimg} title="Mehrangarh Fort" link="https://en.wikipedia.org/wiki/Mehrangarh"
            content="Mehrangarh Fort covers an area of 1,200 acres (486 hectares) in Jodhpur, Rajasthan, India. The complex is located on a hilltop around 122 metres" />
            <PFeatureBox image={historyimg} title="Chittor Fort" link="https://en.wikipedia.org/wiki/Hill_Forts_of_Rajasthan#Chittor_Fort"
            content="Chittor Fort, also known as Chittod Fort, is one of the largest forts in India. The fort was the capital of Mewar and is located in the present-day city of Chittorgarh." />
            <PFeatureBox image={touristimg} title="Amber Fort" link="https://en.wikipedia.org/wiki/Hill_Forts_of_Rajasthan#Amber_Fort"
            content="Amber Fort is a fort located in Amer. Located high on a hill, it is the principal tourist attraction in Jaipur. " />
               </div>
        </div>
  )
}

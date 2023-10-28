import React from 'react';
import PFeatureBox from './PFeatureBox';
import historyimg from '../images/1R.jpg';
import presentimg from '../images/4R.jpg';
import touristimg from '../images/R6.jpg';

export const PFeature = () => {
  return (
        <div id="features2">
        <div className='a-container2'>
            <PFeatureBox image={historyimg} title="The Thar Desert" link="https://en.wikipedia.org/wiki/Thar_Desert"
            content="The Thar Desert, also known as the Great Indian Desert, is an arid region in the north-western part of the Indian.." />
              <PFeatureBox image={touristimg} title="Jaisalmer" link="https://en.wikipedia.org/wiki/Jaisalmer"
            content="Jaisalmer means the Hill Fort of Jaisal. Jaisalmer is sometimes called the Golden City of India because of the yellow sandstone used throughout the architecture of both the fort and the town below, imbues both with a certain golden-yellow light." />
            <PFeatureBox image={presentimg} title="Churu" link="https://en.wikipedia.org/wiki/Churu,_Rajasthan"
            content="Churu is a city in the desert region of Rajasthan state of India. It is known as the gateway to the Thar Desert of Rajasthan. " />
          
               </div>
        </div>
  )
}

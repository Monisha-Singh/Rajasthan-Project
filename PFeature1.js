import React from 'react';
import PFeatureBox from './PFeatureBox';
import historyimg from '../images/R13.jpg';
import presentimg from '../images/CP.jpg';
import touristimg from '../images/RP.jpg';

export const PFeature1 = () => {
  return (
        <div id="features2">
        <div className='a-container2'>
            <PFeatureBox image={historyimg} title="Hawa Mahal" link="https://www.godigit.com/explore/popular/what-is-jaipur-famous-for"
            content="The other names of this Mahal are the Palace of the Winds or the Palace of the Breeze. Maharaja Sawai Pratap Singh constructed the Hawa Mahal." />
            <PFeatureBox image={touristimg} title="Rambagh Palace" link="https://www.godigit.com/explore/popular/what-is-jaipur-famous-for"
            content="Rambagh Palace, former home of the Maharaja of Jaipur and now a hotel by Taj are one of the top locations to see in Jaipur, an amazing attraction and a beautiful lodging location." />
            <PFeatureBox image={presentimg} title="City Palace" link="https://en.wikipedia.org/wiki/City_Palace,_Jaipur"
            content="The City Palace, Jaipur is a royal residence and former administrative headquarters of the rulers of the Jaipur State in Jaipur, Rajasthan." />
        
               </div>
        </div>
  )
}

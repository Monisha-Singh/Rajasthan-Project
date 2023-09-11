import React from 'react';
import FeatureBox from './FeatureBox';
import historyimg from '../images/R5.jpg';
import presentimg from '../images/R3.jpg';
import touristimg from '../images/R13.jpg';
import mapimg from '../images/R20.jpg';
import industryimg from '../images/R21.jpg';
import popularimg from '../images/R8.jpg';

import {Link} from 'react-router-dom';

export const Feature = () => {
  return (
        <div id="features">
        <div className='a-container'>
        <Link to='/history'><FeatureBox image={historyimg} title="HISTORY" content="The Land of Kings" /></Link>
        <Link to='/about'><FeatureBox image={presentimg} title="ABOUT" content="The Present of Rajasthan" /></Link>
        <Link to='/touristspots'><FeatureBox image={touristimg} title="TOURIST SPOTS" content="The Center of Tourism" /></Link>
        </div>
        <div className='a-container'>
        <FeatureBox image={mapimg} title="MAP/DIVISION" content="The inter-division of State" />
        <Link to='/industry'><FeatureBox image={industryimg} title="INDUSTRIES" content="The main Industries of the State" /></Link>
        <Link to='/popular'><FeatureBox image={popularimg} title="POPULAR" content="Popular Areas" /></Link>
        </div>
        </div>
  )
}

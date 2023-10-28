import React from 'react';
import PFeatureBox from './PFeatureBox';
import historyimg from '../images/wp.jpg';
import presentimg from '../images/g.jpg';
import touristimg from '../images/k.jpg';

export const PFeature3 = () => {
  return (
        <div id="features2">
        <div className='a-container2'>
        <PFeatureBox image={presentimg} title="Ghoomar" link="https://en.wikipedia.org/wiki/Ghoomar"
            content="Ghoomar or ghumar is a traditional folk dance of Rajasthan. It was the Bhil tribe who performed it to worship Goddess Saraswati which was later embraced by other Rajasthani communities." />
            <PFeatureBox image={historyimg} title="Wall Painting" link="https://www.mapsofindia.com/maps/rajasthan/people-culture-festivals/art-and-dance.html"
            content="Wall painting is an important aspect of Rajasthan’s life. Wall paintings form part of the religious rituals. On Holi and Diwali days etc. figures of goddesses are drawn on the walls of the households." />
            <PFeatureBox image={touristimg} title="Kathputli" link="https://en.wikipedia.org/wiki/Kathputli_(puppetry)"
            content="Kathputli is a string puppet theatre, native to Rajasthan, India, and is the most popular form of Indian puppetry. Being a string marionette, it is controlled by a single string that passes it from the top of the puppet over the puppeteers." />
               </div>
        </div>
  )
}

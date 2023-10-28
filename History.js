import React from 'react';
import Navbar from './Navbar';
import { Hcontent } from './Hcontent';
import { Cards } from './Cards';
import { HFooter } from './HFooter';

import himage from '../images/HS.png';
import cps from '../images/CPS.jpg';
import jsi from '../images/JSI.png';
import rrs from '../images/RRS.jpg';
import rani from '../images/Rani-Padmini.jpg';
import prc from '../images/PRC.jpg';
import mrp from '../images/MRP.jpg';



import { Presentation } from './Presentation';
import {Slider } from './Slider';
import {Credits} from './Credits';
import { Carousel } from 'bootstrap';

export const History = () => {
  return (
    <div>
    <div className='history'>
      <Navbar />
      <Slider />
      {/* CONTENT  */}

<Hcontent image={himage} title="Human Settlement" content="The history of human settlement in the west Indian state of Rajasthan dates back to about 5,000 years ago. Around 1400 BC, the Matsya tribe occupied the region. Parts of Rajsthan also belonged to the site of the Indus Valley Civilization. The early medieval period saw the rise of many Rajput kingdoms such as the Chauhans of Ajmer, Sisodias of Mewar, Gurjara-Pratihara and the Rathores of Marwar, as well as several Rajput clans such as the Gohil and the Shekhawats of Shekhawati. While Jat kingdoms include the Johiya of Jangaldesh, the Sinsinwars of Bharatpur State, as well as the Bamraulia clan and the Ranas of Dholpur.
The Gurjara-Pratihara Empire acted as a barrier for Arab invaders from the 8th to the 11th century, it was the power of the Pratihara army that effectively barred the progress of the Arabs beyond the confines of Sindh, their only conquest for nearly 300 years." btn="Explore more" linking="https://en.wikipedia.org/wiki/History_of_Rajasthan"/>
    

<Hcontent image={cps} title="Chhatrapati Shivaji" content="Shivaji (Shivaji Shahaji Bhosale;  c. 19 February 1630 – 3 April 1680), also known as Chhatrapati Shivaji, was an Indian ruler and a member of the Bhonsle Maratha clan. Shivaji carved out his own independent kingdom from the declining Adilshahi sultanate of Bijapur which formed the genesis of the Maratha Empire. In 1674, he was formally crowned the Chhatrapati of his realm at Raigad Fort.Over the course of his life, Shivaji engaged in both alliances and hostilities with the Mughal Empire, the Sultanate of Golkonda, Sultanate of Bijapur and the European colonial powers. Shivaji used the difficult terrain of Western Ghats to his advantage. He captured and built new Hill Forts in Sahyadri Mountain range which proved very difficult for invading forces to capture, particularly Mughal armies. Shivaji perfected and used guerilla warfare to great success against much larger armies of Mughals and Deccan Sultanates. Shivaji built a navy which maintained supremacy over the Konkan coast, and kept the Royal Navy in check.
" btn="Explore more" linking="https://www.indianrajputs.com/famous/Amar-Singh-Rathore.php"/>

<Hcontent image={jsi} title="Jai Singh I" content="Mirza Raja Jai Singh (15 July 1611 – 28 August 1667) was a senior general (Mirza Raja) of the Mughal Empire and a ruler of the kingdom of Amber (later called Jaipur). His father was Maha Singh the Raja of Garha, and his mother was Damayanti, a princess of Mewar.
The great Raja Man Singh of Amber had several sons, the most capable of whom were the eldest Jagat Singh and Bhau Singh. Jagat predeceased his father and left behind a son Maha Singh. By the Hindu custom of primogeniture, on Man Singh's death this grandson Maha Singh should have been the next Raja of Amber. However the Mughal Emperor Jehangir declared Maha's uncle Bhau Singh to be more experienced and capable and made him Raja in 1614 with the rank of a commander of 4000 (cavalry).
At the same time, to ensure that Maha Singh would not take to arms to enforce his hereditary claim, he was also made a commander of 1000 and was given the Central Indian district of Garha as his estate. Sometime later he too received the title of Raja. While serving in the Deccan wars, Maha Singh died of hard drinking in 1617. His uncle Bhau Singh died childless, and of the same cause, in 1621.
" btn="Explore more" linking="https://www.indianrajputs.com/famous/Jai-Singh-I-Amber.php"/>

<Hcontent image={mrp} title="Maharana Pratap" content="Maharana Pratap or Pratap Singh (May 9, 1540 – January 19, 1597) was a Hindu Rajput ruler of Mewar, a region in north-western India in the present day state of Rajasthan. He belonged to the Sisodiya sept of Rajputs. In popular Indian culture, Pratap is considered to exemplify the qualities like bravery and chivalry to which Rajputs aspire, especially in context of his opposition to the Mughal emperor Akbar. The struggle between Rajput confederacy led by Pratap Singh, and the Mughal Empire under Akbar, has often been characterised as a struggle between Hindus and the invading Muslims.In 1568, during the reign of Udai Singh II, Chittor was conquered by the Mughal Emperor Akbar after the third Jauhar at Chittor. However, Udai Singh and the royal family of Mewar escaped before the capture of the fort and moved to the foothills of the Aravalli Range where Udai Singh founded the city of Udaipur in 1559. Rana Udai Singh had wished Jagmal, his son, from her favorite - the Bhatiyani queen to succeed him.
" btn="Explore more" linking="https://en.wikipedia.org/wiki/Maharana_Pratap"/>

<Hcontent image={prc} title="Prithviraj Chauhan" content="Prithvi Raj III, commonly known as Prithviraj Chauhan (1149-1192 CE), was a king of the Hindu Chauhan dynasty, who ruled the kingdoms of Ajmer and Delhi in northern India during the latter half of the 12th century.
Prithviraj Chauhan belonged to the Rajput Chauhan clan and was the last independent Hindu king, before Hemu, to sit upon the throne of Delhi. He succeeded to the throne in 1169 CE at the age of 20, and ruled from the twin capitals of Ajmer and Delhi which he received from his maternal grandfather Arkpal or Anangpal III of the Tomara dynasty in Delhi. He controlled much of present-day Rajasthan and Haryana, and unified the Rajputs against Muslim invasions. His elopement in 1175 with Samyukta (Sanyogita), the daughter of Jai Chandra Rathod, the Gahadvala king of Kannauj, is a popular romantic tale in India, and is one of the subjects of the Prithviraj Raso, an epic poem composed by Chauhan's court poet and friend, Chand Bardai.Chauhan defeated the Muslim ruler Shahabuddin Muhammad Ghori in the First Battle of Tarain in 1191 and set him free as a gesture of mercy. Ghauri attacked for a second time the next year, and Chauhan was defeated and captured at the Second Battle of Tarain (1192). Ghori took Chauhan to Ghazni and killed him.
" btn="Explore more" linking="https://www.indianrajputs.com/famous/Prithviraj-Chauhan.php"/>

<Hcontent image={rrs} title="Rawal Ratan Singh" content="Ratnasimha (IAST: Ratna-Siṃha, r. c. 1302–03 CE) was a ruler of the Medapata (Mewar) kingdom in present-day Rajasthan, India. He belonged to the Rawal branch of the Guhila dynasty, which ruled from the Chitrakuta fort (modern Chittorgarh). The last ruler of this branch, he was defeated by Alauddin Khalji during the Siege of Chittorgarh in 1303 CE. The Rajasthani legends mention him as the Rajput ruler Rawal Ratan Singh. A fictionalized version of him appears as Ratan Sen in Malik Muhammad Jayasi's Padmavat. According to this poem, Alauddin Khalji attacked Chittorgarh to obtain his beautiful wife Rani Padmini; Alauddin captured the fort after Ratan Sen died in a combat with king Devpal of Kumbhalner; subsequently, Padmini and other women committed Jauhar to protect their honour. The historicity of this legend is disputed.
" btn="Explore more" linking="https://en.wikipedia.org/wiki/Ratnasimha"/>

<Hcontent image={rani} title="Rani Padmini " content="Padmini or Padmavati spent her life under the care of her father Gandharvsena and mother Champavati. Padmini had a talking parrot named “Hiramani”. Her father arranged a swayamvara to wed his beautiful daughter to an able man and invited all the Hindu kings and Rajputs (request to marry her by showing their eligibility). King Rawal Ratan Singh of Chittor hearing of Padmini's attributes went to the swayamvara regardless of having multiple wives. There he won her hand by defeating another eligible king, Malkhan Singh. He returned to Chittor with his beautiful queen Padmini.
In the 12th and 13th centuries, the Sultanate of Delhi, set up by Muslim Turkic nomadic invaders, was growing in power. The Sultans made repeated attacks on Mewar. It is famously said and believed that Alauddin Khilji attacked Chittorgarh to have Maharani Padmini all for himself. This story is based on the poem Padmavat by Malik Muhammmad Jayasi, written in Awadhi in 1540. However, some historians do not agree with this story and claim it to be a legend or a famous folklore.
" btn="Explore more" linking="https://www.indianrajputs.com/famous/Rani-Padmini.php"/>

</div>
<Presentation />
<Cards />
<Credits c1="Wikipedia" c2="Indian Rajputs" c3="Unsplash" linking1="https://en.wikipedia.org/wiki/History_of_Rajasthan#:~:text=The%20history%20of%20human%20settlement,of%20the%20Indus%20Valley%20Civilization." linking2="https://www.indianrajputs.com/history/" linking3="https://unsplash.com/"/>
<HFooter />
    </div>
  )
}

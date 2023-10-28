import React,{useState} from 'react'
import {ACarouselItem} from './ACarouselItem';

export const Culturecarousel = () => {
    const [activeIndex,setActiveIndex]= useState(0);

    const items= [
        {   title: "Culture of Rajasthan",
            description: `The culture of Rajasthan includes many artistic traditions that reflect the ancient Indian way of life. Rajasthan is also called the "Land of Kings". It has many tourist attractions and facilities for tourists. This historical state of India attracts tourists and vacationers with its rich culture, tradition, heritage, and monuments. It also has some wildlife sanctuaries and national parks.
            More than 70% of Rajasthan is vegetarian, which makes it the most vegetarian state in India.` ,
            image: require("../images/R16.jpg") ,
        },
        {   title: "Arts & Crafts",
            description: `Rajasthan is famous for textiles, semi-precious stones, and handicrafts, as well as for its traditional and colorful commonly balladsart. Rajasthani furniture is known for its intricate carvings and bright colours. Block prints, tie and dye prints, Bagaru prints, Sanganer prints and Zari embroidery are famous. Rajasthan is traditionally strong in textile products, handicrafts, gems and jewellery, dimensional stones, agro and food products. The top five export items, which contributed to the two-thirds of exports from the state of Rajasthan are textiles (including ready-made garments) gems & jewellery, engineering goods, chemical and allied products. The blue pottery of Jaipur is particularly noted. To attract investment for the revival of traditional arts and crafts as well as the promotion of cultural heritage, the first handicraft policy has been released in Rajasthan.[3].Rajasthan has a large number of raw materials namely marble, wood and leather to cash on the great potential for the development of handicrafts.` ,
            image: require("../images/AAC.jpg") ,
        },
        {   title: "Kathputli",
            description: `Kathputli, a traditional string puppet performance native to Rajasthani, is a key feature of village fairs, religious festivals, and social gatherings in Rajasthan. Some scholars believe the art of Kathputli to be more than thousands of years old.Mentions of Kathputli have been found in Rajasthani folk tales, ballads, and even folk songs. Similar rod puppets can be also found in West Bengal.
It is believed that Kathputli began as a string marionette art invented by the tribal Rajasthani Bhat community 1500 years ago. Rajasthani kings and nobles encouraged the art of Kathputli; over the last 500 years, Kathputli was supported by a system of patronage through kings and well-off families. Kathputli lovers would support artists in return for the artists singing praises of the patrons’ ancestors. `,
            image: require("../images/R8.jpg") ,
        },
        {   title: "Rajasthani Cuisine",
            description: `Rajasthani cuisine is the cuisine of the Rajasthan region in North West India. It was influenced by various factors like the warlike lifestyles of its inhabitants, the availability of ingredients in an arid region and by Hindu temple traditions of sampradayas like Pushtimarg and Ramanandi. Food that could last for several days and could be eaten without heating was preferred. Scarcity of water and fresh green vegetables have all had their effect on the cooking. Signature Rajasthani dishes include Dal Baati Churma, Panchratna Dal, Papad ro Saag, Ker Sangri,[3] Gatte ro Saag. It is also known for its snacks like Bikaneri bhujia, Mirchi bada and Kanda kachauri. Other famous dishes include Dal Baati, malaidar special lassi (lassi) and Lashun ki chutney (hot garlic paste), Mawa lassi from Jodhpur, Alwar ka mawa, Malpauas from Pushkar and rasgulla from Bikaner, "paniya"and "gheriya" from Mewar.` ,
            image: require("../images/RC.jpg") ,
        },
        {   title: "Architecture",
            description: `Rajasthan is famous for its many historical forts, temples, and palaces (havelis), all of which are important sources of tourism in the state. While there are many Gupta and post-Gupta era temples in Rajasthan, after the 7th century, the architecture evolved into a new form called the Gurjara-Pratihara Style. Some famous temples of this style are temples at Osian, the Kumbhshyama temple of Chittor, temples at Baroli, the Somesvara temple at Kiradu, the Harshnath temple in Sikar, and the Sahasra Bahu temple of Nagda.
            From the 10th century to the 13th century, a new style of temple architecture was developed, known as the Solanki style or Maru-Gurjara style. The Samadhishwar temple at Chittor and the ruined temple at Chandravati are examples of this style.
            This period was also a golden period for Jain temples in Rajasthan.` ,
            image: require("../images/R13.jpg") ,
        },
    ];

    const updateIndex= (newIndex)=>{
        if(newIndex<0)
         newIndex=0;
        else if(newIndex>=items.length){
            newIndex= items.length-1;
        }
        setActiveIndex(newIndex);
    }
  return (
    <div className='aboutcarousel'>
        <div className='inner' style={{transform: `translate(-${activeIndex*100}%)`}}>
            {items.map((item)=>{
                return <ACarouselItem item={item} width={"100%"} />;
            })}
        </div>

    <div className='carousel-buttons'>
        <button onClick={()=> {
            updateIndex(activeIndex-1)
        }} className='button-arrow'>
            <span className="material-symbols-outlined">
arrow_back_ios
</span></button>
<div className='indicators'>
{items.map((item,index)=>{
    return(
        <button onClick={()=> {
            updateIndex(activeIndex)
        }} className='indicator-buttons'>
            <span className={`material-symbols-outlined ${index===activeIndex? "indicator-symbol-active":"indicator-symbol"}`}>
radio_button_checked
</span>
        </button>
    )
})}
</div>
        <button onClick={()=> {
            updateIndex(activeIndex+1)
        }} className='button-arrow'>
            <span class="material-symbols-outlined">arrow_forward_ios</span>
        </button>
    </div>
    </div>
  )
};

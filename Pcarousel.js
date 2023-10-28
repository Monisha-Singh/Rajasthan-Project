import React,{useState} from 'react'
import {PcarouselItem} from './PcarouselItem';

export const Pcarousel = () => {
    const [activeIndex,setActiveIndex]= useState(0);

    const items= [
        {   title: "THE DESERTS OF RAJASTHAN",
            description: `The culture of Rajasthan includes many artistic traditions that reflect the ancient Indian way of life. Rajasthan is also called the "Land of Kings". It has many tourist attractions and facilities for tourists. This historical state of India attracts tourists and vacationers with its rich culture, tradition, heritage, and monuments. It also has some wildlife sanctuaries and national parks.
            More than 70% of Rajasthan is vegetarian, which makes it the most vegetarian state in India.` ,
            image: require("../images/R3.jpg") ,
        },
        {   title: "JAIPUR- THE PINK CITY",
            description: `Rajasthan is famous for textiles, semi-precious stones, and handicrafts, as well as for its traditional and colorful commonly balladsart. Rajasthani furniture is known for its intricate carvings and bright colours. Block prints, tie and dye prints, Bagaru prints, Sanganer prints and Zari embroidery are famous. Rajasthan is traditionally strong in textile products, handicrafts, gems and jewellery, dimensional stones, agro and food products. The top five export items, which contributed to the two-thirds of exports from the state of Rajasthan are textiles (including ready-made garments) gems & jewellery, engineering goods, chemical and allied products. The blue pottery of Jaipur is particularly noted. To attract investment for the revival of traditional arts and crafts as well as the promotion of cultural heritage, the first handicraft policy has been released in Rajasthan.[3].Rajasthan has a large number of raw materials namely marble, wood and leather to cash on the great potential for the development of handicrafts.` ,
            image: require("../images/J.jpg") ,
        },
        {   title: "THE FORTS",
        description: `Hill Forts of Rajasthan are six forts, spread across Rajasthan state in northern India. They have been clustered as a series and designated as a UNESCO World Heritage Site in 2013. The hill forts series include - Chittor Fort at Chittorgarh, Kumbhalgarh Fort at Rajsamand, Ranthambore Fort at Sawai Madhopur, Gagron Fort at Jhalawar, Amer Fort at Jaipur and Jaisalmer Fort at Jaisalmer. Rajasthan has over one hundred fortifications on hills and mountainous terrain. The "Hill Forts of Rajasthan" was initially submitted to the UNESCO as a serial property formed by five Rajput forts in the Aravalli Range and were built and enhanced between the 5th and 18th centuries CE by several Rajput kings of different kingdoms. The Mehrangarh Fort at Jodhpur, is a hill fort but is not recognised by UNESCO as a heritage site.`,  
        image: require("../images/3R.jpg") ,
        },
        {   title: "ART & DANCE",
            description: `Rajasthan Music And Dance are part of the state’s lifestyle. A highly cultured civilization that carries on a difficult life and braves the cruel weather gods, the Rajasthanis keep their spirits alive by singing lilting numbers and dancing highly spirited saltations.
            The brilliant flash of colors and the vibrant performing arts of the state leave you spell bound.
            The high pitched rustic melodies and pulsating music transports you to the golden sandy landscapes of the state.`, 
            image: require("../images/R8.jpg") ,
           },
        {   title: "RAJASTHANI CUISINES",
        description: `Rajasthani cuisine is the cuisine of the Rajasthan region in North West India. It was influenced by various factors like the warlike lifestyles of its inhabitants, the availability of ingredients in an arid region and by Hindu temple traditions of sampradayas like Pushtimarg and Ramanandi. Food that could last for several days and could be eaten without heating was preferred. Scarcity of water and fresh green vegetables have all had their effect on the cooking. Signature Rajasthani dishes include Dal Baati Churma, Panchratna Dal, Papad ro Saag, Ker Sangri,[3] Gatte ro Saag. It is also known for its snacks like Bikaneri bhujia, Mirchi bada and Kanda kachauri. Other famous dishes include Dal Baati, malaidar special lassi (lassi) and Lashun ki chutney (hot garlic paste), Mawa lassi from Jodhpur, Alwar ka mawa, Malpauas from Pushkar and rasgulla from Bikaner, "paniya"and "gheriya" from Mewar.` ,
        image: require("../images/p3.jpg") ,
        },
        {   title: "MARKETPLACE",
            description: `Rajasthan, the Land of the Kings is a heartthrob for travellers with a taste for traditional and antique stuff. Shopping is one of the best things to do during a Rajasthan trip. Tourists across the globe are getting gaga over these charming markets with legendary past. Right from stunning pottery to vibrant textiles, multi-coloured jootis to vibrant paintings, Rajasthan markets has everything for everyone. If you are planning a trip to Rajasthan and want to get a glimpse of the best markets, then continue to read on to know more about these places. This list will help you to decide the top picks and from where you can get it.`,
            image: require("../images/Market.jpg") ,
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
                return <PcarouselItem item={item} width={"100%"} />;
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

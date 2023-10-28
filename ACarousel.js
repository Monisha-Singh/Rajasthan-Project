import React,{useState} from 'react'
import {ACarouselItem} from './ACarouselItem';

export const ACarousel = () => {
    const [activeIndex,setActiveIndex]= useState(0);

    const items= [
        {   title: "Chief Minister",
            description: "Ashok Gehlot (born 3 May 1951) is an Indian politician serving as the 25th and current Chief Minister of Rajasthan since 2018.[3] He held this position from December 1998 to 2003, and from 2008 to 2013.[1] He represents Sardarpura constituency of Jodhpur as Member of Legislative Assembly of Rajasthan since 1999. He was a Member of Parliament, Lok Sabha from Jodhpur from 1991 to 1999 and from 1980 to 1989 and Union Minister of State (Independent Charge) for Textile from 1991 to 1993, Tourism and Civil aviation from 1984 to 1984 and Deputy Union minister for Sports from 1984 to 1984. He was also a national General secretary of Congress Party." ,
            image: require("../images/RCM.jpg") ,
        },
        {   title: "Jaipur Metro Expansion",
            description: `Phase 1C of the Jaipur Metros development from Badi Chaupar to Transport Nagar and Phase 1Ds extension from Mansarovar to the intersection of Ajmer Road were both announced by CM Gehlot for the years 2022–2023
The Rajasthani government has approved 204.81 crore for the Jaipur Metro Expansion.` ,
            image: require("../images/JME.jpg") ,
        },
        {   title: "Rajasthan High Court",
            description: `The Rajasthan High Court is the High Court of the state of Rajasthan. It was established on 29 August 1949 under the Rajasthan High Court Ordinance, 1949.The seat of the court is at Jodhpur. The court has a sanctioned judge strength of 50.
            View of the Rajasthan High Court, Sardar museum in Umaid Park and upper right is Jodhpur fort in 1960.
            There were five High Courts functioning in the various units of the States - at Jodhpur, Jaipur and Bikaner, the High Courts of former Rajasthan and Matsya Union, before unification of the Rajasthan. The Rajasthan High Court Ordinance, 1949 abolished these different jurisdictions and provided for a single High Court for the entire State.`,
            image: require("../images/RHC.jpg") ,
        },
        {   title: "UDAAN Scheme",
            description: `The Rajasthan government has launched a women-friendly project, "I am Udaan".Costing Rs 200 crore, under this scheme each girl and woman in the state will receive free sanitary napkins. Under the first phase of the project launched on December 19 last year, 26 lakh girls will be benefited as 12 napkins each month will be provided to each girl in senior secondary, secondary and higher secondary schools. In the recently released National Family Health Survey 5, 62 percent of the women are unaware of period hygiene and 24 percent of adolescent girl students mark their absence from school during periods. The survey also reveals that only 57 percent of women in the country use sanitary napkins.` ,
            image: require("../images/US.jpg") ,
        },
        {   title: "Rajasthan State Sports Council",
            description: `Rajasthan State Sports Council is the apex body in Rajasthan at the State level to look after the development of sports activities and providing coaching to the players of the state. It was set up in 1957 by the Government of Rajasthan.and it is registered as a society under Rajasthan state society act, 1958. Mr. V.G. Kanetkar was the first president of the council. Organisation---> Governor of Rajasthan is the chief patron of RSSC. Chief minister of Rajasthan is deputy patron of RSSC. The chairman of the council is the chief executive. Apart from the chairman the council also include vice president, Treasurer and 12 members nominated by the state government.` ,
            image: require("../images/RSSC.jpg") ,
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

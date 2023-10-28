import React,{useState} from 'react'
import {ACarouselItem} from './ACarouselItem';

export const Jcarousel = () => {
    const [activeIndex,setActiveIndex]= useState(0);

    const items= [
        {   title: "Rajasthan High Court",
            description: `The Rajasthan High Court is the High Court of the state of Rajasthan. It was established on 29 August 1949 under the Rajasthan High Court Ordinance, 1949.
The seat of the court is at Jodhpur. The court has a sanctioned judge strength of 50.`,
          image: require("../images/RHC.jpg") ,
        },
        {   title: "History",
            description: `After independence the erstwhile princely States of Rajputana were integrated into the State of Rajasthan. Before inauguration of State of Rajasthan these princely States had their own High Courts and subordinate Judicial setup. A committee consisting of Shri B.R.Patel, Lt. Col. T.C.Puri and Shri S.P.Sinha recommended that Jaipur should be made capital of the new State and the High Court should be located at Jodhpur. There were five High Courts functioning in the various units of the States - at Jodhpur, Jaipur and Bikaner, the High Courts of former Rajasthan and Matsya Union, before unification of the Rajasthan. The Rajasthan High Court Ordinance, 1949 abolished these different jurisdictions and provided for a single High Court for the entire State. The High Court of Rajasthan was founded in 1949 at Jaipur, and was inaugurated by the Rajpramukh, Maharaja Sawai Man Singh on 29 August 1949, later on after complete integration of Rajasthan in 1956 it was moved at Jodhpur with recommendation of the Satyanarayan Rao committee.` ,
            image: require("../images/HC1.jpg") ,
        },
        {   title: "Present",
            description: `The first Chief Justice was Kamala Kant Verma. A bench was formed at Jaipur on 31 January 1977 under sub-section (2) of Section 51 of the States Reorganisation Act, 1956 which was dissolved in 1958. Currently the sanctioned strength of the judges is 50 and actual strength is 34.
            The highcourt was shifted to a new premises on outskirts of Jodhpur from the city centre in 2019. The president of India inaugurated the newly constructed building  Rajasthan High Court Bar Association, Jaipur is a registered society of the Advocates practicing at Jaipur Bench of Rajasthan High Court. The body elects its office bearers through direct election every year.`,
            image: require("../images/RHC.jpg") ,
        },
        {   title: "Statue of Manu",
            description: `On March 3, 1989, the Rajasthan Judicial Officers Association sponsored by the Lions Club had installed a Manu idol in front of the lawn of the high court with the permission of the high court. The 11-feet-tall sculpture of Manu has courted controversy since its installation in the premises of the Jaipur bench of the Rajasthan High Court in February 1989.`,
            image: require("../images/M.jpg") ,
        },
        {   title: "Augustine George Masih",
            description: `Augustine George Masih is an Indian Judge. Presently, he is Chief Justice of Rajasthan High Court. He is a former Judge of Punjab and Haryana High Court. Born on March 12, 1963 at Ropar (Punjab). After initial schooling in St.Mary's Convent School, Kasauli (H.P.), completed school education from Saifuddin Tahir High School, Aligarh. Graduated in Science (Honours) and then LL.B. (Honours) from Aligarh Muslim University at Aligarh. He was nominated by	Dhananjaya Y. Chandrachud
            & was appointed by	Droupadi Murmu.`,
            image: require("../images/CJ.jpg") ,
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

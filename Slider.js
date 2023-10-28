import React,{useState} from 'react';

import { SliderItem } from './SliderItem';

export const Slider = () => {
  const [activeIndex,setActiveIndex]= useState(0);

    const items= [
        {
          image: require("../images/R5.jpg") ,
        },
        {   image: require("../images/R16.jpg") ,
        },
        {      image: require("../images/R4.jpg") ,
        },
        {     image: require("../images/R2.jpg") ,
        },
        {   
            image: require("../images/R11.jpg") ,
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
    <div className='aboutcarousel2'>
        <div className='inner' style={{transform: `translate(-${activeIndex*100}%)`}}>
            {items.map((item)=>{
                return <SliderItem item={item} width={"100%"} />;
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


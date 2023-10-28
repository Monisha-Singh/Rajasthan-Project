import React from 'react'
import { Feature } from './Feature';

export const SliderItem = ({item,width}) => {
  return (
    <div className='carousel-itemabout2' style={{ width: width }}>
        {/* <div></div> */}
        <img className='slider-img' src={item.image} />
        {/* <img className='carousel-img' src={item.image} /> */}
        {/* <img className='carousel-img' src={item.image} /> */}
        {/* <div className='carousel-item-text'><h4 className='carouseltitle'>{item.title}</h4>{item.description}</div> */}
    </div>
  );
};

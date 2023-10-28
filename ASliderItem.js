import React from 'react'

export const ASliderItem = ({item,width}) => {
  return (
    <div className='carousel-itemabout3' style={{ width: width }}>
        {/* <div></div> */}
        <img className='slider-img' src={item.image} />
        {/* <img className='carousel-img' src={item.image} /> */}
        {/* <img className='carousel-img' src={item.image} /> */}
        {/* <div className='carousel-item-text'><h4 className='carouseltitle'>{item.title}</h4>{item.description}</div> */}
    </div>
  );
};

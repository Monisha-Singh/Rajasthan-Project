import React from 'react'

export const PcarouselItem = ({item,width}) => {
  return (
    <div className='carousel-itemabout' style={{ width: width }}>
        {/* <div></div> */}
        <img className='pcarousel-img' src={item.image} />
        <div className='pcarousel-item-text'><h4 className='pcarouseltitle'>{item.title}</h4>{item.description}</div>       
    </div>
  );
};

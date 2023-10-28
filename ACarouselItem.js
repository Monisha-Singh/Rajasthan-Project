import React from 'react'

export const ACarouselItem = ({item,width}) => {
  return (
    <div className='carousel-itemabout' style={{ width: width }}>
        {/* <div></div> */}
        <img className='carousel-img' src={item.image} />
        <div className='carousel-item-text'><h4 className='carouseltitle'>{item.title}</h4>{item.description}</div>
    </div>
  );
};

import React from 'react';

export const IFeatureBox = (props) => {
  return (
    <div className='a-box1'>
        <div className='a-b-img1'>
            <img src={props.image}/>
        </div>
        <div className='s-b-text1'>
            <h4><a href="#">{props.title}</a></h4>
            <p>{props.content}
            </p>
        </div>
    </div>
  )
}

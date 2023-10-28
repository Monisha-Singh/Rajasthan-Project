import React from 'react'

function PFeatureBox(props) {
  return (
    <div className='a-box'>
        <div className='a-b-img'>
            <img src={props.image}/>
        </div>
        <div className='s-b-text'>
            <h4><a href={props.link}>{props.title}</a></h4>
            <p>{props.content}
            </p>
        </div>
    </div>
  )
}

export default PFeatureBox
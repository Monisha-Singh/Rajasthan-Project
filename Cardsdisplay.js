import React from 'react'

function Cardsdisplay(props) {
  return (
    <div>
        <div className='a-box'>
        <div className='a-b-img'>
            <img src={props.image}/>
        </div>
        <div className='s-b-text'>
            <h4><a href={props.linking}>{props.title}</a></h4>
            <p>{props.content}
            </p>
        </div>
    </div>
    </div>
  )
}

export default Cardsdisplay

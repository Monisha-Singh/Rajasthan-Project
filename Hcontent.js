import React from 'react'

export const Hcontent = (props) => {
  return (
    <div>
        <div id="about">
            <div className='about-image'>
                <img src={props.image} alt=""></img>
            </div>
            <div className='about-text'>
                <h2>{props.title}</h2>
                <p>{props.content}</p>
                <button><a href={props.linking}>{props.btn}</a></button>
            </div>
            </div> 
    </div>
  )
}

import React from 'react'
import {useTypewriter,Cursor} from 'react-simple-typewriter';

export const PCredits = (props) => {
    const [text]= useTypewriter({
  words: ['CREDITS-','CREDITS-'],
  loop: {},
  typeSpeed: 120,
  deleteSpeed: 0,
  });
      
  return (
    <div className="credits">
        <div className='creditscontent'>
         <h6>{text}</h6>
         <ul>
            <li><a href={props.linking1}>{props.c1}</a></li>
            <li><a href={props.linking2}>{props.c2}</a></li>
            <li><a href={props.linking3}>{props.c3}</a></li>
            <li><a href={props.linking4}>{props.c4}</a></li>
            <li><a href={props.linking5}>{props.c5}</a></li>
            <li><a href={props.linking6}>{props.c6}</a></li>
         </ul>
         </div>
    </div>
  )
}

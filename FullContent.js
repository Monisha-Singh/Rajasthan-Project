import React, { useState } from 'react'
import {Comp1} from './Comp1';
import {IFeatureBox} from './IFeatureBox';

import Content from  "./Content";

import 'bootstrap/dist/css/bootstrap.min.css';

export const FullContent = () => {

const [items,setItems]= useState(Content);

const filterItem= (categ)=>{
    const updatedItems= Content.filter((currElem)=>{
        return currElem.category===categ;
    });
    setItems(updatedItems);
}

  return (
    <div className='setm'>
      <Comp1 title={'The Industries of Rajasthan'} />
      <hr />
      <div>
        <div className='d-flex justify-content-around'>
             <button className='btn btn-warning' onClick={()=> setItems(Content)}>All</button>
             <button className='btn btn-warning' onClick={()=> filterItem('ti')}>Textile Industry</button>
             <button className='btn btn-warning' onClick={()=> filterItem('ci')}>Cement Industry</button>
             <button className='btn btn-warning' onClick={()=> filterItem('gj')}>Gems & Jewellery</button>
             <button className='btn btn-warning' onClick={()=> filterItem('ai')}>Agro-based Industry</button>
             <button className='btn btn-warning' onClick={()=> filterItem('th')}>Tourism & Hotel</button>
        </div>
      </div>
      
      {
        items.map((elem)=>{
            const {image1,image2,image3,title1,title2,title3,content1,content2,content3}=  elem;
            return(
        <div id="features1">
        <div className='a-container1'>
        <IFeatureBox image={image1} title={title1} content={content1} />
        <IFeatureBox image={image2} title={title2} content={content2} />
        <IFeatureBox image={image3} title={title3} content={content3} />
        </div>
        </div>
            )
        })
      }

        

    </div>
  )
}

import React,{useState} from 'react';
import logo from '../images/RajasthanLogo.jpg';
import {Link} from 'react-router-dom';

export const Navbar = () => {

const [nav,setnav]= useState(false);
const changeBackground= ()=>{
  if(window.scrollY>=50){
    setnav(true);
  }
  else{
    setnav(false);
  }
}

window.addEventListener('scroll',changeBackground);

  return (
    <nav className={nav?'nav-active':'nav'}>
    <a href="#" className="logo">
      <img src= {logo} alt=''/>
    </a>
    <input type='checkbox' className='menu-btn' id='menu-btn'/>
    <label className='menu-icon' for='menu-btn'>
      <span className='nav-icon'></span>
    </label>
    <ul className='menu'>
      <li><Link to='/'>HOME</Link></li>
      <li><Link to='/history'>HISTORY</Link></li>
      <li><Link to='/about'>ABOUT</Link></li>
      <li><Link to='/touristspots'>TOURIST SPOTS</Link></li>
      <li><Link to='/industry'>INDUSTRY</Link></li>
      <li><Link to='/popular'>POPULAR</Link></li>
    </ul>
    </nav>
  )
}
export default Navbar;
import React from 'react';
import Navbar from './Navbar';
import {useTypewriter,Cursor} from 'react-simple-typewriter';

export const Header = () => {

  const [text]= useTypewriter({
  words: ['पधारो म्हारे देश','पधारो म्हारे देश'],
  loop: {},
  typeSpeed: 120,
  deleteSpeed: 0,
  });

  return (
    <div id="main">
        <Navbar />
    <div className='containr'>
    {/* <h1 className="welcome">पधारो म्हारे देश</h1> */}
    <h1 className="welcome">{text}</h1>
    </div>
        <div className='name'>
          <h3><span>Welcome to the 'The Incredible State of India'</span></h3>
          <p className='details'>The 'Land of Kings' with rich history & spellbinding stories</p>
        </div>
    </div>
  )
}
export default Header;
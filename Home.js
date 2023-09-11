import React from 'react';
import {Header} from './Header';
import {Feature} from './Feature';
import {Contact} from './Contact';

export const Home = () => {
  return (
    <div>
     {/* for Navbar & Welcome */}
     <Header />
     <Feature />
     <Contact />
    </div>

  )
}

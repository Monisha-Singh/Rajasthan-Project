import React from 'react';
import { Navbar } from './Navbar';
import { FullContent } from './FullContent';
import { Footer } from './Footer';
import { Credits } from './Credits';
export const Industry = () => {
  return (
    <div>
<Navbar />
<FullContent />
<Credits c1="Wikipedia" c2="Unsplash" linking1="https://en.wikipedia.org/wiki/History_of_Rajasthan#:~:text=The%20history%20of%20human%20settlement,of%20the%20Indus%20Valley%20Civilization."  linking2="https://unsplash.com/"/>
<Footer />
    </div>
  )
}

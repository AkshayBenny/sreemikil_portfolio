import React from 'react';
import Hero from '../components/Hero';
import Creative from '../components/homepage/creative/Creative';
import Other from '../components/homepage/other/Other';
import About from '../components/homepage/About';

function Home() {
  return (
    <div>
      <Hero />
      <Creative />
      <Other />
      <About />
    </div>
  );
}

export default Home;

import React from 'react';
import Hero from './components/Hero';
import Creative from './components/creative/Creative';
import Other from './components/Other/Other';
import About from './components/About';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Creative />
      <Other />
      <About />
      <Footer />
    </div>
  );
}

export default App;

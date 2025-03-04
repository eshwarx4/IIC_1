import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Programs from './components/Programs';
import SuccessStories from './components/SuccessStories';
import Events from './components/Events';
import Team from './components/Team';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      <Hero />
      <About />
      <Programs />
      <SuccessStories />
      <Events />
      <Team />
      <Contact />
    </div>
  );
}

export default App;
// src/components/App.tsx
import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';

const App: React.FC = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
    </div>
  );
};

export default App;
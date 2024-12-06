import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex justify-between items-center py-4 px-8 bg-primary text-secondary">
      <div className="text-xl font-bold">Developer X</div>
      
      <ul className={`flex space-x-6 md:flex ${isMenuOpen ? 'block' : 'hidden'} transition-all duration-300 ease-in-out`}>
        <li><a href="#home" className="hover:text-accent">Home</a></li>
        <li><a href="#about" className="hover:text-accent">About</a></li>
        <li><a href="#blog" className="hover:text-accent">Blog</a></li>
        <li><a href="#portfolio" className="hover:text-accent">Portfolio</a></li>
        <li><a href="#pages" className="hover:text-accent">Pages</a></li>
        <li><a href="#cart" className="hover:text-accent">Cart (0)</a></li>
      </ul>

      <button 
        className="block md:hidden text-2xl"
        onClick={toggleMenu}
      >
        {isMenuOpen ? '×' : '☰'}
      </button>
    </nav>
  );
};

export default Navbar;

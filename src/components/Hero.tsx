// src/components/Hero.tsx
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="bg-primary text-secondary min-h-screen flex flex-col justify-center items-center text-center px-6"
    >
      <h1 className="text-5xl font-bold mb-4">I’m Vivek, a <span className="text-accent">Web Developer</span></h1>
      <p className="text-lg max-w-2xl mb-6">
      I am Vivek, a freelance IT developer with expertise in web and software development. I deliver scalable, user-focused solutions, combining technical excellence with clear communication to bring your ideas to life efficiently and effectively.  </p>
      <div className="flex space-x-4">
        <a href="#about" className="bg-accent text-white py-2 px-6 rounded hover:bg-opacity-90">
          Learn More
        </a>
        <a href="#portfolio" className="text-accent border border-accent py-2 px-6 rounded hover:bg-accent hover:text-white">
          Browse Portfolio
        </a>
      </div>
      <div className="mt-10">
        <img
          src="https://media.licdn.com/dms/image/v2/D4E22AQFS12UEnTmJxA/feedshare-shrink_1280/feedshare-shrink_1280/0/1733401016116?e=1736380800&v=beta&t=2n_pj9CoCsToQEg3hjEcWHq-NoGi8x43YupA3Stz75c" // Replace with actual image
          alt="John"
          className="rounded-full w-80 h-90"
        />
      </div>
    </section>
  );
};

export default Hero;

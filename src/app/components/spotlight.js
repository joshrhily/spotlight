"use client"

import { useState, useEffect } from 'react';

const Spotlight = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <div
        className="absolute w-48 h-48 bg-gradient-radial from-white to-transparent pointer-events-none transform -translate-x-1/2 -translate-y-1/2"
        style={{ left: position.x, top: position.y }}
      />
    </div>
  );
};

export default Spotlight;

"use client";
import React, { useEffect, useState } from 'react';
import { Button } from './Button';

// Placeholder hero image – replace with a high‑quality product banner later
const HERO_IMAGE = 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1920&q=80';

export const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Trigger animation after component mounts
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      className="relative flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${HERO_IMAGE})` }}
    >
      {/* Dark overlay for contrast */}
      <div className="absolute inset-0 bg-black/50" />

      <div
        className={`relative max-w-3xl text-center px-4 transition-opacity duration-1000 ease-out ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <h1 className="text-5xl md:text-7xl font-extrabold text-primary mb-4 drop-shadow-lg animate-pulse">
          Luxury Redefined
        </h1>
        <p className="text-lg md:text-2xl text-white mb-8 drop-shadow-md">
          Curated collections for the discerning shopper. Experience elegance, performance, and
          personalization in every click.
        </p>
        <Button variant="primary" className="px-8 py-3 text-lg">
          Explore Collection
        </Button>
      </div>
    </section>
  );
};

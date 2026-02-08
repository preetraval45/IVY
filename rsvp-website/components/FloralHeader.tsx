'use client';

import React from 'react';

export const FloralHeader: React.FC = () => {
  return (
    <div className="text-center mb-8 animate-fade-in">
      {/* Decorative top flowers */}
      <div className="flex justify-center items-center gap-4 mb-6">
        <span className="text-4xl md:text-5xl text-blush opacity-70 animate-float" style={{ animationDelay: '0s' }}>✿</span>
        <span className="text-3xl md:text-4xl text-dustyRose opacity-60 animate-float" style={{ animationDelay: '0.2s' }}>❀</span>
        <span className="text-5xl md:text-6xl text-deepPink opacity-80 animate-float" style={{ animationDelay: '0.4s' }}>✿</span>
        <span className="text-3xl md:text-4xl text-dustyRose opacity-60 animate-float" style={{ animationDelay: '0.6s' }}>❀</span>
        <span className="text-4xl md:text-5xl text-blush opacity-70 animate-float" style={{ animationDelay: '0.8s' }}>✿</span>
      </div>

      {/* Main title */}
      <h1 className="font-script text-6xl md:text-8xl lg:text-9xl text-transparent bg-clip-text bg-linear-to-r from-blush via-deepPink to-roseGold mb-4">
        Ivy's Sweet 16
      </h1>

      {/* Subtitle */}
      <p className="font-elegant text-2xl md:text-3xl text-textMedium mb-2">
        Pretty in Pink Celebration
      </p>

      {/* Date */}
      <p className="font-body text-lg md:text-xl text-textLight">
        February 13, 2026
      </p>

      {/* Decorative bottom flowers */}
      <div className="flex justify-center items-center gap-4 mt-6">
        <span className="text-2xl text-sage opacity-60">✿</span>
        <span className="text-3xl text-goldLight opacity-70">❀</span>
        <span className="text-2xl text-sage opacity-60">✿</span>
      </div>
    </div>
  );
};

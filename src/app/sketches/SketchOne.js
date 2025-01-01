'use client';

import React, { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';

const SketchOne = () => {
  const containerRef = useRef(null);
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  useEffect(() => {
    // Check initial color scheme preference
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDarkMode(darkModeMediaQuery.matches);

    // Listen for color scheme changes
    const handleColorSchemeChange = (e) => {
      setIsDarkMode(e.matches);
    };
    
    darkModeMediaQuery.addEventListener('change', handleColorSchemeChange);
    
    // Dynamically import p5 on the client side
    import('p5').then((p5Module) => {
      const p5 = p5Module.default;
      
      // Create new p5 instance
      new p5((p) => {
        let width = window.innerWidth;
        let height = window.innerHeight;
        
        p.setup = () => {
          const canvas = p.createCanvas(width, height);
          canvas.style('position', 'fixed');
          canvas.style('top', '0');
          canvas.style('left', '0');
          canvas.style('z-index', '-1');
          
          // Initial background color based on color scheme
          p.background(isDarkMode ? 20 : 240);
        };
        
        p.draw = () => {
          let x1 = p.frameCount % width;
          p.frameRate(60);
          // Set background based on current color scheme
          p.background(isDarkMode ? 20 : 240);
          
          // Adjust particle color based on theme
          p.fill(isDarkMode ? 40 : 200);
          p.noStroke();
          p.ellipse(p.mouseX, p.mouseY, 20, 20);

          for (let i=0; i<20; i++) {
            p.drawSquare(x1, 1200);
            x1 += 200;
          }
        };
        
        // Handle window resize
        p.windowResized = () => {
          width = window.innerWidth;
          height = window.innerHeight;
          p.resizeCanvas(width, height);
        };

        p.drawSquare = (x, wh) => {
          p.noFill();
          p.stroke(isDarkMode ? 200 : 40);
          p.rectMode(p.CENTER);
          p.rotate(p.radians(p.frameCount / 80));
          p.rect(x, height/2, wh, wh);
        };
      }, containerRef.current);
    });
    
    // Cleanup function
    return () => {
      darkModeMediaQuery.removeEventListener('change', handleColorSchemeChange);
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
      }
    };
  }, [isDarkMode]);
  
  return <div ref={containerRef} />;
};

// Prevent SSR for p5.js component
export default dynamic(() => Promise.resolve(SketchOne), {
  ssr: false
});
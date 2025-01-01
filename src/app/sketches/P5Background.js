'use client';

import React, { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';

const P5Background = () => {
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
          // Set background based on current color scheme
          p.background(isDarkMode ? 20 : 240);
          
          // Adjust particle color based on theme
          p.fill(isDarkMode ? 40 : 200);
          p.noStroke();
          p.ellipse(p.mouseX, p.mouseY, 20, 20);
        };
        
        // Handle window resize
        p.windowResized = () => {
          width = window.innerWidth;
          height = window.innerHeight;
          p.resizeCanvas(width, height);
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
export default dynamic(() => Promise.resolve(P5Background), {
  ssr: false
});
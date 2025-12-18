// components/AbstractBackground.tsx
'use client';

import React, { useRef, useEffect, useCallback } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const AbstractBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // 模拟一些简单的视差效果
  const y = useTransform(scrollYProgress, [0, 1], ['-50%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.2, 0.8, 0.2]);

  // 你可以在这里集成 Three.js 或 react-three-fiber 实现更复杂的3D背景
  // 但为了"纯展示"和兼容性，我们先用 CSS/简单的JS粒子模拟
  const particlesRef = useRef<HTMLDivElement[]>([]);

  const createParticle = useCallback(() => {
    if (!containerRef.current) return;
    const particle = document.createElement('div');
    particle.className = 'absolute bg-white/30 rounded-full animate-fade-in-out';
    const size = Math.random() * 2 + 1; // 1 to 3px
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.top = `${Math.random() * 100}%`;
    particle.style.animationDuration = `${Math.random() * 5 + 5}s`; // 5 to 10s
    particle.style.animationDelay = `${Math.random() * 5}s`; // 0 to 5s
    containerRef.current.appendChild(particle);

    // Clean up old particles to prevent memory leak
    setTimeout(() => {
      particle.remove();
    }, parseFloat(particle.style.animationDuration) * 1000);

    return particle;
  }, []);

  useEffect(() => {
    const particleInterval = setInterval(() => {
      createParticle();
    }, 500); // Create a new particle every 500ms

    return () => clearInterval(particleInterval);
  }, [createParticle]);

  return (
    <motion.div 
      ref={containerRef}
      className="fixed inset-0 z-0 overflow-hidden bg-gradient-to-br from-gray-950 via-black to-gray-800"
      style={{ y, opacity }} // 应用视差和透明度效果
    >
      {/* 简单的背景层，你可以用图片或更复杂的CSS渐变 */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"></div>
      {/* 模拟星云或光带 */}
      <motion.div 
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#00f0ff]/10 rounded-full mix-blend-screen blur-3xl opacity-50 animate-pulse-slow" 
        animate={{ scale: [1, 1.2, 1], x: ['-10%', '10%', '-10%'], y: ['-10%', '10%', '-10%'] }}
        transition={{ repeat: Infinity, duration: 20 }}
      />
      <motion.div 
        className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-[#ff00ff]/10 rounded-full mix-blend-screen blur-3xl opacity-50 animate-pulse-slow" 
        animate={{ scale: [1.2, 1, 1.2], x: ['10%', '-10%', '10%'], y: ['10%', '-10%', '10%'] }}
        transition={{ repeat: Infinity, duration: 25 }}
      />
      
      {/* 粒子效果容器 */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Particles will be injected here by JS */}
      </div>

    </motion.div>
  );
};

export default AbstractBackground;
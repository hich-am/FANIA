import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-screen flex flex-col justify-center items-center overflow-hidden">
      {/* Video Background */}
      <video 
        autoPlay 
        loop 
        muted 
        playsInline 
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/steven.mp4" type="video/mp4" />
      </video>

      {/* Subtle darkening for text readability */}
      <div className="absolute inset-0 bg-black/40 z-0 pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center mt-12"
      >
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif tracking-tight mb-4 uppercase text-white">
          Fania Aouchar
        </h1>
        <p className="text-sm md:text-lg tracking-[0.2em] font-sans uppercase text-white/90 mb-8">
          Model &bull; Actress &bull; Creative Director
        </p>
        <p className="text-lg md:text-xl font-serif italic text-white/80 max-w-2xl mx-auto mb-12">
          "Crafting visuals, concepts and stories with intention and elegance."
        </p>

        <div className="flex flex-col sm:flex-row gap-6 items-center">
          <a href="#portfolio" className="px-8 py-3 bg-white text-black font-sans uppercase tracking-widest text-xs hover:bg-white/90 transition-colors duration-300">
            View Portfolio
          </a>
          <a href="#contact" className="px-8 py-3 border border-white/30 text-white font-sans uppercase tracking-widest text-xs hover:border-white transition-colors duration-300">
            Work With Me
          </a>
        </div>
      </motion.div>

      {/* Stats Strip at Bottom */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="absolute bottom-8 w-full px-4 z-10"
      >
        <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-4 text-xs tracking-widest uppercase text-white/70 text-center">
          <span>Fashion</span>
          <span className="hidden sm:inline">&mdash;</span>
          <span>Film</span>
          <span className="hidden sm:inline">&mdash;</span>
          <span>Beauty</span>
          <span className="hidden sm:inline">&mdash;</span>
          <span>Creative Direction</span>
          <span className="hidden lg:inline">&mdash;</span>
          <span className="w-full lg:w-auto mt-2 lg:mt-0">4 Languages &mdash; Available Worldwide</span>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;

import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-screen flex flex-col justify-center items-center overflow-hidden bg-background">
      {/* Video Background */}
      <video 
        autoPlay 
        loop 
        muted 
        playsInline 
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-40 grayscale"
      >
        <source src="https://assets.mixkit.co/videos/preview/mixkit-beautiful-woman-walking-in-a-forest-4309-large.mp4" type="video/mp4" />
      </video>

      {/* Background elegant fade overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 to-background/90 z-0 pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center mt-12"
      >
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif tracking-tight mb-4 uppercase">
          Fania Aouchar
        </h1>
        <p className="text-sm md:text-lg tracking-[0.2em] font-sans uppercase text-foreground/80 mb-8">
          Model &bull; Actress &bull; Creative Director
        </p>
        <p className="text-lg md:text-xl font-serif italic text-foreground/70 max-w-2xl mx-auto mb-12">
          "Crafting visuals, concepts and stories with intention and elegance."
        </p>

        <div className="flex flex-col sm:flex-row gap-6 items-center">
          <a href="#portfolio" className="px-8 py-3 bg-foreground text-background font-sans uppercase tracking-widest text-xs hover:bg-foreground/90 transition-colors duration-300">
            View Portfolio
          </a>
          <a href="#contact" className="px-8 py-3 border border-foreground/20 text-foreground font-sans uppercase tracking-widest text-xs hover:border-foreground transition-colors duration-300">
            Work With Me
          </a>
        </div>
      </motion.div>

      {/* Stats Strip at Bottom */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="absolute bottom-8 w-full px-4"
      >
        <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-4 text-xs tracking-widest uppercase text-foreground/50 text-center">
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

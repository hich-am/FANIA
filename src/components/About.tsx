import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 px-4 md:px-12 w-full bg-background border-t border-divider">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-32">
        {/* Left column: Title and visual element */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="lg:w-1/3 flex flex-col"
        >
          <h2 className="text-4xl md:text-5xl font-serif mb-8 uppercase tracking-widest leading-none">
            About
          </h2>
          <div className="flex-grow flex items-end">
            <div className="w-full h-[50vh] lg:h-full min-h-[400px] bg-accent/20 relative">
              {/* Optional minimal image placeholder */}
              <div className="absolute inset-0 bg-accent/30 mix-blend-multiply" />
              <img 
                src="https://images.unsplash.com/photo-1512413914441-58d313176bef?auto=format&fit=crop&q=80&w=800" 
                alt="Editorial placeholder" 
                className="w-full h-full object-cover grayscale-[30%] opacity-90 sepia-[10%] mix-blend-darken"
              />
            </div>
          </div>
        </motion.div>

        {/* Right column: Bio and quick facts */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.2 }}
          className="lg:w-2/3 flex flex-col justify-center gap-16"
        >
          <div className="prose prose-lg text-foreground/80 max-w-none font-sans leading-relaxed tracking-wide lowercase first-letter:uppercase">
            <p className="mb-6 text-xl text-foreground font-serif normal-case">
              A multidisciplinary creative combining modeling, acting, and creative direction.
            </p>
            <p className="mb-6 normal-case">
              With a strong background in content creation and brand management, I understand 
              how to align creative direction with overarching brand goals. My passion lies in 
              fashion, beauty, and lifestyle storytelling—focusing on clean, minimalist, and 
              modern aesthetics that elevate the visual narrative.
            </p>
            <p className="normal-case">
              Whether in front of the lens or behind the scenes, my approach is intentional, 
              confident, and artistic. I partner with brands to craft compelling stories 
              that resonate with modern audiences.
            </p>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] font-sans mb-8 border-b border-divider pb-4">
              Quick Facts
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
              <div className="flex flex-col gap-2">
                <span className="text-[10px] uppercase tracking-widest text-foreground/40 font-sans">Based in</span>
                <span className="text-sm font-sans uppercase tracking-widest">Algiers, Algeria</span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-[10px] uppercase tracking-widest text-foreground/40 font-sans">Languages</span>
                <span className="text-sm font-sans uppercase tracking-widest">EN / FR / AR / ES</span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-[10px] uppercase tracking-widest text-foreground/40 font-sans">Fields</span>
                <span className="text-sm font-sans uppercase tracking-widest leading-loose">Modeling <br /> Acting <br /> Creative Direction</span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-[10px] uppercase tracking-widest text-foreground/40 font-sans">Focus</span>
                <span className="text-sm font-sans uppercase tracking-widest">Fashion &bull; Beauty &bull; Lifestyle</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

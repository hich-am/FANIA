import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const categories = ['All', 'Fashion', 'Beauty', 'Acting', 'Creative Direction'];

const baseProjects = [
  { id: 1, title: 'Editorial Look', category: 'Fashion', image: '/fania.jpg' },
  { id: 2, title: 'Beauty Portrait', category: 'Beauty', image: '/fania2.jpg' },
  { id: 3, title: 'Cinematic Scene', category: 'Acting', image: '/fania3.jpg' }
];

// Repeat 20 times for a "fake" infinite effect
const repeatedProjects = Array(20).fill(baseProjects).flat().map((project, index) => ({
  ...project,
  uniqueId: `${project.id}-${index}`
}));

const Portfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (carouselRef.current) {
      // Scroll to the middle on mount or category change to allow infinite scrolling in both directions
      const centerPosition = carouselRef.current.scrollWidth / 2;
      carouselRef.current.scrollLeft = centerPosition;
    }
  }, [activeCategory]);

  const filteredProjects = activeCategory === 'All' 
    ? repeatedProjects 
    : repeatedProjects.filter(p => p.category === activeCategory);

  const scrollPrev = () => {
    if (carouselRef.current) {
      const scrollAmount = carouselRef.current.clientWidth * 0.6;
      carouselRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    }
  };

  const scrollNext = () => {
    if (carouselRef.current) {
      const scrollAmount = carouselRef.current.clientWidth * 0.6;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="portfolio" className="py-32 w-full bg-background border-t border-divider overflow-hidden">
      <div className="max-w-[100vw] mx-auto">
        <div className="px-4 md:px-12 mb-12 flex flex-col md:flex-row md:items-end justify-between items-start gap-8">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-serif uppercase tracking-widest leading-none"
          >
            Selected Work
          </motion.h2>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-wrap gap-4"
          >
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-xs font-sans uppercase tracking-[0.15em] transition-colors duration-300 pb-1 border-b ${
                  activeCategory === cat 
                    ? 'border-foreground text-foreground' 
                    : 'border-transparent text-foreground/40 hover:text-foreground/80'
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.2 }}
          className="w-full relative group"
        >
          {/* Navigation Arrows */}
          <button 
            onClick={scrollPrev}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-10 bg-background/90 hover:bg-accent hover:text-white text-foreground p-3 md:p-4 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-md border border-divider shadow-lg"
            aria-label="Previous image"
          >
            <ChevronLeft size={28} strokeWidth={1} />
          </button>
          
          <button 
            onClick={scrollNext}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-10 bg-background/90 hover:bg-accent hover:text-white text-foreground p-3 md:p-4 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-md border border-divider shadow-lg"
            aria-label="Next image"
          >
            <ChevronRight size={28} strokeWidth={1} />
          </button>

          <div 
            ref={carouselRef}
            className="flex gap-6 overflow-x-auto px-4 md:px-12 snap-x snap-mandatory hide-scrollbar pb-8 pt-4 cursor-grab active:cursor-grabbing"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                key={project.uniqueId}
                className="snap-center shrink-0 w-[80vw] sm:w-[50vw] md:w-[35vw] lg:w-[25vw] aspect-[3/4] group/card relative overflow-hidden bg-accent/10 shadow-sm"
              >
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-105"
                  draggable="false"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 w-full p-6 translate-y-4 opacity-0 group-hover/card:translate-y-0 group-hover/card:opacity-100 transition-all duration-500">
                  <p className="text-xs uppercase tracking-widest text-background/70 font-sans mb-1">
                    {project.category}
                  </p>
                  <h3 className="text-xl font-serif text-background">
                    {project.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default Portfolio;

import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';

const categories = ['All', 'Fashion', 'Beauty', 'Acting', 'Creative Direction'];

const mockProjects = [
  { id: 1, title: 'Beauty Campaign', category: 'Beauty', image: 'https://images.unsplash.com/photo-1515562141207-7a8efbf8858e?auto=format&fit=crop&q=80&w=600' },
  { id: 2, title: 'Fashion Editorial', category: 'Fashion', image: 'https://images.unsplash.com/photo-1509631179647-0c500ba5e84f?auto=format&fit=crop&q=80&w=600' },
  { id: 3, title: 'Lifestyle Shoot', category: 'Fashion', image: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&q=80&w=600' },
  { id: 4, title: 'Film Scene', category: 'Acting', image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80&w=600' },
  { id: 5, title: 'Commercial Project', category: 'Creative Direction', image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=600' },
  { id: 6, title: 'Summer Runway', category: 'Fashion', image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=80&w=600' }
];

const Portfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const carouselRef = useRef<HTMLDivElement>(null);

  const filteredProjects = activeCategory === 'All' 
    ? mockProjects 
    : mockProjects.filter(p => p.category === activeCategory);

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

          {/* Filters */}
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

        {/* Carousel */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.2 }}
          className="w-full relative"
        >
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
                key={project.id}
                className="snap-center shrink-0 w-[80vw] sm:w-[50vw] md:w-[35vw] lg:w-[25vw] aspect-[3/4] group relative overflow-hidden bg-accent/10 shadow-sm"
              >
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  draggable="false"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 w-full p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
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
      
      {/* Hide scrollbar styles injection */}
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default Portfolio;

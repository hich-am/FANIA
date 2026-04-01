import React from 'react';
import { motion } from 'framer-motion';

const services = [
  { id: 1, title: 'Brand Campaigns', description: 'Face of the brand for comprehensive multi-channel marketing campaigns.' },
  { id: 2, title: 'Fashion & Beauty Shoots', description: 'Editorial and commercial modeling for high-end fashion and beauty.' },
  { id: 3, title: 'Acting Projects', description: 'On-screen talent for short films, features, and commercial acting.' },
  { id: 4, title: 'Creative Direction', description: 'Concept development, moodboarding, and on-set art direction.' },
  { id: 5, title: 'Social Media Content', description: 'Engaging, story-driven content creation for digital platforms.' },
  { id: 6, title: 'Brand Strategy & Identity', description: 'Consulting on visual positioning and aesthetic alignment.' }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-32 px-4 md:px-12 w-full bg-background border-t border-divider">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20 max-w-2xl"
        >
          <h2 className="text-3xl md:text-5xl font-serif mb-6 uppercase tracking-widest">
            Ways to Collaborate
          </h2>
          <p className="text-foreground/70 font-sans leading-relaxed">
            Open to collaborations with brands and creative teams who value strong visual storytelling and artistic vision.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group border border-divider p-8 hover:bg-foreground hover:text-background transition-colors duration-500 ease-in-out cursor-default"
            >
              <h3 className="text-sm font-sans uppercase tracking-[0.2em] mb-4 border-b border-divider group-hover:border-background/20 pb-4 transition-colors duration-500">
                {service.title}
              </h3>
              <p className="text-foreground/60 group-hover:text-background/70 font-sans text-sm leading-relaxed lowercase first-letter:uppercase transition-colors duration-500">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

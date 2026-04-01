import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Mail, Video } from 'lucide-react'; // Using Video for TikTok placeholder

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-32 px-4 md:px-12 w-full bg-foreground text-background">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif mb-6 uppercase tracking-widest leading-tight">
            Let’s Create <br/> Something Beautiful
          </h2>
        </motion.div>

        <motion.form 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full max-w-2xl flex flex-col gap-8"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-[10px] uppercase font-sans tracking-widest text-background/60">Name</label>
              <input type="text" id="name" className="bg-transparent border-b border-background/20 py-2 text-sm font-sans focus:outline-none focus:border-background transition-colors" />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-[10px] uppercase font-sans tracking-widest text-background/60">Email</label>
              <input type="email" id="email" className="bg-transparent border-b border-background/20 py-2 text-sm font-sans focus:outline-none focus:border-background transition-colors" />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col gap-2">
              <label htmlFor="brand" className="text-[10px] uppercase font-sans tracking-widest text-background/60">Brand / Production</label>
              <input type="text" id="brand" className="bg-transparent border-b border-background/20 py-2 text-sm font-sans focus:outline-none focus:border-background transition-colors" />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="type" className="text-[10px] uppercase font-sans tracking-widest text-background/60">Project Type</label>
              <select id="type" className="bg-transparent border-b border-background/20 py-2 text-sm font-sans focus:outline-none focus:border-background transition-colors appearance-none cursor-pointer">
                <option value="" disabled className="text-foreground">Select Project Type</option>
                <option value="campaign" className="text-foreground">Brand Campaign</option>
                <option value="fashion" className="text-foreground">Fashion & Beauty</option>
                <option value="acting" className="text-foreground">Acting Project</option>
                <option value="direction" className="text-foreground">Creative Direction</option>
                <option value="other" className="text-foreground">Other</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-[10px] uppercase font-sans tracking-widest text-background/60">Message</label>
            <textarea id="message" rows={4} className="bg-transparent border-b border-background/20 py-2 text-sm font-sans focus:outline-none focus:border-background transition-colors resize-none"></textarea>
          </div>

          <button type="submit" className="mt-8 px-8 py-4 bg-background text-foreground font-sans uppercase tracking-[0.2em] text-xs hover:bg-background/90 transition-colors self-center min-w-[200px]">
            Send Inquiry
          </button>
        </motion.form>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-32 flex gap-8 items-center"
        >
          <a href="#" className="p-3 border border-background/20 rounded-full hover:bg-background hover:text-foreground transition-all duration-300">
            <Camera size={18} strokeWidth={1.5} />
          </a>
          <a href="#" className="p-3 border border-background/20 rounded-full hover:bg-background hover:text-foreground transition-all duration-300">
            <Video size={18} strokeWidth={1.5} />
          </a>
          <a href="#" className="p-3 border border-background/20 rounded-full hover:bg-background hover:text-foreground transition-all duration-300">
            <Mail size={18} strokeWidth={1.5} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

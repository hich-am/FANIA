import React, { useState } from 'react';
import { useScroll, useMotionValueEvent } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  const links = ['About', 'Portfolio', 'Services', 'Contact'];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 backdrop-blur-md border-b transition-colors duration-500 ${
        isScrolled 
          ? 'bg-background/90 border-divider shadow-sm' 
          : 'bg-black/60 border-white/10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-12 h-20 flex items-center justify-between">
        <a 
          href="#" 
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="font-serif text-2xl tracking-widest text-[#5C3E84] uppercase font-bold"
        >
          FANIA
        </a>
        
        <div className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <a 
              key={link} 
              href={`#${link.toLowerCase()}`}
              onClick={(e) => scrollToSection(e, link.toLowerCase())}
              className={`font-sans text-xs tracking-[0.2em] transition-colors duration-500 uppercase relative group ${
                isScrolled ? 'text-foreground hover:text-accent' : 'text-white/80 hover:text-white'
              }`}
            >
              {link}
              <span className={`absolute -bottom-2 left-0 w-0 h-[1px] transition-all duration-500 group-hover:w-full ${
                isScrolled ? 'bg-accent' : 'bg-white'
              }`}></span>
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

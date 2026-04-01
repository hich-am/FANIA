import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-foreground text-background/80 py-12 px-4 md:px-12 border-t border-background/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        
        <div className="flex flex-col items-center md:items-start tracking-widest">
          <span className="font-serif text-xl uppercase text-background mb-2">Fania Aouchar</span>
          <span className="text-[10px] font-sans uppercase text-background/60">Model &bull; Actress &bull; Creative Director</span>
        </div>

        <nav className="flex gap-6 md:gap-8 text-xs font-sans uppercase tracking-[0.2em]">
          <a href="#about" className="hover:text-background transition-colors">Home</a>
          <a href="#about" className="hover:text-background transition-colors">About</a>
          <a href="#portfolio" className="hover:text-background transition-colors">Portfolio</a>
          <a href="#contact" className="hover:text-background transition-colors">Contact</a>
        </nav>

        <div className="text-[10px] font-sans uppercase tracking-widest text-background/40">
          &copy; 2026 Fania Aouchar
        </div>

      </div>
    </footer>
  );
};

export default Footer;

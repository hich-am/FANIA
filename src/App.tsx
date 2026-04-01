import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import Hero from './components/Hero';
import About from './components/About.tsx';
import Portfolio from './components/Portfolio';
import Services from './components/Services.tsx';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <main className="bg-background min-h-screen text-foreground font-sans uppercase">
      <Hero />
      <About />
      <Portfolio />
      <Services />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;

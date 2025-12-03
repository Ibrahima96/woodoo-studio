import React, { useEffect, useState } from 'react';
import { ArrowRightIcon } from './ui/Icons';

const Hero: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative px-6 pt-32 pb-16 md:pt-48 md:pb-32 overflow-hidden min-h-[80vh] flex flex-col justify-center">
        {/* Parallax Background Layers */}
        <div 
            className="absolute inset-0 z-0 pointer-events-none"
            style={{ 
                transform: `translateY(${scrollY * 0.1}px)`,
                willChange: 'transform'
            }}
        >
             {/* Abstract Texture Layer */}
             <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
             <div className="absolute inset-0 bg-gradient-to-b from-woodoo-950 via-transparent to-woodoo-950"></div>
        </div>

        <div 
            className="absolute inset-0 z-0 pointer-events-none mix-blend-screen"
            style={{ 
                transform: `translateY(${scrollY * 0.25}px)`,
                willChange: 'transform'
            }}
        >
             {/* Fog/Light Layer */}
             <div className="absolute -top-[50%] -left-[50%] w-[200%] h-[200%] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-woodoo-accent/10 via-transparent to-transparent blur-3xl opacity-40"></div>
        </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <h1 className="text-5xl md:text-8xl font-medium tracking-tight mb-8 leading-[0.9] animate-[fadeIn_0.8s_ease-out_0.2s_both]">
          Nous créons de la <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-woodoo-accent to-white font-serif italic">Magie Numérique.</span>
        </h1>
        
        <div className="flex flex-col md:flex-row items-start md:items-center gap-8 animate-[fadeIn_0.8s_ease-out_0.4s_both]">
          <p className="text-neutral-400 text-lg md:text-xl max-w-lg leading-relaxed border-l border-white/10 pl-6">
            Woodoo Studio est une agence de design et développement créatif. Nous transformons vos idées en expériences web immersives qui captivent et convertissent.
          </p>
          
          <a 
            href="#work"
            className="group flex items-center justify-center w-16 h-16 rounded-full bg-white text-black hover:scale-110 transition-transform duration-300"
            aria-label="Voir nos travaux"
          >
            <ArrowRightIcon className="w-6 h-6 transform group-hover:-rotate-45 transition-transform duration-300" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
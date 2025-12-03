import React, { useEffect, useRef, useState } from 'react';
import { GlobeIcon, UsersIcon, TrophyIcon, ZapIcon } from './ui/Icons';

const Studio: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 } // Trigger when 15% visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const getAnimClass = (delayClass: string) => 
    `transform transition-all duration-1000 ease-out ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
    } ${delayClass}`;

  return (
    <section id="studio" ref={sectionRef} className="py-24 px-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className={`mb-16 ${getAnimClass('delay-0')}`}>
        <h2 className="text-sm font-bold text-woodoo-accent tracking-widest uppercase mb-4">Le Studio</h2>
        <h3 className="text-4xl md:text-6xl font-medium text-white leading-tight max-w-4xl">
          Nous sommes un collectif de <span className="font-serif italic text-neutral-500">designers</span>, <span className="font-serif italic text-neutral-500">ingénieurs</span>, et <span className="font-serif italic text-neutral-500">conteurs</span> obsédés par le sublime numérique.
        </h3>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Mission Card - Large */}
        <div className="md:col-span-8 p-8 md:p-12 rounded-3xl bg-neutral-900/50 border border-white/5 flex flex-col justify-between min-h-[350px] hover:border-white/10 transition-colors group">
           <div className="space-y-6">
             <h4 className={`text-xl font-medium text-white ${getAnimClass('delay-100')}`}>Notre Mission</h4>
             <p className={`text-2xl md:text-3xl text-neutral-300 font-light leading-relaxed ${getAnimClass('delay-200')}`}>
               Chez Woodoo, nous croyons que le logiciel est le grimoire moderne. Notre mission est de traduire l'intention humaine en une réalité au pixel près, en supprimant les frictions et en injectant du merveilleux dans chaque interaction.
             </p>
           </div>
           <div className={`mt-8 flex flex-wrap gap-4 ${getAnimClass('delay-300')}`}>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/5 text-sm text-neutral-400 hover:text-white transition-colors">
                <ZapIcon className="w-4 h-4 text-woodoo-accent" />
                <span>Prototypage Rapide</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/5 text-sm text-neutral-400 hover:text-white transition-colors">
                <GlobeIcon className="w-4 h-4 text-woodoo-accent" />
                <span>Portée Mondiale</span>
              </div>
           </div>
        </div>

        {/* Stats Card - Tall */}
        <div className="md:col-span-4 row-span-2 p-8 rounded-3xl bg-woodoo-accent text-white flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-32 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:scale-110 transition-transform duration-700"></div>
            
            <div className="relative z-10">
               <div className={getAnimClass('delay-300')}>
                  <TrophyIcon className="w-12 h-12 mb-6 text-white/80" />
               </div>
               <h4 className={`text-3xl font-medium mb-2 ${getAnimClass('delay-500')}`}>Primé</h4>
               <p className={`text-white/70 text-sm leading-relaxed ${getAnimClass('delay-500')}`}>Reconnu par Awwwards, FWA et la communauté des arts numériques pour l'excellence de son artisanat.</p>
            </div>

            <div className={`grid grid-cols-2 gap-4 mt-8 relative z-10 ${getAnimClass('delay-700')}`}>
               <div>
                  <div className="text-4xl font-bold">15+</div>
                  <div className="text-xs uppercase tracking-wider opacity-70 mt-1">Prix</div>
               </div>
               <div>
                  <div className="text-4xl font-bold">40+</div>
                  <div className="text-xs uppercase tracking-wider opacity-70 mt-1">Projets</div>
               </div>
            </div>
        </div>

        {/* Team / Culture */}
         <div className="md:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-8 rounded-3xl bg-neutral-900 border border-white/5 flex flex-col justify-between min-h-[250px] hover:border-white/10 transition-colors">
               <div className={`flex flex-col gap-4 ${getAnimClass('delay-500')}`}>
                 <UsersIcon className="w-8 h-8 text-woodoo-accent" />
                 <h4 className="text-xl font-medium">Le Coven</h4>
               </div>
               <p className={`text-neutral-400 text-sm leading-relaxed ${getAnimClass('delay-700')}`}>
                 Une équipe distribuée de talents seniors. Pas de juniors ici ; chacun est maître de son art, travaillant en harmonie autonome pour livrer l'excellence pure.
               </p>
            </div>
             <div className="p-8 rounded-3xl bg-neutral-900 border border-white/5 flex flex-col justify-between relative overflow-hidden group">
                <img 
                    src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Office"
                    className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-500" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                
                <div className="relative z-10 h-full flex flex-col justify-end">
                    <h4 className={`text-xl font-medium mb-2 text-white ${getAnimClass('delay-700')}`}>Rejoignez-nous</h4>
                    <p className={`text-neutral-300 text-sm mb-4 ${getAnimClass('delay-700')}`}>
                        Nous cherchons toujours de nouveaux sorciers pour rejoindre nos rangs.
                    </p>
                    <a href="#contact" className={`text-sm font-bold text-woodoo-accent hover:text-white transition-colors flex items-center gap-2 ${getAnimClass('delay-1000')}`}>
                        Voir les postes ouverts &rarr;
                    </a>
                </div>
            </div>
         </div>
      </div>
    </section>
  );
};

export default Studio;
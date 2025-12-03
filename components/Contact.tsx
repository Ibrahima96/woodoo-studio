import React from 'react';
import { ArrowRightIcon, SendIcon } from './ui/Icons';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-32 px-6 max-w-7xl mx-auto relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-woodoo-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-woodoo-accent mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-woodoo-accent opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-woodoo-accent"></span>
          </span>
          Disponible pour de nouveaux projets
        </div>

        <h2 className="text-5xl md:text-8xl font-medium tracking-tight mb-8">
          Prêt à commencer <br />
          <span className="font-serif italic text-neutral-500">l'aventure ?</span>
        </h2>

        <p className="text-neutral-400 text-lg md:text-xl max-w-2xl mb-12 leading-relaxed">
          Nous transformons les idées audacieuses en produits numériques exceptionnels. 
          Si vous cherchez à dépasser les limites du possible, parlons-en.
        </p>

        <a 
          href="mailto:hello@woodoo.studio"
          className="group relative inline-flex items-center gap-4 px-8 py-4 bg-white text-black rounded-full text-lg font-medium hover:scale-105 transition-transform duration-300"
        >
          <span>Lancer le projet</span>
          <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
             <ArrowRightIcon className="w-4 h-4" />
          </div>
        </a>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 text-sm text-neutral-500">
           <div className="flex flex-col gap-2">
              <span className="text-white font-medium">Email</span>
              <a href="mailto:hello@woodoo.studio" className="hover:text-woodoo-accent transition-colors">hello@woodoo.studio</a>
           </div>
           <div className="flex flex-col gap-2">
              <span className="text-white font-medium">Studio</span>
              <span>Paris, France</span>
           </div>
           <div className="flex flex-col gap-2">
              <span className="text-white font-medium">Social</span>
              <div className="flex gap-4 justify-center md:justify-start">
                <a href="#" className="hover:text-woodoo-accent transition-colors">Twitter</a>
                <a href="#" className="hover:text-woodoo-accent transition-colors">LinkedIn</a>
              </div>
           </div>
           <div className="flex flex-col gap-2">
              <span className="text-white font-medium">Temps</span>
              <span>Local: {new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })}</span>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
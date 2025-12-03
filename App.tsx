import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import ProjectCard from './components/ProjectCard';
import MagicConcierge from './components/MagicConcierge';
import Studio from './components/Studio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Project } from './types';
import { HexagonIcon, BoxIcon } from './components/ui/Icons';

const projects: Project[] = [
  {
    id: '1',
    title: 'Neon Horizon',
    category: 'Web Immersif',
    image: 'https://picsum.photos/800/600?random=1',
    size: 'large'
  },
  {
    id: '2',
    title: 'Velvet UI',
    category: 'Système de Design',
    image: 'https://picsum.photos/600/800?random=2',
    size: 'tall'
  },
  {
    id: '3',
    title: 'Chronos',
    category: 'App Fintech',
    image: 'https://picsum.photos/800/600?random=3',
    size: 'medium'
  },
  {
    id: '4',
    title: 'Aether',
    category: 'Identité de Marque',
    image: 'https://picsum.photos/800/600?random=4',
    size: 'medium'
  }
];

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-woodoo-950 text-white selection:bg-woodoo-accent selection:text-white overflow-x-hidden">
      <Navigation />
      
      <main>
        <Hero />
        
        {/* Main Grid Section */}
        <section id="work" className="px-6 pb-24 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[400px]">
            
            {/* Feature Project (Large) */}
            <ProjectCard 
              project={projects[0]} 
              className="md:col-span-2 lg:col-span-2" 
            />

            {/* AI Magic Card (Interactive) */}
            <div className="md:col-span-1 lg:col-span-1">
               <MagicConcierge />
            </div>

            {/* Tall Project */}
            <ProjectCard 
              project={projects[1]} 
              className="md:row-span-2 lg:row-span-2" 
            />

            {/* Medium Projects */}
            <ProjectCard project={projects[2]} />
            
            {/* Services/Info Card (Static Bento Item) */}
            <div id="services" className="relative group overflow-hidden rounded-3xl bg-neutral-900 border border-white/5 p-8 flex flex-col justify-between hover:border-white/10 transition-colors">
                <div>
                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300">
                        <HexagonIcon />
                    </div>
                    <h3 className="text-xl font-medium mb-2">Stratégie & Cœur</h3>
                    <p className="text-neutral-500 text-sm">Nous disséquons les problèmes complexes pour bâtir des fondations numériques robustes.</p>
                </div>
                <div className="flex gap-2 flex-wrap mt-4">
                    {['Recherche', 'Architecture', 'Mise à l\'échelle'].map(tag => (
                        <span key={tag} className="px-3 py-1 rounded-full border border-white/10 text-xs text-neutral-400 bg-black/20">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>

            {/* Another Medium Project */}
            <ProjectCard project={projects[3]} />

             {/* Services/Info Card 2 */}
             <div className="relative group overflow-hidden rounded-3xl bg-neutral-900 border border-white/5 p-8 flex flex-col justify-between hover:border-white/10 transition-colors md:col-span-2">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                    <div>
                        <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-6 text-white group-hover:rotate-12 transition-transform duration-300">
                            <BoxIcon />
                        </div>
                        <h3 className="text-xl font-medium mb-2">La Stack Woodoo</h3>
                        <p className="text-neutral-500 text-sm max-w-sm">
                            Propulsé par React, Tailwind et des bibliothèques d'animation de pointe. Nous livrons des interfaces rapides, performantes et accessibles.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm text-neutral-400">
                        <ul className="space-y-2">
                            <li className="flex items-center gap-2"><div className="w-1 h-1 bg-woodoo-accent rounded-full"/> Next.js / React</li>
                            <li className="flex items-center gap-2"><div className="w-1 h-1 bg-woodoo-accent rounded-full"/> TypeScript</li>
                            <li className="flex items-center gap-2"><div className="w-1 h-1 bg-woodoo-accent rounded-full"/> Tailwind CSS</li>
                        </ul>
                         <ul className="space-y-2">
                            <li className="flex items-center gap-2"><div className="w-1 h-1 bg-woodoo-accent rounded-full"/> Gemini AI</li>
                            <li className="flex items-center gap-2"><div className="w-1 h-1 bg-woodoo-accent rounded-full"/> WebGL</li>
                            <li className="flex items-center gap-2"><div className="w-1 h-1 bg-woodoo-accent rounded-full"/> Node.js</li>
                        </ul>
                    </div>
                </div>
            </div>

          </div>
        </section>

        {/* Simple Marquee-style divider */}
        <div className="w-full bg-white text-black py-4 overflow-hidden whitespace-nowrap">
            <div className="inline-block animate-[slide_20s_linear_infinite]">
               <span className="mx-8 font-bold text-lg uppercase tracking-widest">Alchimie Numérique</span> • 
               <span className="mx-8 font-bold text-lg uppercase tracking-widest">Prêt pour le Futur</span> • 
               <span className="mx-8 font-bold text-lg uppercase tracking-widest">Studios Woodoo</span> • 
               <span className="mx-8 font-bold text-lg uppercase tracking-widest">Logique Créative</span> • 
               <span className="mx-8 font-bold text-lg uppercase tracking-widest">Alchimie Numérique</span> • 
               <span className="mx-8 font-bold text-lg uppercase tracking-widest">Prêt pour le Futur</span> • 
               <span className="mx-8 font-bold text-lg uppercase tracking-widest">Studios Woodoo</span> • 
               <span className="mx-8 font-bold text-lg uppercase tracking-widest">Logique Créative</span> • 
            </div>
        </div>

        {/* New Studio Section */}
        <Studio />

        {/* Contact Section */}
        <Contact />

      </main>
      
      <Footer />
      
      <style>{`
        @keyframes slide {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
        }
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default App;
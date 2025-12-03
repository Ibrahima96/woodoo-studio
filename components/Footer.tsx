import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="px-6 py-12 md:py-24 border-t border-white/5 mt-20 bg-neutral-950">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div>
            <h2 className="text-3xl font-serif italic text-white mb-2">Woodoo.</h2>
            <p className="text-neutral-500 text-sm">© {new Date().getFullYear()} Woodoo Studio. Tous droits réservés.</p>
        </div>
        
        <div className="flex gap-8 text-sm text-neutral-400">
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-white transition-colors">Email</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
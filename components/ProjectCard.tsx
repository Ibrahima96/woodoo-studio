import React from 'react';
import { Project } from '../types';
import { ArrowRightIcon } from './ui/Icons';

interface ProjectCardProps {
  project: Project;
  className?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, className = '' }) => {
  return (
    <div className={`relative group overflow-hidden rounded-3xl bg-neutral-900 border border-white/5 ${className}`}>
      {/* Image Background */}
      <img 
        src={project.image} 
        alt={project.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-40"
      />
      
      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-80" />

      {/* Content */}
      <div className="absolute inset-0 p-8 flex flex-col justify-end">
        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
          <p className="text-woodoo-accent text-xs font-bold tracking-widest uppercase mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
            {project.category}
          </p>
          <h3 className="text-2xl md:text-3xl font-medium text-white mb-2 font-sans">
            {project.title}
          </h3>
          <div className="h-0 group-hover:h-8 transition-all duration-300 overflow-hidden">
             <div className="flex items-center gap-2 text-sm text-neutral-300">
                <span>Voir l'étude de cas</span>
                <ArrowRightIcon className="w-4 h-4" />
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
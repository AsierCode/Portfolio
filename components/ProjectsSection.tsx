import React from 'react';
import { Project } from '../types';
import ProjectCard from './ProjectCard';

interface ProjectsSectionProps {
  id: string;
  projects: Project[];
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ id, projects }) => {
  let gridClasses = "grid gap-10 "; // Common classes

  if (projects.length === 1) {
    // For a single project, constrain the grid width on larger screens and center it.
    gridClasses += "grid-cols-1 md:max-w-lg lg:max-w-xl mx-auto";
  } else if (projects.length === 2) {
    // For two projects, use two columns on medium and large screens.
    gridClasses += "grid-cols-1 md:grid-cols-2";
  } else { // 3 or more projects
    // Default to up to three columns for larger screens.
    gridClasses += "grid-cols-1 md:grid-cols-2 lg:grid-cols-3";
  }

  return (
    <section id={id} className="py-16 md:py-24 bg-slate-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-sky-400">
          <span className="title-underline">Mis Proyectos Destacados</span>
        </h2>
        <div className={gridClasses}>
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              animationDelay={0.1 + index * 0.1} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
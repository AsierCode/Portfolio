import React from 'react';
import { Project } from '../types';
import ProjectCard from './ProjectCard';
import { Language } from '../App';
import { uiStrings } from '../uiStrings';

interface ProjectsSectionProps {
  id: string;
  projects: Project[];
  language: Language;
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ id, projects, language }) => {
  let gridClasses = "grid gap-10 "; 

  if (projects.length === 1) {
    gridClasses += "grid-cols-1 md:max-w-lg lg:max-w-xl mx-auto";
  } else if (projects.length === 2) {
    gridClasses += "grid-cols-1 md:grid-cols-2";
  } else { 
    gridClasses += "grid-cols-1 md:grid-cols-2 lg:grid-cols-3";
  }

  const title = uiStrings.projectsTitle[language];

  return (
    <section id={id} className="py-16 md:py-24 bg-slate-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-sky-400">
          <span className="title-underline">{title}</span>
        </h2>
        <div className={gridClasses}>
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              animationDelay={0.1 + index * 0.1} 
              language={language}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

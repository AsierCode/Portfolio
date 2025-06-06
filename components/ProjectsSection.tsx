import React from 'react';
import { Project as ProjectType, UIStrings } from '../types'; // Renamed
import ProjectCard from './ProjectCard';

interface ProjectsSectionProps {
  id: string;
  projects: ProjectType[];
  uiStrings: UIStrings;
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ id, projects, uiStrings }) => {
  let gridClasses = "grid gap-10 ";

  if (projects.length === 1) {
    gridClasses += "grid-cols-1 md:max-w-lg lg:max-w-xl mx-auto";
  } else if (projects.length === 2) {
    gridClasses += "grid-cols-1 md:grid-cols-2";
  } else {
    gridClasses += "grid-cols-1 md:grid-cols-2 lg:grid-cols-3";
  }

  return (
    <section id={id} className="py-16 md:py-24 bg-slate-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-sky-400">
          <span className="title-underline">{uiStrings.PROJECTS_TITLE}</span>
        </h2>
        <div className={gridClasses}>
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              uiStrings={uiStrings}
              animationDelay={0.1 + index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
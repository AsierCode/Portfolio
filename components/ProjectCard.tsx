import React from 'react';
import { Project } from '../types';
import { GitHubIcon, LinkIcon } from './IconComponents';
import { Language } from '../App';
import { uiStrings } from '../uiStrings';

interface ProjectCardProps {
  project: Project;
  animationDelay?: number;
  language: Language;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, animationDelay = 0, language }) => {
  const title = language === 'es' ? project.titleEs : project.titleEn;
  const description = language === 'es' ? project.descriptionEs : project.descriptionEn;
  const liveDemoText = uiStrings.liveDemo[language];
  const sourceCodeText = uiStrings.sourceCode[language];
  const technologiesText = uiStrings.technologies[language];

  return (
    <div 
      className="bg-slate-700/80 backdrop-blur-sm rounded-xl shadow-2xl overflow-hidden flex flex-col group transition-all duration-300 hover:shadow-sky-500/40 transform hover:scale-[1.03] opacity-0-initial animate-fadeInUp"
      style={{ animationDelay: `${animationDelay}s` }}
    >
      <div className="overflow-hidden">
        <img 
          src={project.imageUrl} 
          alt={title} 
          className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500 ease-out" 
          onError={(e) => {
            console.error("Failed to load project image:", project.imageUrl, e);
            (e.currentTarget as HTMLImageElement).src = 'https://picsum.photos/600/400?grayscale&blur=2';
          }}
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-semibold mb-3 text-sky-300 group-hover:text-sky-200 transition-colors">{title}</h3>
        <p className="text-slate-300 text-sm mb-4 leading-relaxed flex-grow">{description}</p>
        <div className="mb-4">
          <h4 className="text-xs font-semibold text-slate-400 mb-2 uppercase tracking-wider">{technologiesText}</h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => ( // Technologies usually not translated
              <span
                key={tech}
                className="bg-sky-500/20 text-sky-300 px-2.5 py-1 text-xs rounded-full font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        <div className="mt-auto pt-4 border-t border-slate-600/70 flex justify-start space-x-4">
          {project.liveUrl && project.liveUrl !== "#" && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-400 hover:text-sky-300 transition-colors flex items-center text-sm font-medium"
              aria-label={`${liveDemoText} of ${title}`}
            >
              <LinkIcon className="w-4 h-4 mr-1.5" />
              {liveDemoText}
            </a>
          )}
          {project.repoUrl && project.repoUrl !== "#" && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-sky-300 transition-colors flex items-center text-sm font-medium"
              aria-label={`${sourceCodeText} for ${title}`}
            >
              <GitHubIcon className="w-4 h-4 mr-1.5" />
              {sourceCodeText}
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

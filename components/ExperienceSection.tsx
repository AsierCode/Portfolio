import React from 'react';
import { ExperienceEntry } from '../types';
import { BriefcaseIcon } from './IconComponents'; // Assuming BriefcaseIcon exists

interface ExperienceSectionProps {
  id: string;
  experience: ExperienceEntry[];
}

const ExperienceSection: React.FC<ExperienceSectionProps> = ({ id, experience }) => {
  if (!experience || experience.length === 0) {
    return null;
  }

  return (
    <section id={id} className="py-16 md:py-24 bg-slate-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-sky-400">
          <span className="title-underline">Experiencia Profesional</span>
        </h2>
        <div className="space-y-12">
          {experience.map((entry, index) => (
            <div
              key={index}
              className="bg-slate-800/70 backdrop-blur-sm p-6 md:p-8 rounded-xl shadow-2xl hover:shadow-sky-500/40 transition-all duration-300 transform hover:-translate-y-1 opacity-0-initial animate-fadeInUp"
              style={{ animationDelay: `${0.1 + index * 0.2}s` }}
            >
              <div className="flex flex-col sm:flex-row items-start mb-3">
                <span className="mr-4 text-sky-400 mb-3 sm:mb-0 flex-shrink-0">
                  <BriefcaseIcon className="w-10 h-10" />
                </span>
                <div className="w-full">
                  <div className="flex flex-col sm:flex-row justify-between items-baseline">
                    <h3 className="text-xl lg:text-2xl font-semibold text-sky-300">{entry.role}</h3>
                    <p className="text-sm text-slate-500 mt-1 sm:mt-0 whitespace-nowrap">{entry.years}</p>
                  </div>
                  <p className="text-md lg:text-lg text-slate-300">{entry.company}</p>
                </div>
              </div>
              
              {Array.isArray(entry.description) ? (
                <ul className="list-disc list-inside text-slate-300 text-sm md:text-base leading-relaxed space-y-1.5 mt-3 pl-2 md:pl-14">
                  {entry.description.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-slate-300 text-sm md:text-base leading-relaxed mt-3 pl-2 md:pl-14">
                  {entry.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
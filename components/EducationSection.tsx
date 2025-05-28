import React from 'react';
import { EducationEntry } from '../types';
import { AcademicCapIcon } from './IconComponents';

interface EducationSectionProps {
  id: string;
  education: EducationEntry[];
}

const EducationSection: React.FC<EducationSectionProps> = ({ id, education }) => {
  if (!education || education.length === 0) {
    return null;
  }

  return (
    <section id={id} className="py-16 md:py-24 bg-slate-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-sky-400">
          <span className="title-underline">Formación Académica</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {education.map((entry, index) => (
            <div
              key={index}
              className="bg-slate-800 p-6 rounded-xl shadow-xl hover:shadow-sky-500/30 transition-all duration-300 transform hover:-translate-y-1.5 opacity-0-initial animate-fadeInUp"
              style={{ animationDelay: `${0.1 + index * 0.15}s` }}
            >
              <div className="flex items-start mb-3">
                <span className="mr-4 text-sky-400 pt-1">
                  <AcademicCapIcon className="w-8 h-8" />
                </span>
                <div>
                  <h3 className="text-xl font-semibold text-sky-300">{entry.degree}</h3>
                  <p className="text-md text-slate-400">{entry.institution}</p>
                  <p className="text-sm text-slate-500">{entry.years}</p>
                </div>
              </div>
              {entry.description && (
                <p className="text-slate-300 text-sm leading-relaxed mt-2 pl-12">
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

export default EducationSection;
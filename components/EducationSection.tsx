import React from 'react';
import { EducationEntry as EducationEntryType } from '../types';
import { AcademicCapIcon } from './IconComponents';
import { Language } from '../App';
import { uiStrings } from '../uiStrings';

interface EducationSectionProps {
  id: string;
  education: EducationEntryType[];
  language: Language;
}

const EducationSection: React.FC<EducationSectionProps> = ({ id, education, language }) => {
  if (!education || education.length === 0) {
    return null;
  }

  const title = uiStrings.educationTitle[language];

  return (
    <section id={id} className="py-16 md:py-24 bg-slate-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-sky-400">
          <span className="title-underline">{title}</span>
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
                  <h3 className="text-xl font-semibold text-sky-300">
                    {language === 'es' ? entry.degreeEs : entry.degreeEn}
                  </h3>
                  <p className="text-md text-slate-400">
                    {language === 'es' ? entry.institutionEs : entry.institutionEn}
                  </p>
                  <p className="text-sm text-slate-500">{entry.years}</p>
                </div>
              </div>
              {(language === 'es' ? entry.descriptionEs : entry.descriptionEn) && (
                <p className="text-slate-300 text-sm leading-relaxed mt-2 pl-12">
                  {language === 'es' ? entry.descriptionEs : entry.descriptionEn}
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

import React from 'react';
import { SkillCategory as SkillCategoryType } from '../types';
import { Language } from '../App';
import { uiStrings } from '../uiStrings';

interface SkillsSectionProps {
  id: string;
  skills: SkillCategoryType[];
  language: Language;
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ id, skills, language }) => {
  const title = uiStrings.skillsTitle[language];
  return (
    <section id={id} className="py-16 md:py-24 bg-slate-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-sky-400">
           <span className="title-underline">{title}</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((category, index) => (
            <div
              key={language === 'es' ? category.nameEs : category.nameEn}
              className="bg-slate-800 p-6 rounded-xl shadow-xl hover:shadow-sky-500/30 transition-all duration-300 transform hover:-translate-y-1.5 opacity-0-initial animate-fadeInUp hover:ring-2 hover:ring-sky-500/60"
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              <div className="flex items-center mb-4">
                {category.icon && <span className="mr-3 text-sky-400">{category.icon}</span>}
                <h3 className="text-xl font-semibold text-sky-300">
                  {language === 'es' ? category.nameEs : category.nameEn}
                </h3>
              </div>
              <ul className="space-y-2.5">
                {category.skills.map((skill) => (
                  <li key={language === 'es' ? skill.nameEs : skill.nameEn} className="flex items-center text-slate-300">
                    <svg 
                      className="w-4 h-4 mr-2.5 text-sky-500 flex-shrink-0" 
                      fill="currentColor" 
                      viewBox="0 0 20 20" 
                      aria-hidden="true"
                    >
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    {language === 'es' ? skill.nameEs : skill.nameEn}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

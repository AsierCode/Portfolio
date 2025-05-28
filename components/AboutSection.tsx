import React from 'react';
import { Language } from '../App';
import { uiStrings } from '../uiStrings';

interface AboutSectionProps {
  id: string;
  descriptionEs: string;
  descriptionEn: string;
  profileImageUrl?: string; 
  name: string; // For alt text primarily
  language: Language;
}

const AboutSection: React.FC<AboutSectionProps> = ({ id, descriptionEs, descriptionEn, profileImageUrl, name, language }) => {
  const description = language === 'es' ? descriptionEs : descriptionEn;
  const title = uiStrings.aboutTitle[language];
  
  const paragraphs = description.split(/\n\s*\n/); 

  return (
    <section id={id} className="py-20 md:py-28 bg-slate-800 overflow-hidden">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-20 text-sky-400">
          <span className="title-underline">{title}</span>
        </h2>
        
        <div className="flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-16">
          {profileImageUrl && (
            <div className="w-full md:w-1/6 lg:w-[12.5%] flex-shrink-0 opacity-0-initial animate-fadeIn animation-delay-200">
              <img 
                src={profileImageUrl} 
                alt={name || 'Profile'} 
                className="rounded-xl shadow-2xl w-64 h-64 md:w-full md:h-auto object-cover mx-auto md:mx-0 border-4 border-slate-700 transition-all duration-300 ease-out transform hover:scale-110 hover:shadow-sky-500/30"
                onError={(e) => {
                  console.error("Failed to load profile image:", profileImageUrl, e);
                  const target = e.currentTarget as HTMLImageElement;
                  const altName = name || 'User';
                  target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(altName)}&background=0ea5e9&color=fff&size=400&font-size=0.33&bold=true&rounded=true`;
                  target.alt = `Placeholder image for ${altName}`;
                }}
              />
            </div>
          )}
          
          <div className={` ${profileImageUrl ? 'md:w-5/6 lg:w-[87.5%]' : 'max-w-3xl mx-auto text-center'}`}>
            <div className="opacity-0-initial animate-fadeInUp animation-delay-400">
              {paragraphs.map((paragraph, index) => (
                <p 
                  key={index} 
                  className="text-lg md:text-xl text-slate-300 leading-relaxed mb-4 opacity-0-initial animate-fadeInUp"
                  style={{ animationDelay: `${0.5 + index * 0.15}s` }}
                >
                  {paragraph.trim().split(/(?<=\.)\s+/).join(' ')}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

import React from 'react';
// Fix: Import PERSONAL_INFO
import { PERSONAL_INFO } from '../constants';

interface AboutSectionProps {
  id: string;
  description: string;
  profileImageUrl?: string; 
}

const AboutSection: React.FC<AboutSectionProps> = ({ id, description, profileImageUrl }) => {
  // Split by explicit newlines first, then by sentences if needed, or treat as paragraphs.
  const paragraphs = description.split(/\n\s*\n/); // Split by one or more empty lines

  return (
    <section id={id} className="py-20 md:py-28 bg-slate-800 overflow-hidden">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-20 text-sky-400">
          <span className="title-underline">Sobre Mí</span>
        </h2>
        
        <div className="flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-16">
          {profileImageUrl && (
            <div className="w-full md:w-1/6 lg:w-[12.5%] flex-shrink-0 opacity-0-initial animate-fadeIn animation-delay-200"> {/* Container for image */}
              <img 
                src={profileImageUrl} 
                alt={PERSONAL_INFO.name} 
                className="rounded-xl shadow-2xl w-64 h-64 md:w-full md:h-auto object-cover mx-auto md:mx-0 border-4 border-slate-700 transition-all duration-300 ease-out transform hover:scale-110 hover:shadow-sky-500/30" /* Reverted scaling */
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(PERSONAL_INFO.name)}&background=0ea5e9&color=fff&size=400&font-size=0.33&bold=true&rounded=true`;
                  (e.currentTarget as HTMLImageElement).alt = `Placeholder image for ${PERSONAL_INFO.name}`;
                }}
              />
            </div>
          )}
          
          <div className={` ${profileImageUrl ? 'md:w-5/6 lg:w-[87.5%]' : 'max-w-3xl mx-auto text-center'}`}> {/* Text container */}
            <div className="opacity-0-initial animate-fadeInUp animation-delay-400">
              {paragraphs.map((paragraph, index) => (
                <p 
                  key={index} 
                  className="text-lg md:text-xl text-slate-300 leading-relaxed mb-4 opacity-0-initial animate-fadeInUp"
                  style={{ animationDelay: `${0.5 + index * 0.15}s` }}
                >
                  {paragraph.trim().split(/(?<=\.)\s+/).join(' ')} {/* Join sentences within paragraph if needed */}
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
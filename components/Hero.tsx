import React from 'react';
import { PersonalInfo, UIStrings } from '../types';

interface HeroProps {
  id: string;
  personalInfo: PersonalInfo;
  uiStrings: UIStrings;
}

const Hero: React.FC<HeroProps> = ({ id, personalInfo, uiStrings }) => {
  const cvButtonDelay = personalInfo.cvUrl ? 'animation-delay-700' : 'animation-delay-500';
  const contactButtonDelay = personalInfo.cvUrl ? 'animation-delay-900' : 'animation-delay-700';

  const numSparkles = 20;

  return (
    <section
      id={id}
      className="bg-gradient-to-br from-slate-900 via-sky-900/30 to-slate-900 text-slate-100 py-24 md:py-32 lg:py-40 flex items-center justify-center relative overflow-hidden"
      style={{ minHeight: 'calc(100vh - 80px)' }}
    >
      <div
        className="absolute top-[-5%] left-[5%] w-72 h-72 bg-sky-500/25 rounded-full filter blur-3xl z-0"
        style={{ animation: 'float1 25s infinite ease-in-out' }}
        aria-hidden="true"
      ></div>
      <div
        className="absolute bottom-[10%] right-[10%] w-96 h-96 bg-sky-600/20 rounded-full filter blur-3xl z-0"
        style={{ animation: 'float2 30s infinite ease-in-out 2s' }}
        aria-hidden="true"
      ></div>
       <div
        className="absolute top-[30%] left-[calc(50%-10rem)] w-80 h-80 bg-slate-700/25 rounded-full filter blur-2xl z-0"
        style={{ animation: 'float3 22s infinite ease-in-out 1s' }}
        aria-hidden="true"
      ></div>

      {Array.from({ length: numSparkles }).map((_, index) => {
        const size = Math.random() * 3 + 2;
        const duration = Math.random() * 2 + 1.5;
        const delay = Math.random() * 3;
        return (
          <div
            key={index}
            className="absolute bg-white rounded-full filter blur-[1px] pointer-events-none z-1"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `sparkleAnimation ${duration}s infinite ease-in-out ${delay}s`,
            }}
            aria-hidden="true"
          ></div>
        );
      })}

      <div className="container mx-auto px-6 text-center relative z-10">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 opacity-0-initial animate-fadeInUp animation-delay-100">
          <span className="block text-slate-300">{uiStrings.HERO_GREETING}</span>
          <span className="block bg-gradient-to-r from-sky-400 via-cyan-300 to-indigo-400 bg-clip-text text-transparent animate-[animateGradientText_3s_ease-in-out_infinite]" style={{ backgroundSize: '200% auto' }}>
            {personalInfo.name}
          </span>
        </h1>
        <p className="text-xl sm:text-2xl md:text-3xl text-slate-300 mb-10 max-w-3xl mx-auto opacity-0-initial animate-fadeInUp animation-delay-300">
          {personalInfo.tagline}
        </p>
        <div className="space-y-4 sm:space-y-0 sm:space-x-4 md:space-x-6 flex flex-col sm:flex-row justify-center items-center">
          <a
            href="#projects"
            className="opacity-0-initial animate-fadeInUp animation-delay-500 bg-sky-500 hover:bg-sky-600 text-white font-semibold py-3 px-8 rounded-lg text-lg shadow-lg transform transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-opacity-75"
          >
            {uiStrings.SEE_MY_PROJECTS}
          </a>
          {personalInfo.cvUrl && (
             <a
                href={personalInfo.cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`opacity-0-initial animate-fadeInUp ${cvButtonDelay} border-2 border-sky-500 text-sky-400 hover:bg-sky-500 hover:text-white font-semibold py-3 px-8 rounded-lg text-lg shadow-lg transform transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-opacity-75`}
              >
                {uiStrings.DOWNLOAD_CV}
              </a>
          )}
          <a
            href="#contact"
            className={`opacity-0-initial animate-fadeInUp ${contactButtonDelay} border-2 border-slate-600 text-slate-300 hover:bg-slate-700 hover:text-white font-semibold py-3 px-8 rounded-lg text-lg shadow-lg transform transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-opacity-75`}
          >
            {uiStrings.CONTACT_ME}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
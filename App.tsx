import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import EducationSection from './components/EducationSection';
import ExperienceSection from './components/ExperienceSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import BackToTopButton from './components/BackToTopButton';
import { PERSONAL_INFO, SKILLS_DATA, PROJECTS_DATA, EDUCATION_DATA, EXPERIENCE_DATA, NAV_LINKS } from './constants';

export type Language = 'es' | 'en';

const App: React.FC = () => {
  const [language, setLanguage] = useState<Language>('es');

  useEffect(() => {
    const timer = setTimeout(() => {
      const preloader = document.getElementById('preloader');
      if (preloader) {
        preloader.classList.add('hidden');
      }
    }, 300); 

    // Set HTML lang attribute
    document.documentElement.lang = language;

    return () => clearTimeout(timer);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(prevLang => prevLang === 'es' ? 'en' : 'es');
  };

  const sectionIds = NAV_LINKS.map(link => link.href.substring(1));

  return (
    <div className="min-h-screen flex flex-col">
      <Header 
        name={PERSONAL_INFO.name} 
        sectionIds={sectionIds} 
        language={language}
        toggleLanguage={toggleLanguage}
        navLinks={NAV_LINKS}
      />
      <main className="flex-grow">
        <Hero 
          id="hero-section" 
          name={PERSONAL_INFO.name} 
          taglineEs={PERSONAL_INFO.taglineEs}
          taglineEn={PERSONAL_INFO.taglineEn}
          language={language}
          cvUrl={PERSONAL_INFO.cvUrl}
        />
        <AboutSection 
          id="about" 
          descriptionEs={PERSONAL_INFO.descriptionEs} 
          descriptionEn={PERSONAL_INFO.descriptionEn}
          profileImageUrl={PERSONAL_INFO.profileImageUrl}
          name={PERSONAL_INFO.name}
          language={language}
        />
        <EducationSection id="education" education={EDUCATION_DATA} language={language} />
        <ExperienceSection id="experience" experience={EXPERIENCE_DATA} language={language} />
        <SkillsSection id="skills" skills={SKILLS_DATA} language={language} />
        <ProjectsSection id="projects" projects={PROJECTS_DATA} language={language} />
        <ContactSection 
          id="contact" 
          email={PERSONAL_INFO.email} 
          linkedinUrl={PERSONAL_INFO.linkedinUrl} 
          githubUrl={PERSONAL_INFO.githubUrl}
          phone={PERSONAL_INFO.phone}
          location={PERSONAL_INFO.location}
          language={language}
        />
      </main>
      <Footer name={PERSONAL_INFO.name} language={language} />
      <BackToTopButton />
    </div>
  );
};

export default App;

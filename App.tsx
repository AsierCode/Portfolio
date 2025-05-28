import React, { useEffect, useState, useMemo } from 'react';
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
import PeekingCat from './components/PeekingCat'; // Import the new component
import { CONTENT_BY_LANG } from './constants';
import { Language, LocalizedContent } from './types';

const App: React.FC = () => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>('es');

  useEffect(() => {
    const timer = setTimeout(() => {
      const preloader = document.getElementById('preloader');
      if (preloader) {
        preloader.classList.add('hidden');
      }
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const toggleLanguage = () => {
    setCurrentLanguage(prevLang => (prevLang === 'es' ? 'en' : 'es'));
  };

  const currentContent: LocalizedContent = useMemo(() => {
    return CONTENT_BY_LANG[currentLanguage];
  }, [currentLanguage]);

  useEffect(() => {
    document.documentElement.lang = currentLanguage;
    document.title = currentContent.UI_STRINGS.APP_TITLE_SUFFIX;
  }, [currentLanguage, currentContent.UI_STRINGS.APP_TITLE_SUFFIX]);

  const sectionIds = currentContent.NAV_LINKS.map(link => link.href.substring(1));

  return (
    <div className="min-h-screen flex flex-col">
      <Header
        name={currentContent.PERSONAL_INFO.name}
        navLinks={currentContent.NAV_LINKS}
        sectionIds={sectionIds}
        currentLanguage={currentLanguage}
        toggleLanguage={toggleLanguage}
        uiStrings={currentContent.UI_STRINGS}
      />
      <main className="flex-grow">
        <Hero
          id="hero-section"
          personalInfo={currentContent.PERSONAL_INFO}
          uiStrings={currentContent.UI_STRINGS}
        />
        <AboutSection
          id="about"
          personalInfo={currentContent.PERSONAL_INFO}
          uiStrings={currentContent.UI_STRINGS}
        />
        <EducationSection
          id="education"
          education={currentContent.EDUCATION_DATA}
          uiStrings={currentContent.UI_STRINGS}
        />
        <ExperienceSection
          id="experience"
          experience={currentContent.EXPERIENCE_DATA}
          uiStrings={currentContent.UI_STRINGS}
        />
        <SkillsSection
          id="skills"
          skills={currentContent.SKILLS_DATA}
          uiStrings={currentContent.UI_STRINGS}
        />
        <ProjectsSection
          id="projects"
          projects={currentContent.PROJECTS_DATA}
          uiStrings={currentContent.UI_STRINGS}
        />
        <ContactSection
          id="contact"
          personalInfo={currentContent.PERSONAL_INFO}
          uiStrings={currentContent.UI_STRINGS}
        />
      </main>
      <Footer
        name={currentContent.PERSONAL_INFO.name}
        uiStrings={currentContent.UI_STRINGS}
      />
      <BackToTopButton uiStrings={currentContent.UI_STRINGS} />
      <PeekingCat /> {/* Add the PeekingCat component here */}
    </div>
  );
};

export default App;
import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import EducationSection from './components/EducationSection';
import ExperienceSection from './components/ExperienceSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
// import TestimonialsSection from './components/TestimonialsSection'; // Removed
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import BackToTopButton from './components/BackToTopButton';
import { PERSONAL_INFO, SKILLS_DATA, PROJECTS_DATA, EDUCATION_DATA, EXPERIENCE_DATA, NAV_LINKS } from './constants'; // TESTIMONIALS_DATA removed

const App: React.FC = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      const preloader = document.getElementById('preloader');
      if (preloader) {
        preloader.classList.add('hidden');
      }
    }, 300); // Small delay for visual smoothness

    return () => clearTimeout(timer);
  }, []);

  const sectionIds = NAV_LINKS.map(link => link.href.substring(1));


  return (
    <div className="min-h-screen flex flex-col">
      <Header name={PERSONAL_INFO.name} sectionIds={sectionIds} />
      <main className="flex-grow">
        <Hero id="hero-section" name={PERSONAL_INFO.name} tagline={PERSONAL_INFO.tagline} />
        <AboutSection 
          id="about" 
          description={PERSONAL_INFO.description} 
          profileImageUrl={PERSONAL_INFO.profileImageUrl}
        />
        <EducationSection id="education" education={EDUCATION_DATA} />
        <ExperienceSection id="experience" experience={EXPERIENCE_DATA} />
        <SkillsSection id="skills" skills={SKILLS_DATA} />
        <ProjectsSection id="projects" projects={PROJECTS_DATA} />
        {/* <TestimonialsSection id="testimonials" testimonials={TESTIMONIALS_DATA} /> */} {/* Removed */}
        <ContactSection 
          id="contact" 
          email={PERSONAL_INFO.email} 
          linkedinUrl={PERSONAL_INFO.linkedinUrl} 
          githubUrl={PERSONAL_INFO.githubUrl}
          phone={PERSONAL_INFO.phone}
          location={PERSONAL_INFO.location}
        />
      </main>
      <Footer name={PERSONAL_INFO.name} />
      <BackToTopButton />
    </div>
  );
};

export default App;
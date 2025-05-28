
import React, { useState, useEffect, useRef } from 'react';
import { NavLink as NavLinkType } from '../types';
import { MenuIcon, CloseIcon } from './IconComponents';
import { Language } from '../App'; // Assuming Language type is exported from App.tsx
import { uiStrings } from '../uiStrings';

interface HeaderProps {
  name: string;
  sectionIds: string[];
  language: Language;
  toggleLanguage: () => void;
  navLinks: NavLinkType[];
}

const Header: React.FC<HeaderProps> = ({ name, sectionIds, language, toggleLanguage, navLinks }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(sectionIds[0] || null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (sectionIds.length > 0) {
        const currentHash = window.location.hash.substring(1);
        if (sectionIds.includes(currentHash)) {
            setActiveSection(currentHash);
        } else {
             setActiveSection(sectionIds[0]);
        }
    }

    const headerHeight = headerRef.current?.offsetHeight || 80; 

    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: `-${headerHeight + 10}px 0px -${window.innerHeight - headerHeight - 50}px 0px`,
      threshold: 0.01,
    };

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    observerRef.current = new IntersectionObserver(observerCallback, observerOptions);
    const currentObserver = observerRef.current;

    sectionIds.forEach(id => {
      const element = document.getElementById(id);
      if (element) {
        currentObserver.observe(element);
      }
    });

    return () => {
      sectionIds.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
          currentObserver.unobserve(element);
        }
      });
    };
  }, [sectionIds]);


  const handleNavLinkClick = (hash: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(hash.substring(1));
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const languageButtonText = `${uiStrings.languageButtonIcon} ${uiStrings.currentLanguageDisplay[language]}`;

  return (
    <header ref={headerRef} className="bg-slate-900/80 backdrop-blur-md sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a 
          href="#hero-section" 
          onClick={() => handleNavLinkClick("#hero-section")}
          className="text-2xl font-bold text-sky-400 hover:text-sky-300 transition-colors"
        >
          {name.split(' ')[0]}<span className="text-slate-100">{name.split(' ').slice(1).join(' ')}</span>
        </a>
        
        <nav className="hidden md:flex items-center space-x-1">
          {navLinks.map((link: NavLinkType) => (
            <a
              key={link.labelEs} // Use a consistent key
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavLinkClick(link.href);
              }}
              className={`px-3 py-2 rounded-md text-sm transition-colors duration-200 ease-in-out
                ${activeSection === link.href.substring(1) 
                  ? 'font-semibold text-sky-400 bg-sky-500/10' 
                  : 'text-slate-300 hover:text-sky-400 hover:bg-sky-500/5'
                }`}
            >
              {language === 'es' ? link.labelEs : link.labelEn}
            </a>
          ))}
          <button
            onClick={toggleLanguage}
            className="px-3 py-2 rounded-md text-sm text-slate-300 hover:text-sky-400 hover:bg-sky-500/5 transition-colors duration-200 ease-in-out"
            aria-label={`Switch language to ${language === 'es' ? 'English' : 'Español'}`}
          >
            {languageButtonText}
          </button>
        </nav>

        <div className="md:hidden flex items-center">
          <button
            onClick={toggleLanguage}
            className="mr-3 p-2 rounded-md text-slate-300 hover:text-sky-400 focus:outline-none"
            aria-label={`Switch language to ${language === 'es' ? 'English' : 'Español'}`}
          >
            {languageButtonText}
          </button>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-slate-300 hover:text-sky-400 focus:outline-none"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <CloseIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-slate-800 shadow-xl">
          <nav className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link: NavLinkType) => (
              <a
                key={link.labelEs} // Use a consistent key
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavLinkClick(link.href);
                }}
                className={`block px-3 py-2 rounded-md text-base transition-colors duration-200 ease-in-out
                  ${activeSection === link.href.substring(1) 
                    ? 'font-medium text-sky-300 bg-sky-500/20' 
                    : 'text-slate-200 hover:bg-slate-700 hover:text-sky-300'
                  }`}
              >
                {language === 'es' ? link.labelEs : link.labelEn}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;

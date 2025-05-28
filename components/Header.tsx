import React, { useState, useEffect, useRef } from 'react';
import { NavLink as NavLinkType, Language, UIStrings } from '../types';
import { MenuIcon, CloseIcon } from './IconComponents';

interface HeaderProps {
  name: string;
  navLinks: NavLinkType[];
  sectionIds: string[];
  currentLanguage: Language;
  toggleLanguage: () => void;
  uiStrings: UIStrings;
}

const Header: React.FC<HeaderProps> = ({ name, navLinks, sectionIds, currentLanguage, toggleLanguage, uiStrings }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (sectionIds.length > 0) {
      const currentHash = window.location.hash.substring(1);
      setActiveSection(sectionIds.includes(currentHash) ? currentHash : sectionIds[0]);
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
      if (element) currentObserver.observe(element);
    });

    return () => {
      sectionIds.forEach(id => {
        const element = document.getElementById(id);
        if (element) currentObserver.unobserve(element);
      });
    };
  }, [sectionIds]);

  const handleNavLinkClick = (hash: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(hash.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      // Consider setting active section here for immediate feedback if observer is too slow
      // setActiveSection(hash.substring(1)); 
    }
  };

  return (
    <header ref={headerRef} className="bg-slate-900/80 backdrop-blur-md sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
        <a
          href="#hero-section"
          onClick={(e) => { e.preventDefault(); handleNavLinkClick("#hero-section"); }}
          className="text-2xl font-bold text-sky-400 hover:text-sky-300 transition-colors"
        >
          {name.split(' ')[0]}<span className="text-slate-100">{name.split(' ').slice(1).join(' ')}</span>
        </a>

        {/* Desktop Navigation & Language Toggle */}
        <div className="hidden md:flex items-center space-x-1">
          <nav className="flex space-x-1">
            {navLinks.map((link: NavLinkType) => (
              <a
                key={link.label}
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
                {link.label}
              </a>
            ))}
          </nav>
          <button
            onClick={toggleLanguage}
            className="ml-2 px-3 py-2 rounded-md text-sm font-medium text-slate-300 hover:text-sky-400 hover:bg-sky-500/10 transition-colors"
            aria-label={`Switch to ${currentLanguage === 'es' ? uiStrings.SWITCH_TO_LANGUAGE_NAME : uiStrings.SWITCH_TO_LANGUAGE_NAME}`}
          >
            {uiStrings.LANGUAGE_TOGGLE_BUTTON_TEXT(currentLanguage === 'es' ? 'en' : 'es')}
          </button>
        </div>

        {/* Mobile Menu Button & Language Toggle Container */}
        <div className="md:hidden flex items-center">
           <button
            onClick={toggleLanguage}
            className="mr-2 px-2 py-1 rounded-md text-xs font-medium text-slate-300 hover:text-sky-400 hover:bg-sky-500/10 transition-colors"
            aria-label={`Switch to ${currentLanguage === 'es' ? uiStrings.SWITCH_TO_LANGUAGE_NAME : uiStrings.SWITCH_TO_LANGUAGE_NAME}`}
          >
            {uiStrings.LANGUAGE_TOGGLE_BUTTON_TEXT(currentLanguage === 'es' ? 'en' : 'es')}
          </button>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-slate-300 hover:text-sky-400 focus:outline-none"
            aria-label={isMenuOpen ? uiStrings.CLOSE_MENU_ARIA_LABEL : uiStrings.MENU_ARIA_LABEL}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <CloseIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-slate-800 shadow-xl">
          <nav className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link: NavLinkType) => (
              <a
                key={link.label}
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
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
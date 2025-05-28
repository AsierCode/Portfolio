
import React, { useState, useEffect, useRef } from 'react';
import { NAV_LINKS } from '../constants';
import { NavLink } from '../types';
import { MenuIcon, CloseIcon } from './IconComponents';

interface HeaderProps {
  name: string;
  sectionIds: string[];
}

const Header: React.FC<HeaderProps> = ({ name, sectionIds }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(sectionIds[0] || null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Set initial active section to the first one if available
    if (sectionIds.length > 0) {
        // Check if current hash matches any section, otherwise default to first
        const currentHash = window.location.hash.substring(1);
        if (sectionIds.includes(currentHash)) {
            setActiveSection(currentHash);
        } else {
             setActiveSection(sectionIds[0]);
        }
    }

    const headerHeight = headerRef.current?.offsetHeight || 80; // Estimate or get dynamically

    const observerOptions: IntersectionObserverInit = {
      root: null, // observing intersections relative to the viewport
      rootMargin: `-${headerHeight + 10}px 0px -${window.innerHeight - headerHeight - 50}px 0px`, // Detection zone a bit below header
      threshold: 0.01, // Trigger as soon as a tiny part is visible in the zone
    };

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Prioritize entries that are "more visible" if multiple are intersecting
          // This simple logic takes the one that most recently became intersecting
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
    // setActiveSection(hash.substring(1)); // Optionally set active section immediately on click
    // Smooth scroll will eventually trigger the observer, but this can make it feel more responsive
    const element = document.getElementById(hash.substring(1));
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
  };


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
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-1">
          {NAV_LINKS.map((link: NavLink) => (
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

        {/* Mobile Menu Button */}
        <div className="md:hidden">
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

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-slate-800 shadow-xl">
          <nav className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NAV_LINKS.map((link: NavLink) => (
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
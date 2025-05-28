import React from 'react';
import { GitHubIcon, LinkedInIcon, EmailIcon, PhoneIcon, LocationMarkerIcon } from './IconComponents';
import { Language } from '../App';
import { uiStrings } from '../uiStrings';

interface ContactSectionProps {
  id: string;
  email: string;
  linkedinUrl?: string;
  githubUrl?: string;
  phone?: string;
  location?: string;
  language: Language;
}

const ContactSection: React.FC<ContactSectionProps> = ({ id, email, linkedinUrl, githubUrl, phone, location, language }) => {
  const showLinkedIn = linkedinUrl && linkedinUrl !== "https://www.linkedin.com/in/tu-perfil/" && linkedinUrl !== "";
  const showGitHub = githubUrl && githubUrl !== "https://github.com/tu-usuario" && githubUrl !== "";

  const title = uiStrings.contactTitle[language];
  const subtitle = uiStrings.contactSubtitle[language];
  const sendMessageText = uiStrings.sendMessage[language];
  const findMeOnText = uiStrings.findMeOn[language];

  return (
    <section id={id} className="py-16 md:py-24 bg-slate-900">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-sky-400">
          <span className="title-underline">{title}</span>
        </h2>
        <p className="text-slate-300 mb-10 max-w-xl mx-auto text-lg opacity-0-initial animate-fadeInUp animation-delay-200">
          {subtitle}
        </p>
        
        <div className="max-w-md mx-auto bg-slate-800 p-8 rounded-xl shadow-2xl opacity-0-initial animate-fadeInUp animation-delay-400">
          <a 
            href={`mailto:${email}`} 
            className="block w-full text-center bg-sky-500 hover:bg-sky-600 text-white font-semibold py-3.5 px-6 rounded-lg text-lg shadow-md transition-all duration-300 hover:scale-105 mb-6 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-opacity-75"
          >
            {sendMessageText}
          </a>

          {phone && (
            <a 
              href={`tel:${phone.replace(/\s+/g, '')}`} 
              className="group flex items-center justify-center text-slate-300 hover:text-sky-400 transition-colors py-2.5 mb-3"
              aria-label={`Call ${phone}`}
            >
              <PhoneIcon className="w-5 h-5 mr-2.5 text-sky-500 group-hover:text-sky-400 transition-colors" />
              {phone}
            </a>
          )}

          {location && (
            <p 
              className="group flex items-center justify-center text-slate-300 py-2.5 mb-6"
              aria-label={`Location: ${location}`}
            >
              <LocationMarkerIcon className="w-5 h-5 mr-2.5 text-sky-500" />
              {location}
            </p>
          )}
          
          {(showLinkedIn || showGitHub || email) && (
            <p className="text-slate-400 mb-4 text-sm border-t border-slate-700 pt-6">{findMeOnText}</p>
          )}
          <div className="flex justify-center space-x-6">
            {showLinkedIn && (
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-sky-400 transition-transform duration-300 hover:scale-110"
                aria-label="LinkedIn Profile"
              >
                <LinkedInIcon className="w-9 h-9 sm:w-10 sm:h-10" />
              </a>
            )}
            {showGitHub && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-sky-400 transition-transform duration-300 hover:scale-110"
                aria-label="GitHub Profile"
              >
                <GitHubIcon className="w-9 h-9 sm:w-10 sm:h-10" />
              </a>
            )}
             <a
                href={`mailto:${email}`}
                className="text-slate-400 hover:text-sky-400 transition-transform duration-300 hover:scale-110"
                aria-label="Email Me"
              >
                <EmailIcon className="w-9 h-9 sm:w-10 sm:h-10" />
              </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

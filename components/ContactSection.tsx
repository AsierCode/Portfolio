import React from 'react';
import { GitHubIcon, LinkedInIcon, EmailIcon, PhoneIcon, LocationMarkerIcon } from './IconComponents';
import { PersonalInfo, UIStrings } from '../types';

interface ContactSectionProps {
  id: string;
  personalInfo: PersonalInfo;
  uiStrings: UIStrings;
}

const ContactSection: React.FC<ContactSectionProps> = ({ id, personalInfo, uiStrings }) => {
  const showLinkedIn = personalInfo.linkedinUrl && personalInfo.linkedinUrl !== "https://www.linkedin.com/in/tu-perfil/" && personalInfo.linkedinUrl !== "";
  const showGitHub = personalInfo.githubUrl && personalInfo.githubUrl !== "https://github.com/tu-usuario" && personalInfo.githubUrl !== "";

  return (
    <section id={id} className="py-16 md:py-24 bg-slate-900">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-sky-400">
          <span className="title-underline">{uiStrings.CONTACT_TITLE}</span>
        </h2>
        <p className="text-slate-300 mb-10 max-w-xl mx-auto text-lg opacity-0-initial animate-fadeInUp animation-delay-200">
          {uiStrings.CONTACT_SUBTITLE}
        </p>

        <div className="max-w-md mx-auto bg-slate-800 p-8 rounded-xl shadow-2xl opacity-0-initial animate-fadeInUp animation-delay-400">
          <a
            href={`mailto:${personalInfo.email}`}
            className="block w-full text-center bg-sky-500 hover:bg-sky-600 text-white font-semibold py-3.5 px-6 rounded-lg text-lg shadow-md transition-all duration-300 hover:scale-105 mb-6 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-opacity-75"
          >
            {uiStrings.SEND_EMAIL_BTN}
          </a>

          {personalInfo.phone && (
            <a
              href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
              className="group flex items-center justify-center text-slate-300 hover:text-sky-400 transition-colors py-2.5 mb-3"
              aria-label={uiStrings.CONTACT_PHONE_LABEL(personalInfo.phone)}
            >
              <PhoneIcon className="w-5 h-5 mr-2.5 text-sky-500 group-hover:text-sky-400 transition-colors" />
              {personalInfo.phone}
            </a>
          )}

          {personalInfo.location && (
            <p
              className="group flex items-center justify-center text-slate-300 py-2.5 mb-6"
              aria-label={personalInfo.location ? uiStrings.CONTACT_LOCATION_LABEL(personalInfo.location) : undefined}
            >
              <LocationMarkerIcon className="w-5 h-5 mr-2.5 text-sky-500" />
              {personalInfo.location}
            </p>
          )}

          {(showLinkedIn || showGitHub || personalInfo.email) && (
            <p className="text-slate-400 mb-4 text-sm border-t border-slate-700 pt-6">{uiStrings.CONTACT_SOCIAL_PROMPT}</p>
          )}
          <div className="flex justify-center space-x-6">
            {showLinkedIn && personalInfo.linkedinUrl && (
              <a
                href={personalInfo.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-sky-400 transition-transform duration-300 hover:scale-110"
                aria-label={uiStrings.LINKEDIN_PROFILE_ARIA}
              >
                <LinkedInIcon className="w-9 h-9 sm:w-10 sm:h-10" />
              </a>
            )}
            {showGitHub && personalInfo.githubUrl && (
              <a
                href={personalInfo.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-sky-400 transition-transform duration-300 hover:scale-110"
                aria-label={uiStrings.GITHUB_PROFILE_ARIA}
              >
                <GitHubIcon className="w-9 h-9 sm:w-10 sm:h-10" />
              </a>
            )}
             <a
                href={`mailto:${personalInfo.email}`}
                className="text-slate-400 hover:text-sky-400 transition-transform duration-300 hover:scale-110"
                aria-label={uiStrings.EMAIL_ME_ARIA}
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

import React from 'react';
import { Language } from '../App';
import { uiStrings } from '../uiStrings';

interface FooterProps {
  name: string;
  language: Language;
}

const Footer: React.FC<FooterProps> = ({ name, language }) => {
  const currentYear = new Date().getFullYear();
  const allRightsReservedText = uiStrings.allRightsReserved[language];
  const madeWithText = uiStrings.madeWith[language];

  return (
    <footer className="bg-slate-950 text-slate-400 py-8 text-center">
      <div className="container mx-auto px-6">
        <p className="text-sm">
          &copy; {currentYear} {name}. {allRightsReservedText}
        </p>
        <p className="text-xs mt-1">
          {madeWithText} <span className="text-red-500 animate-pulse">❤️</span> React, TypeScript & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

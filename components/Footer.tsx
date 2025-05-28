import React from 'react';
import { UIStrings } from '../types';

interface FooterProps {
  name: string;
  uiStrings: UIStrings;
}

const Footer: React.FC<FooterProps> = ({ name, uiStrings }) => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-slate-950 text-slate-400 py-8 text-center">
      <div className="container mx-auto px-6">
        <p className="text-sm">
          {uiStrings.FOOTER_COPYRIGHT(currentYear, name)}
        </p>
        <p className="text-xs mt-1">
          {uiStrings.FOOTER_MADE_WITH.split('❤️')[0]}
          <span className="text-red-500 animate-pulse">❤️</span>
          {uiStrings.FOOTER_MADE_WITH.split('❤️')[1]}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
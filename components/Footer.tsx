
import React from 'react';

interface FooterProps {
  name: string;
}

const Footer: React.FC<FooterProps> = ({ name }) => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-slate-950 text-slate-400 py-8 text-center">
      <div className="container mx-auto px-6">
        <p className="text-sm">
          &copy; {currentYear} {name}. Todos los derechos reservados.
        </p>
        <p className="text-xs mt-1">
          Hecho con <span className="text-red-500 animate-pulse">❤️</span> y React, TypeScript & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

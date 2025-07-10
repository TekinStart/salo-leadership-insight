
import React from 'react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-salo-purple font-poppins">
              Salo
            </h1>
            <p className="text-sm text-gray-600 font-inter">
              Consultoria estratégica e formação de líderes com visão.
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

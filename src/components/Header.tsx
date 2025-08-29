import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    'Events', 'Tickets', 'Dashboard', 'Team', 'Leaderboard', 'Developers', 'About'
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? 'backdrop-blur-md bg-slate-900/30 border-b border-cyan-400/20 shadow-lg shadow-cyan-400/10' : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-bold text-white hover:scale-105 transition-transform duration-300 cursor-pointer">
            <span className="text-transparent bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text animate-gradient-x">PANTHEON</span> 
            <span className="text-purple-300">2025</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item}
                href="#"
                className="relative text-white hover:text-cyan-400 transition-all duration-300 font-medium group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-green-400 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white hover:text-cyan-400 transition-colors duration-300 hover:scale-110 transform"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 bg-slate-900/60 backdrop-blur-md rounded-xl p-4 border border-cyan-400/20 animate-slide-down">
            {navItems.map((item) => (
              <a
                key={item}
                href="#"
                className="block text-white hover:text-cyan-400 transition-colors duration-300 py-3 font-medium hover:bg-cyan-400/10 rounded-lg px-3"
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
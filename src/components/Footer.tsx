import React from 'react';
import { Twitter, Instagram, Linkedin, Github } from 'lucide-react';

const Footer: React.FC = () => {
  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter', color: 'hover:bg-blue-500' },
    { icon: Instagram, href: '#', label: 'Instagram', color: 'hover:bg-pink-500' },
    { icon: Linkedin, href: '#', label: 'LinkedIn', color: 'hover:bg-blue-600' },
    { icon: Github, href: '#', label: 'GitHub', color: 'hover:bg-gray-700' }
  ];

  return (
    <footer className="py-12 px-4 border-t border-cyan-400/20 bg-slate-900/50 backdrop-blur-xl">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center">
          {/* Logo */}
          <div className="text-3xl font-bold text-white mb-6 hover:scale-105 transition-transform duration-300 cursor-pointer">
            <span className="text-transparent bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text animate-gradient-x">PANTHEON</span> 
            <span className="text-purple-300">2025</span>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-8 animate-fade-in-up">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                aria-label={social.label}
                className={`group w-12 h-12 bg-slate-700/50 ${social.color} rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-125 hover:shadow-xl hover:shadow-cyan-400/30 hover:rotate-12 border border-slate-600 hover:border-cyan-400`}
              >
                <social.icon 
                  className="text-slate-300 group-hover:text-white transition-all duration-300 group-hover:scale-110" 
                  size={20} 
                />
              </a>
            ))}
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center gap-6 mb-8 animate-fade-in-up-delayed">
            {['Events', 'Tickets', 'Dashboard', 'Team', 'Leaderboard', 'Developers', 'About'].map((item) => (
              <a
                key={item}
                href="#"
                className="relative text-slate-300 hover:text-cyan-400 transition-all duration-300 font-medium group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-green-400 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="pt-8 border-t border-cyan-400/20">
            <p className="text-slate-400 animate-fade-in-up-more-delayed">
              © 2025 Pantheon, BIT Mesra. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
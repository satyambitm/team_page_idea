import React from 'react';
import { Users, UserPlus } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="pt-32 pb-16 px-4 relative">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="tech-grid opacity-20"></div>
        <div className="circuit-lines"></div>
      </div>
      
      <div className="container mx-auto max-w-4xl text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in-up">
          Team <span className="text-transparent bg-gradient-to-r from-cyan-400 via-green-400 to-purple-400 bg-clip-text animate-gradient-x">Registration</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up-delayed">
          Form a team and participate in hackathons, coding contests, robotics, AI challenges, and more at Pantheon 2025.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up-more-delayed">
          <button className="group relative bg-gradient-to-r from-cyan-500 to-green-500 hover:from-cyan-400 hover:to-green-400 text-black px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-110 hover:shadow-2xl hover:shadow-cyan-400/50 flex items-center gap-3 min-w-[200px] justify-center glow-on-hover">
            <Users className="group-hover:rotate-12 group-hover:scale-110 transition-transform duration-300" size={24} />
            Create Team
            <div className="absolute inset-0 rounded-xl bg-cyan-400 opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-300"></div>
          </button>
          
          <button className="group relative border-2 border-purple-400 text-purple-400 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-white hover:border-transparent px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-110 flex items-center gap-3 min-w-[200px] justify-center">
            <UserPlus className="group-hover:rotate-12 group-hover:scale-110 transition-transform duration-300" size={24} />
            Join Team
            <div className="absolute inset-0 rounded-xl bg-purple-400 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300"></div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import TeamForm from './components/TeamForm';
import TeamRules from './components/TeamRules';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-x-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-950/40 via-purple-950/60 to-slate-900/80"></div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="floating-particle w-2 h-2 bg-cyan-400 rounded-full absolute top-1/4 left-1/4 animate-float"></div>
        <div className="floating-particle w-3 h-3 bg-green-400 rounded-full absolute top-1/3 right-1/4 animate-float-delayed"></div>
        <div className="floating-particle w-1 h-1 bg-purple-400 rounded-full absolute bottom-1/3 left-1/3 animate-float-slow"></div>
        <div className="floating-particle w-2 h-2 bg-pink-400 rounded-full absolute bottom-1/4 right-1/3 animate-float"></div>
        <div className="floating-particle w-1 h-1 bg-yellow-400 rounded-full absolute top-1/2 left-1/2 animate-float-delayed"></div>
      </div>
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid-pattern"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        <Header />
        <HeroSection />
        <TeamForm />
        <TeamRules />
        <ContactSection />
        <Footer />
      </div>
      
      {/* Animated Decorative Elements */}
      <div className="fixed top-1/4 -left-20 w-40 h-40 bg-cyan-400/20 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="fixed bottom-1/4 -right-20 w-60 h-60 bg-green-400/20 rounded-full blur-3xl animate-pulse-slow-delayed"></div>
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse-ultra-slow"></div>
    </div>
  );
}

export default App;
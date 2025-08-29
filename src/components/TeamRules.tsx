import React from 'react';
import { Users, Shield, FileCheck, Calendar } from 'lucide-react';

const TeamRules: React.FC = () => {
  const rules = [
    {
      icon: Users,
      title: 'Team Size',
      description: 'Maximum team size: 4–6 participants per team.'
    },
    {
      icon: Shield,
      title: 'Institution Rule',
      description: 'All team members must belong to the same institution.'
    },
    {
      icon: FileCheck,
      title: 'ID Verification',
      description: 'ID verification is mandatory for all team members.'
    },
    {
      icon: Calendar,
      title: 'Non-BIT Students',
      description: 'Non-BIT students can only participate in day events.'
    }
  ];

  return (
    <section className="py-16 px-4 relative">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="data-stream opacity-10"></div>
      </div>
      
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Team <span className="text-transparent bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text animate-gradient-x">Rules</span>
          </h2>
          <p className="text-xl text-cyan-200 max-w-2xl mx-auto animate-fade-in-delayed">
            Please read these important guidelines before forming your team
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {rules.map((rule, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-cyan-400/30 hover:border-green-400/50 hover:shadow-2xl hover:shadow-cyan-400/30 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 fade-in-card cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-cyan-500 to-green-500 rounded-xl flex items-center justify-center group-hover:rotate-12 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-cyan-400/30 animate-pulse-glow">
                  <rule.icon className="text-black group-hover:scale-110 transition-transform duration-300" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors duration-300">
                    {rule.title}
                  </h3>
                  <p className="text-slate-300 leading-relaxed group-hover:text-white transition-colors duration-300">
                    {rule.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamRules;
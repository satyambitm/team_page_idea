import React from 'react';
import { MessageCircle, HelpCircle } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <section className="py-16 px-4 relative">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="network-nodes opacity-20"></div>
      </div>
      
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Need <span className="text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text animate-gradient-x">Help?</span>
          </h2>
          <p className="text-xl text-purple-200 animate-fade-in-delayed">
            Get support for team modifications and general queries
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Contact Card */}
          <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-2xl p-8 shadow-xl border border-green-400/30 hover:border-green-400/50 hover:shadow-2xl hover:shadow-green-400/30 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 animate-slide-up">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-cyan-500 rounded-full mb-6 animate-pulse-glow">
                <MessageCircle className="text-black animate-bounce-subtle" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Team Modifications
              </h3>
              <p className="text-slate-300 mb-6 leading-relaxed">
                For any team modifications or changes, contact our support team directly.
              </p>
              <div className="bg-slate-700/50 rounded-xl p-4 mb-6 border border-green-400/30 hover:border-green-400/50 transition-all duration-300">
                <p className="text-sm font-semibold text-green-300 mb-1">Contact Person</p>
                <p className="text-lg font-bold text-white">Mrityunjay Raj</p>
                <p className="text-sm text-slate-300">WhatsApp: 9471828932</p>
              </div>
              <a
                href="https://wa.me/919471828932"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-400 hover:to-emerald-400 text-white px-6 py-3 rounded-xl font-bold transition-all duration-300 transform hover:scale-110 hover:shadow-xl hover:shadow-green-500/50 inline-flex items-center gap-2 animate-glow-pulse"
              >
                <MessageCircle className="group-hover:scale-110 transition-transform duration-300" size={20} />
                WhatsApp Now
                <div className="absolute inset-0 rounded-xl bg-green-400 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300"></div>
              </a>
            </div>
          </div>

          {/* Virtual Helpdesk */}
          <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-2xl p-8 shadow-xl border border-purple-400/30 hover:border-purple-400/50 hover:shadow-2xl hover:shadow-purple-400/30 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 animate-slide-up-delayed">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-6 animate-pulse-glow">
                <HelpCircle className="text-black animate-bounce-subtle" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Virtual Helpdesk
              </h3>
              <p className="text-slate-300 mb-6 leading-relaxed">
                Get instant answers to your questions through our virtual helpdesk system.
              </p>
              <button className="group relative bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white px-6 py-3 rounded-xl font-bold transition-all duration-300 transform hover:scale-110 hover:shadow-xl hover:shadow-purple-600/50 inline-flex items-center gap-2 animate-glow-pulse">
                <HelpCircle className="group-hover:scale-110 transition-transform duration-300" size={20} />
                Open Helpdesk
                <div className="absolute inset-0 rounded-xl bg-purple-500 opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-300"></div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
import React, { useState } from 'react';
import { Send, Users } from 'lucide-react';

interface FormData {
  teamName: string;
  leaderMobile: string;
  studentType: 'bit' | 'nonbit';
}

const TeamForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    teamName: '',
    leaderMobile: '',
    studentType: 'bit'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    console.log('Form submitted:', formData);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      // Show success animation or redirect
    }, 2000);
  };

  return (
    <section className="py-16 px-4 relative">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="tech-circuit opacity-10"></div>
      </div>
      
      <div className="container mx-auto max-w-2xl">
        <div className="bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl rounded-2xl p-8 shadow-2xl border border-cyan-400/30 hover:border-cyan-400/50 transition-all duration-500 hover:shadow-cyan-400/20 animate-slide-up">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-green-500 rounded-full mb-4 animate-pulse-glow">
              <Users className="text-black animate-bounce-subtle" size={32} />
            </div>
            <h2 className="text-3xl font-bold text-white mb-2 animate-fade-in">Create Your Team</h2>
            <p className="text-cyan-300 animate-fade-in-delayed">Join the excitement of Pantheon 2025</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Team Name */}
            <div>
              <label htmlFor="teamName" className="block text-sm font-semibold text-cyan-300 mb-2">
                Team Name *
              </label>
              <input
                type="text"
                id="teamName"
                name="teamName"
                value={formData.teamName}
                onChange={handleInputChange}
                required
                placeholder="Enter your team name"
                className="w-full px-4 py-3 border border-slate-600 rounded-xl focus:ring-4 focus:ring-cyan-400/30 focus:border-cyan-400 outline-none transition-all duration-300 bg-slate-700/50 text-white font-medium placeholder-slate-400 hover:bg-slate-700/70 focus:bg-slate-700/80"
              />
            </div>

            {/* Leader Mobile Number */}
            <div>
              <label htmlFor="leaderMobile" className="block text-sm font-semibold text-cyan-300 mb-2">
                Team Leader Mobile Number *
              </label>
              <input
                type="tel"
                id="leaderMobile"
                name="leaderMobile"
                value={formData.leaderMobile}
                onChange={handleInputChange}
                required
                placeholder="+91 9876543210"
                className="w-full px-4 py-3 border border-slate-600 rounded-xl focus:ring-4 focus:ring-cyan-400/30 focus:border-cyan-400 outline-none transition-all duration-300 bg-slate-700/50 text-white font-medium placeholder-slate-400 hover:bg-slate-700/70 focus:bg-slate-700/80"
              />
            </div>

            {/* Student Type */}
            <div>
              <label className="block text-sm font-semibold text-cyan-300 mb-3">
                Institution Type *
              </label>
              <div className="space-y-3">
                <label className="flex items-center cursor-pointer group hover:bg-slate-700/30 p-3 rounded-lg transition-all duration-300">
                  <input
                    type="radio"
                    name="studentType"
                    value="bit"
                    checked={formData.studentType === 'bit'}
                    onChange={handleInputChange}
                    className="sr-only"
                  />
                  <div className={`w-5 h-5 rounded-full border-2 mr-3 transition-all duration-300 ${
                    formData.studentType === 'bit' 
                      ? 'border-cyan-400 bg-gradient-to-r from-cyan-400 to-green-400 shadow-lg shadow-cyan-400/50' 
                      : 'border-slate-500 group-hover:border-cyan-400 group-hover:shadow-lg group-hover:shadow-cyan-400/30'
                  }`}>
                    {formData.studentType === 'bit' && (
                      <div className="w-2 h-2 bg-black rounded-full mx-auto mt-1 animate-scale-in"></div>
                    )}
                  </div>
                  <span className="text-white font-medium group-hover:text-cyan-300 transition-colors duration-300">BIT Mesra Student</span>
                </label>
                
                <label className="flex items-center cursor-pointer group hover:bg-slate-700/30 p-3 rounded-lg transition-all duration-300">
                  <input
                    type="radio"
                    name="studentType"
                    value="nonbit"
                    checked={formData.studentType === 'nonbit'}
                    onChange={handleInputChange}
                    className="sr-only"
                  />
                  <div className={`w-5 h-5 rounded-full border-2 mr-3 transition-all duration-300 ${
                    formData.studentType === 'nonbit' 
                      ? 'border-purple-400 bg-gradient-to-r from-purple-400 to-pink-400 shadow-lg shadow-purple-400/50' 
                      : 'border-slate-500 group-hover:border-purple-400 group-hover:shadow-lg group-hover:shadow-purple-400/30'
                  }`}>
                    {formData.studentType === 'nonbit' && (
                      <div className="w-2 h-2 bg-black rounded-full mx-auto mt-1 animate-scale-in"></div>
                    )}
                  </div>
                  <span className="text-white font-medium group-hover:text-purple-300 transition-colors duration-300">Non-BIT Student</span>
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`group relative w-full bg-gradient-to-r from-green-500 to-cyan-500 hover:from-green-400 hover:to-cyan-400 text-black px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-green-400/50 flex items-center justify-center gap-3 ${
                isSubmitting ? 'animate-pulse cursor-not-allowed opacity-80' : 'animate-glow-pulse'
              }`}
            >
              <Send className={`transition-transform duration-300 ${
                isSubmitting ? 'animate-spin' : 'group-hover:translate-x-1 group-hover:scale-110'
              }`} size={20} />
              {isSubmitting ? 'Creating Team...' : 'Create Team'}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-green-400 to-cyan-400 opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-300"></div>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default TeamForm;
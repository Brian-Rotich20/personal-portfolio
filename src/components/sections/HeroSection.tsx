import React from 'react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from 'lucide-react';
const HeroSection: React.FC = () => {
  return <section id="hero" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Shiny lighting effect */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-gold opacity-10 rounded-full blur-3xl animate-pulse"></div>
      <div className="relative z-10 w-full animate-fade-in">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          {/* Profile image */}
          <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-gold">
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" alt="Profile" className="w-full h-full object-cover" />
          </div>
          {/* Text content */}
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold mb-2">
              <span className="text-gold">John</span> Doe
            </h1>
            <h2 className="text-xl md:text-2xl mb-6 text-gray-600 dark:text-gray-400">
              Full Stack Developer
            </h2>
            <p className="text-lg max-w-lg mb-8">
              I build exceptional digital experiences that combine stunning
              design with powerful functionality. Specializing in modern web
              technologies and user-focused solutions.
            </p>
            {/* Social media links */}
            <div className="flex items-center justify-center md:justify-start gap-6">
              <a href="#" className="text-gray-600 hover:text-gold dark:text-gray-400 dark:hover:text-gold transition-colors">
                <GithubIcon size={24} />
              </a>
              <a href="#" className="text-gray-600 hover:text-gold dark:text-gray-400 dark:hover:text-gold transition-colors">
                <LinkedinIcon size={24} />
              </a>
              <a href="#" className="text-gray-600 hover:text-gold dark:text-gray-400 dark:hover:text-gold transition-colors">
                <TwitterIcon size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;
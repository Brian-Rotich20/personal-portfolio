import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import ExperienceSection from './components/sections/ExperienceSection';
import TechStackSection from './components/sections/TechStackSection';
import ProjectsSection from './components/sections/ProjectsSection';
import ContactSection from './components/sections/ContactSection';
import ThemeToggle from './components/ThemeToggle';
export function App() {
  const [theme, setTheme] = useState('dark');
  const [activeSection, setActiveSection] = useState('hero');
  useEffect(() => {
    // Check local storage for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    } else {
      // Default to dark mode
      document.documentElement.classList.add('dark');
    }
    // Setup intersection observer for section highlighting
    const sections = document.querySelectorAll('section');
    const observerOptions = {
      threshold: 0.5,
      rootMargin: '0px'
    };
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);
    sections.forEach(section => {
      observer.observe(section);
    });
    return () => {
      sections.forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);
  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
    localStorage.setItem('theme', newTheme);
  };
  return <div className="flex w-full min-h-screen bg-light-200 dark:bg-dark-200 text-dark-100 dark:text-light-100 transition-colors duration-300">
      <Navbar activeSection={activeSection} />
      <main className="flex-1 ml-16 sm:ml-20 overflow-x-hidden">
        <div className="absolute top-4 right-4 z-50">
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        </div>
        <div className="container mx-auto px-4 py-8">
          <HeroSection />
          <AboutSection />
          <ExperienceSection />
          <TechStackSection />
          <ProjectsSection />
          <ContactSection />
        </div>
      </main>
    </div>;
}
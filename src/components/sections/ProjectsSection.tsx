import React, { useEffect, useRef } from 'react';
import { ExternalLinkIcon, GithubIcon } from 'lucide-react';
interface Project {
  title: string;
  description: string;
  image: string;
  stack: string[];
  liveUrl: string;
  githubUrl: string;
}
const projects: Project[] = [{
  title: 'E-Commerce Platform',
  description: 'A full-featured online store with product catalog, cart, and checkout functionality.',
  image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
  stack: ['React', 'Node.js', 'MongoDB', 'Stripe'],
  liveUrl: '#',
  githubUrl: '#'
}, {
  title: 'Task Management App',
  description: 'A productivity tool for organizing tasks with drag-and-drop functionality.',
  image: 'https://images.unsplash.com/photo-1540350394557-8d14678e7f91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80',
  stack: ['React', 'Redux', 'Firebase'],
  liveUrl: '#',
  githubUrl: '#'
}, {
  title: 'Weather Dashboard',
  description: 'Real-time weather forecasting application with interactive maps.',
  image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
  stack: ['JavaScript', 'OpenWeatherAPI', 'Leaflet'],
  liveUrl: '#',
  githubUrl: '#'
}, {
  title: 'Portfolio Website',
  description: 'Personal portfolio showcasing projects and skills with dark mode support.',
  image: 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
  stack: ['React', 'Tailwind CSS', 'Framer Motion'],
  liveUrl: '#',
  githubUrl: '#'
}];
const ProjectsSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        const items = document.querySelectorAll('.project-card');
        items.forEach((item, index) => {
          setTimeout(() => {
            item.classList.add('opacity-100', 'translate-y-0');
          }, index * 200);
        });
      }
    }, {
      threshold: 0.1
    });
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  return <section id="projects" ref={sectionRef} className="min-h-screen flex items-center py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gold">
          Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => <div key={index} className="project-card bg-light-300 dark:bg-dark-100 rounded-lg overflow-hidden shadow-lg opacity-0 translate-y-10 transition-all duration-700 ease-out" style={{
          transitionDelay: `${index * 100}ms`
        }}>
              <div className="h-48 overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.stack.map((tech, i) => <span key={i} className="px-2 py-1 text-xs bg-gray-200 dark:bg-gray-800 rounded-full">
                      {tech}
                    </span>)}
                </div>
                <div className="flex gap-4">
                  <a href={project.liveUrl} className="flex items-center gap-1 text-sm text-gold hover:underline">
                    <ExternalLinkIcon size={16} />
                    Live Preview
                  </a>
                  <a href={project.githubUrl} className="flex items-center gap-1 text-sm text-gold hover:underline">
                    <GithubIcon size={16} />
                    GitHub
                  </a>
                </div>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};
export default ProjectsSection;
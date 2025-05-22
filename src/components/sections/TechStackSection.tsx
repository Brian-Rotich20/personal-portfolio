import React, { useEffect, useRef } from 'react';
interface TechItem {
  name: string;
  icon: string;
}
const frontendTech: TechItem[] = [{
  name: 'HTML',
  icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'
}, {
  name: 'CSS',
  icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'
}, {
  name: 'JavaScript',
  icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
}, {
  name: 'React',
  icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
}, {
  name: 'Next.js',
  icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg'
}, {
  name: 'Tailwind CSS',
  icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg'
}, {
  name: 'Bootstrap',
  icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg'
}];
const backendTech: TechItem[] = [{
  name: 'Django',
  icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg'
}, {
  name: 'PHP',
  icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-plain.svg'
}, {
  name: 'Python',
  icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg'
}, {
  name: 'WordPress',
  icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg'
}, {
  name: 'Git',
  icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg'
}, {
  name: 'GitHub',
  icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg'
}];
const TechStackSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        const frontendItems = document.querySelectorAll('.frontend-item');
        const backendItems = document.querySelectorAll('.backend-item');
        frontendItems.forEach((item, index) => {
          setTimeout(() => {
            item.classList.add('opacity-100', 'scale-100');
          }, index * 100);
        });
        backendItems.forEach((item, index) => {
          setTimeout(() => {
            item.classList.add('opacity-100', 'scale-100');
          }, (index + frontendItems.length) * 100);
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
  return <section id="tech-stack" ref={sectionRef} className="min-h-screen flex items-center py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gold">
          Tech Stack
        </h2>
        <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {/* Frontend */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-center">Frontend</h3>
            <div className="grid grid-cols-3 gap-6">
              {frontendTech.map((tech, index) => <div key={index} className="frontend-item flex flex-col items-center opacity-0 scale-95 transition-all duration-500" style={{
              transitionDelay: `${index * 100}ms`
            }}>
                  <div className="w-16 h-16 mb-2 flex items-center justify-center">
                    <img src={tech.icon} alt={tech.name} className="max-w-full max-h-full" />
                  </div>
                  <p className="text-sm text-center">{tech.name}</p>
                </div>)}
            </div>
          </div>
          {/* Backend */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-center">Backend</h3>
            <div className="grid grid-cols-3 gap-6">
              {backendTech.map((tech, index) => <div key={index} className="backend-item flex flex-col items-center opacity-0 scale-95 transition-all duration-500" style={{
              transitionDelay: `${index * 100}ms`
            }}>
                  <div className="w-16 h-16 mb-2 flex items-center justify-center">
                    <img src={tech.icon} alt={tech.name} className="max-w-full max-h-full dark:invert-[.25]" />
                  </div>
                  <p className="text-sm text-center">{tech.name}</p>
                </div>)}
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default TechStackSection;
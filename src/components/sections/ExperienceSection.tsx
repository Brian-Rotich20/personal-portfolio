import React, { useEffect, useRef } from 'react';
interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string;
}
const experiences: ExperienceItem[] = [{
  title: 'Senior Frontend Developer',
  company: 'Tech Innovations Inc.',
  period: '2021 - Present',
  description: "Lead development of the company's flagship SaaS product. Implemented new features and optimized performance, resulting in a 40% increase in user retention."
}, {
  title: 'Full Stack Developer',
  company: 'Digital Solutions Ltd.',
  period: '2018 - 2021',
  description: 'Developed and maintained multiple client websites and web applications. Worked with React, Node.js, and MongoDB to create scalable solutions.'
}, {
  title: 'Junior Web Developer',
  company: 'WebCraft Agency',
  period: '2016 - 2018',
  description: 'Created responsive websites for clients across various industries. Collaborated with designers to implement pixel-perfect UIs.'
}, {
  title: 'Computer Science Degree',
  company: 'University of Technology',
  period: '2012 - 2016',
  description: "Bachelor's degree in Computer Science with focus on software engineering and web technologies."
}];
const ExperienceSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        const items = document.querySelectorAll('.experience-item');
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
  return <section id="experience" ref={sectionRef} className="min-h-screen flex items-center py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gold">
          Experience
        </h2>
        <div className="relative max-w-3xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 h-full w-0.5 bg-gold transform -translate-x-1/2"></div>
          {/* Timeline items */}
          {experiences.map((exp, index) => <div key={index} className={`experience-item mb-12 opacity-0 translate-y-10 transition-all duration-700 ease-out ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:ml-auto'}`} style={{
          transitionDelay: `${index * 100}ms`
        }}>
              <div className={`relative flex flex-col md:w-1/2 ${index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'}`}>
                {/* Timeline dot */}
                <div className="absolute top-0 md:top-5 left-0 md:left-auto w-4 h-4 rounded-full bg-gold border-4 border-light-200 dark:border-dark-200 transform -translate-x-1/2 md:-translate-x-1/2"></div>
                <div className="pl-8 md:pl-0 md:pr-0">
                  <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
                  <div className="flex flex-col md:items-end">
                    <p className="text-gold font-medium">{exp.company}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                      {exp.period}
                    </p>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">
                    {exp.description}
                  </p>
                </div>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};
export default ExperienceSection;
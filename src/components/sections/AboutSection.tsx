import React, { useEffect, useRef } from 'react';
const AboutSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('opacity-100', 'translate-y-0');
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
  return <section id="about" ref={sectionRef} className="min-h-screen flex items-center py-20 opacity-0 translate-y-10 transition-all duration-1000 ease-out">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gold">
          About Me
        </h2>
        <div className="max-w-3xl mx-auto prose prose-lg dark:prose-invert">
          <p>
            Hello! I'm John, a passionate full-stack developer with over 5 years
            of experience building web applications. My journey in programming
            started when I was in college, tinkering with HTML and CSS to create
            simple websites.
          </p>
          <p>
            Today, I specialize in creating robust and scalable web applications
            using modern technologies. I love solving complex problems and
            turning ideas into reality through code. When I'm not coding, you
            can find me hiking in the mountains or experimenting with new
            recipes.
          </p>
          <p>
            I believe in writing clean, maintainable code and continuously
            learning new technologies to stay at the forefront of web
            development. My goal is to create digital experiences that are not
            only functional but also intuitive and enjoyable for users.
          </p>
          <p>
            I'm always open to new opportunities and collaborations. Feel free
            to reach out if you'd like to work together or just chat about
            technology!
          </p>
        </div>
      </div>
    </section>;
};
export default AboutSection;
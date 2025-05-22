import React from 'react';
import { UserIcon, InfoIcon, BriefcaseIcon, CodeIcon, LayoutIcon, MailIcon } from 'lucide-react';
interface NavbarProps {
  activeSection: string;
}
const Navbar: React.FC<NavbarProps> = ({
  activeSection
}) => {
  const handleClick = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  const navItems = [{
    id: 'hero',
    icon: <UserIcon size={20} />,
    label: 'Hero'
  }, {
    id: 'about',
    icon: <InfoIcon size={20} />,
    label: 'About'
  }, {
    id: 'experience',
    icon: <BriefcaseIcon size={20} />,
    label: 'Experience'
  }, {
    id: 'tech-stack',
    icon: <CodeIcon size={20} />,
    label: 'Tech Stack'
  }, {
    id: 'projects',
    icon: <LayoutIcon size={20} />,
    label: 'Projects'
  }, {
    id: 'contact',
    icon: <MailIcon size={20} />,
    label: 'Contact'
  }];
  return <nav className="fixed left-0 top-0 h-full w-16 sm:w-20 bg-light-300 dark:bg-dark-100 flex flex-col items-center justify-center gap-10 border-r border-gray-200 dark:border-gray-800 z-50">
      {navItems.map(item => <button key={item.id} onClick={() => handleClick(item.id)} className={`flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 ${activeSection === item.id ? 'bg-gold text-dark-100' : 'text-dark-300 dark:text-light-100 hover:text-gold'}`} aria-label={item.label} title={item.label}>
          {item.icon}
        </button>)}
    </nav>;
};
export default Navbar;
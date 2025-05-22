import React from 'react';
import { SunIcon, MoonIcon } from 'lucide-react';
interface ThemeToggleProps {
  theme: string;
  toggleTheme: () => void;
}
const ThemeToggle: React.FC<ThemeToggleProps> = ({
  theme,
  toggleTheme
}) => {
  return <button onClick={toggleTheme} className="flex items-center justify-center w-10 h-10 rounded-full bg-light-300 dark:bg-dark-100 text-dark-300 dark:text-light-100 hover:text-gold dark:hover:text-gold transition-colors duration-300" aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}>
      {theme === 'dark' ? <SunIcon size={20} /> : <MoonIcon size={20} />}
    </button>;
};
export default ThemeToggle;
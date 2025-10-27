import { useEffect, useState } from 'react';
import { Moon, Sun, Mail } from 'lucide-react';

export default function Navbar() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const stored = localStorage.getItem('theme');
    if (stored === 'dark' || stored === 'light') {
      setTheme(stored);
      applyTheme(stored);
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const initial = prefersDark ? 'dark' : 'light';
      setTheme(initial);
      applyTheme(initial);
    }
  }, []);

  const applyTheme = (value) => {
    const root = document.documentElement;
    if (value === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  };

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    localStorage.setItem('theme', next);
    applyTheme(next);
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-black/5 dark:border-white/10 bg-white/70 dark:bg-black/40 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="font-semibold tracking-tight text-lg sm:text-xl text-gray-900 dark:text-white">
          <span className="text-blue-600 dark:text-blue-400">&lt;/&gt;</span> Dev Portfolio
        </a>
        <div className="flex items-center gap-1 sm:gap-2">
          <a href="#about" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-white/10">
            About
          </a>
          <a href="#contact" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-white/10">
            Contact
          </a>
          <a href="#contact" className="hidden sm:inline-flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium bg-blue-600 text-white hover:bg-blue-500">
            <Mail size={16} /> Email
          </a>
          <button onClick={toggleTheme} aria-label="Toggle theme" className="ml-1 inline-flex items-center justify-center w-9 h-9 rounded-md border border-black/10 dark:border-white/10 hover:bg-gray-100 dark:hover:bg-white/10 text-gray-700 dark:text-gray-200">
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </div>
      </div>
    </header>
  );
}

import { useState, useEffect } from 'react';
import Seo from './components/Seo';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Projects from './components/Projects';
import AIEngineering from './components/AIEngineering';
import AIStory from './components/AIStory';
import Certifications from './components/Certifications';
import Contact from './components/Contact';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return document.documentElement.classList.contains('dark') || 
             window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return true; // Default to dark mode given the previous editorial theme
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <div className="relative w-full min-h-screen font-sans border-8 md:border-[16px] border-border bg-background box-border p-4 md:p-10 transition-colors duration-300">
      <Seo />
      <Navigation 
        isOpen={isMenuOpen} 
        setIsOpen={setIsMenuOpen} 
        onNavigate={scrollToSection}
        isDarkMode={isDarkMode}
        toggleTheme={toggleTheme}
      />
      
      <main className="w-full relative z-10 min-h-screen bg-transparent">
        <Hero />
        <Projects />
        <AIEngineering />
        <AIStory />
        <Certifications />
        <Contact />
      </main>
    </div>
  );
}


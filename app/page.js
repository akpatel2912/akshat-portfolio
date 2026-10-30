'use client';

import { useState, useEffect } from 'react';
import SvgSymbols from '../components/SvgSymbols';
import ScrollProgress from '../components/ScrollProgress';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import AssemblySection from '../components/AssemblySection';
import Projects from '../components/Projects';
import EngineeringStory from '../components/EngineeringStory';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Education from '../components/Education';
import Achievements from '../components/Achievements';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import MotionToggle from '../components/MotionToggle';
import CommandMenu from '../components/CommandMenu';

export default function Home() {
  const [isCommandOpen, setIsCommandOpen] = useState(false);

  // Initialize IntersectionObserver for scroll-reveal animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px'
      }
    );

    const revealElements = document.querySelectorAll('[data-reveal]');
    revealElements.forEach((el) => observer.observe(el));

    const handleOpenCommand = () => setIsCommandOpen(true);
    window.addEventListener('open-command-menu', handleOpenCommand);

    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
      window.removeEventListener('open-command-menu', handleOpenCommand);
    };
  }, []);

  return (
    <>
      <SvgSymbols />
      <ScrollProgress />
      <Navbar onOpenCommand={() => setIsCommandOpen(true)} />

      <main>
        <Hero />
        <AssemblySection />
        <Projects />
        <EngineeringStory />
        <Skills />
        <Experience />
        <Education />
        <Achievements />
        <Contact />
      </main>

      <Footer />
      <MotionToggle />
      <CommandMenu isOpen={isCommandOpen} onClose={() => setIsCommandOpen(false)} />
    </>
  );
}

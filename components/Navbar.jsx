'use client';

import { useState, useEffect } from 'react';

export default function Navbar({ onOpenCommand }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-inner">
        <a href="#hero" className="nav-brand" aria-label="Akshat Patel Home">
          <svg className="brand-svg-mark" viewBox="0 0 32 32" aria-hidden="true">
            <use href="#logo" />
          </svg>
          <span className="brand-text">
            Akshat <span className="brand-accent">Patel</span>
          </span>
        </a>

        <ul className="nav-links">
          <li><a href="#assembly">Assembly</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#engineering">Engineering</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <div className="nav-right">
          <button 
            type="button" 
            className="cmd-k-pill"
            onClick={onOpenCommand}
            aria-label="Open Command Menu"
          >
            <span>Search</span>
            <kbd>⌘K</kbd>
          </button>
          <a href="#contact" className="nav-connect-btn">
            <span>Connect</span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <use href="#arrow" />
            </svg>
          </a>
        </div>
      </div>
    </nav>
  );
}

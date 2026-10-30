'use client';

import { useState, useEffect, useRef } from 'react';

const COMMANDS = [
  { id: 'hero', label: 'Home', shortcut: 'H', href: '#hero', type: 'internal' },
  { id: 'assembly', label: 'Assembly Pipeline', shortcut: 'A', href: '#assembly', type: 'internal' },
  { id: 'projects', label: 'Projects Gallery', shortcut: 'P', href: '#projects', type: 'internal' },
  { id: 'engineering', label: 'Engineering Story', shortcut: 'E', href: '#engineering', type: 'internal' },
  { id: 'skills', label: 'Skills & Stack', shortcut: 'S', href: '#skills', type: 'internal' },
  { id: 'experience', label: 'Experience & Systems', shortcut: 'X', href: '#experience', type: 'internal' },
  { id: 'education', label: 'Academic Foundations', shortcut: 'F', href: '#education', type: 'internal' },
  { id: 'achievements', label: 'Achievements', shortcut: 'M', href: '#achievements', type: 'internal' },
  { id: 'contact', label: 'Contact & Hire', shortcut: 'C', href: '#contact', type: 'internal' },
  { id: 'github', label: 'GitHub Profile (akpatel2912)', shortcut: 'G', href: 'https://github.com/akpatel2912', type: 'external' },
  { id: 'linkedin', label: 'LinkedIn Profile', shortcut: 'L', href: 'https://www.linkedin.com/in/akshat-patel-0b5254322/', type: 'external' }
];

export default function CommandMenu({ isOpen, onClose }) {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef(null);

  const filtered = COMMANDS.filter((cmd) =>
    cmd.label.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      // ⌘K or Ctrl+K trigger
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (isOpen) {
          onClose();
        } else {
          // open command menu
          const event = new CustomEvent('open-command-menu');
          window.dispatchEvent(event);
        }
      }

      if (!isOpen) return;

      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % (filtered.length || 1));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + filtered.length) % (filtered.length || 1));
      } else if (e.key === 'Enter') {
        e.preventDefault();
        const selected = filtered[selectedIndex];
        if (selected) {
          executeCommand(selected);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, filtered, selectedIndex, onClose]);

  const executeCommand = (cmd) => {
    onClose();
    if (cmd.type === 'internal') {
      const el = document.querySelector(cmd.href);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.open(cmd.href, '_blank', 'noopener,noreferrer');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="command-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="command-dialog" onClick={(e) => e.stopPropagation()}>
        <div className="cmd-input-wrap">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            ref={inputRef}
            type="text"
            placeholder="Type a command or jump to section..."
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
          />
          <button type="button" className="cmd-close-btn" onClick={onClose}>
            ESC
          </button>
        </div>

        <div className="cmd-results" role="listbox">
          {filtered.length === 0 ? (
            <div style={{ padding: '1.5rem', textAlign: 'center', color: 'var(--muted)', fontSize: '0.85rem' }}>
              No matching destinations found.
            </div>
          ) : (
            filtered.map((cmd, idx) => (
              <button
                key={cmd.id}
                type="button"
                role="option"
                aria-selected={selectedIndex === idx}
                className={`cmd-item ${selectedIndex === idx ? 'highlighted' : ''}`}
                onClick={() => executeCommand(cmd)}
                onMouseEnter={() => setSelectedIndex(idx)}
              >
                <div className="cmd-item-left">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    {cmd.type === 'external' ? <use href="#diagonal" /> : <use href="#arrow" />}
                  </svg>
                  <span>{cmd.label}</span>
                </div>
                <span className="cmd-item-shortcut">{cmd.shortcut}</span>
              </button>
            ))
          )}
        </div>

        <div className="cmd-footer">
          <span>Navigate with ↑ ↓ • Select with ↵</span>
          <span>Akshat Patel AI Suite</span>
        </div>
      </div>
    </div>
  );
}

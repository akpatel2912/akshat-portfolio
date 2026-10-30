'use client';

import { useState, useEffect } from 'react';
import ParticleCanvas from './ParticleCanvas';
import Image from 'next/image';

const PART1 = "Hi, I’m ";
const PART2 = "Akshat Patel";
const PART3 = " — an ";
const PART4 = "AI & Machine Learning Engineer";
const PART5 = " creating production-grade intelligent applications, deep learning architectures, and automated real-time systems.";

const TOTAL_LENGTH = PART1.length + PART2.length + PART3.length + PART4.length + PART5.length;

export default function Hero() {
  const [titleVisible, setTitleVisible] = useState(false);
  const [typedCount, setTypedCount] = useState(0);

  useEffect(() => {
    const isReduced = 
      typeof window !== 'undefined' &&
      (window.matchMedia('(prefers-reduced-motion: reduce)').matches || 
       document.body.classList.contains('motion-paused'));

    if (isReduced) {
      setTitleVisible(true);
      setTypedCount(TOTAL_LENGTH);
      return;
    }

    // 1. Trigger 3D screen entrance for heading lines
    const titleTimer = setTimeout(() => {
      setTitleVisible(true);
    }, 120);

    // 2. Trigger kinetic typewriter stream for tagline
    let typeInterval;
    const streamTimer = setTimeout(() => {
      typeInterval = setInterval(() => {
        setTypedCount((prev) => {
          if (prev >= TOTAL_LENGTH) {
            clearInterval(typeInterval);
            return TOTAL_LENGTH;
          }
          return prev + 1;
        });
      }, 16);
    }, 700);

    return () => {
      clearTimeout(titleTimer);
      clearTimeout(streamTimer);
      if (typeInterval) clearInterval(typeInterval);
    };
  }, []);

  // Compute streamed substrings
  const p1Len = PART1.length;
  const p2Len = p1Len + PART2.length;
  const p3Len = p2Len + PART3.length;
  const p4Len = p3Len + PART4.length;

  const s1 = PART1.slice(0, Math.max(0, typedCount));
  const s2 = typedCount > p1Len ? PART2.slice(0, typedCount - p1Len) : '';
  const s3 = typedCount > p2Len ? PART3.slice(0, typedCount - p2Len) : '';
  const s4 = typedCount > p3Len ? PART4.slice(0, typedCount - p3Len) : '';
  const s5 = typedCount > p4Len ? PART5.slice(0, typedCount - p4Len) : '';

  return (
    <section id="hero" className="hero">
      {/* 1. Radial gradient is handled via .hero::before in CSS */}

      {/* 2. Technical one-pixel grid pattern */}
      <div className="hero-grid" aria-hidden="true" />

      {/* 3. Particle sculpture canvas */}
      <ParticleCanvas />

      {/* 4. Hero shade gradient */}
      <div className="hero-shade" aria-hidden="true" />

      {/* 5. Hero content with z-index 2 */}
      <div className="hero-content">
        <div className="hero-top-meta" data-reveal>
          <div className="tech-breadcrumb">
            <span>AKSHAT</span>
            <span className="slash">/</span>
            <span>01</span>
            <span className="slash">/</span>
            <span>AI & ML SYSTEMS</span>
          </div>

          <div className="hero-badge">
            <span className="pulse-dot" />
            <span>Available for High-Impact AI Engineering</span>
          </div>
        </div>

        <div className="hero-main-grid">
          <div className="hero-headline-wrap">
            {/* 3D Kinetic Text Emerging from screen plane */}
            <h1 className={`hero-title ${titleVisible ? 'is-visible' : ''}`}>
              <span className="hero-line-wrap">
                <span className="hero-line-inner line-1">Architecting</span>
              </span>
              <span className="hero-line-wrap">
                <span className="hero-line-inner line-2">
                  <em>Intelligence</em> &amp;
                </span>
              </span>
              <span className="hero-line-wrap">
                <span className="hero-line-inner line-3">Scalable Systems.</span>
              </span>
            </h1>

            {/* Typewriter Kinetic Streaming Tagline */}
            <p className="hero-tagline">
              <span>{s1}</span>
              {s2 && <strong>{s2}</strong>}
              {s3 && <span>{s3}</span>}
              {s4 && <span className="highlight">{s4}</span>}
              {s5 && <span>{s5}</span>}
              <span className="type-cursor" aria-hidden="true">|</span>
            </p>
          </div>

          {/* Editorial portrait card featuring the approved 1st image */}
          <div className="hero-portrait-card" data-reveal>
            <div className="portrait-showcase-wrap">
              <div className="portrait-img-inner">
                <Image
                  src="/images/akshat-portrait.jpg"
                  alt="Akshat Patel — AI & Machine Learning Engineer"
                  width={340}
                  height={453}
                  priority
                />
              </div>
              <div className="portrait-meta-overlay">
                <span className="portrait-name">Akshat Patel</span>
                <span className="portrait-role">AI Engineer • Systems Architect</span>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-footer-bar" data-reveal>
          <div className="hero-quick-roles">
            <div className="role-item">
              <span className="label">Focus</span>
              <span className="value">AI / Machine Learning</span>
            </div>
            <div className="role-item">
              <span className="label">Architecture</span>
              <span className="value">Neural Nets &amp; Vision</span>
            </div>
            <div className="role-item">
              <span className="label">Stack</span>
              <span className="value">PyTorch • FastAPI • Supabase</span>
            </div>
          </div>

          <a href="#assembly" className="scroll-indicator" aria-label="Scroll to Assembly section">
            <span>Explore Architecture</span>
            <svg className="scroll-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <use href="#arrow" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

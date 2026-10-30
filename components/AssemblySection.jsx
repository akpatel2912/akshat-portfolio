'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const CHAPTERS = [
  {
    id: 'explore',
    name: 'Explore',
    num: '01',
    title: 'Biometric Computer Vision & Multi-Modal Perception',
    desc: 'Analyzing high-dimensional facial embeddings, real-time voice acoustics, and intelligent queuing algorithms.',
    statLabel: 'Perception Latency',
    statVal: '< 180ms',
    tag: 'CV & AUDIO STACK'
  },
  {
    id: 'engineer',
    name: 'Engineer',
    num: '02',
    title: 'Model Training, Optimization & Intrusion Defense',
    desc: 'Fine-tuning Transformer text summarizers and training high-throughput XGBoost/Random Forest cyber intrusion classifiers.',
    statLabel: 'Attack Detection',
    statVal: 'CICIoT2023 Benchmarked',
    tag: 'NEURAL & ENSEMBLE'
  },
  {
    id: 'build',
    name: 'Build',
    num: '03',
    title: 'Production Deployment & Cloud Integrations',
    desc: 'Deploying asynchronous FastAPI inference microservices, Streamlit apps, and Supabase relational schemas with robust security.',
    statLabel: 'Architecture',
    statVal: 'Cloud & Edge Ready',
    tag: 'SYSTEMS ARCHITECTURE'
  }
];

export default function AssemblySection() {
  const containerRef = useRef(null);
  const [activeChapter, setActiveChapter] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const totalDist = containerRef.current.offsetHeight - window.innerHeight;
      if (totalDist <= 0) return;

      const progress = Math.min(Math.max(-rect.top / totalDist, 0), 1);
      setScrollProgress(progress);

      if (progress < 0.33) {
        setActiveChapter(0);
      } else if (progress < 0.66) {
        setActiveChapter(1);
      } else {
        setActiveChapter(2);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const currentChapter = CHAPTERS[activeChapter];

  // 3D transform calculation based on scroll progress
  const rotateX = Math.max(0, 15 - scrollProgress * 25);
  const rotateY = (scrollProgress - 0.5) * 8;
  const translateZ = Math.sin(scrollProgress * Math.PI) * 40;
  const scale = 0.94 + Math.sin(scrollProgress * Math.PI) * 0.06;

  return (
    <section id="assembly" ref={containerRef} className="assembly-section">
      <div className="assembly-sticky">
        {/* Top bar with Breadcrumbs & Chapter Selectors */}
        <div className="assembly-top">
          <div className="tech-breadcrumb">
            <span>AKSHAT</span>
            <span className="slash">/</span>
            <span>02</span>
            <span className="slash">/</span>
            <span>ASSEMBLY PIPELINE</span>
          </div>

          <div className="chapter-tabs" role="tablist">
            {CHAPTERS.map((ch, idx) => (
              <button
                key={ch.id}
                role="tab"
                aria-selected={activeChapter === idx}
                className={`tab-btn ${activeChapter === idx ? 'active' : ''}`}
                onClick={() => {
                  if (!containerRef.current) return;
                  const totalDist = containerRef.current.offsetHeight - window.innerHeight;
                  const targetScroll = containerRef.current.offsetTop + (idx / 2) * totalDist;
                  window.scrollTo({ top: targetScroll, behavior: 'smooth' });
                }}
              >
                {ch.num}. {ch.name}
              </button>
            ))}
          </div>
        </div>

        {/* 3D Assembly Scene with Form Browser Mockup */}
        <div className="assembly-scene">
          <div
            className="assembly-browser"
            style={{
              transform: `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(${translateZ}px) scale(${scale})`
            }}
          >
            {/* Browser Header Bar */}
            <div className="browser-header">
              <div className="window-dots">
                <span />
                <span />
                <span />
              </div>

              <div className="browser-url-bar">
                <span className="lock-icon">🔒</span>
                <span>https://akshat.ai/pipeline/{currentChapter.id}</span>
              </div>

              <div className="browser-actions">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <use href="#grid" />
                </svg>
              </div>
            </div>

            {/* Browser Viewport Content */}
            <div className="browser-viewport">
              <div className="scene-chapter-content" style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', width: '100%' }}>
                {/* Left: Interactive Chapter Visual Mockup */}
                <div style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', borderRight: '1px solid var(--line)' }}>
                  <div>
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.2rem 0.6rem', background: 'rgba(232, 171, 126, 0.1)', border: '1px solid rgba(232, 171, 126, 0.25)', borderRadius: '4px', fontSize: '0.7rem', color: 'var(--copper)', letterSpacing: '0.08em', marginBottom: '1.25rem' }}>
                      {currentChapter.tag}
                    </div>

                    <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.6rem, 2.5vw, 2.4rem)', lineHeight: 1.15, marginBottom: '1rem', color: 'var(--ink)' }}>
                      {currentChapter.title}
                    </h2>

                    <p style={{ fontSize: '0.92rem', color: 'var(--muted)', lineHeight: 1.6, maxWidth: '44ch' }}>
                      {currentChapter.desc}
                    </p>
                  </div>

                  <div style={{ display: 'flex', gap: '2rem', paddingTop: '1.5rem', borderTop: '1px solid var(--line)', marginTop: '2rem' }}>
                    <div>
                      <div style={{ fontSize: '0.7rem', textTransform: 'uppercase', color: 'var(--muted)', letterSpacing: '0.1em' }}>Metric</div>
                      <div style={{ fontSize: '1.15rem', color: 'var(--copper)', fontWeight: 600 }}>{currentChapter.statVal}</div>
                    </div>
                    <div>
                      <div style={{ fontSize: '0.7rem', textTransform: 'uppercase', color: 'var(--muted)', letterSpacing: '0.1em' }}>Domain</div>
                      <div style={{ fontSize: '1.15rem', color: 'var(--ink)', fontWeight: 500 }}>{currentChapter.statLabel}</div>
                    </div>
                  </div>
                </div>

                {/* Right: Verified Engineer Portrait & Live Telemetry Card */}
                <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: '#141413' }}>
                  <div className="portrait-showcase-wrap" style={{ maxWidth: '280px' }}>
                    <div className="portrait-img-inner">
                      <Image
                        src="/images/akshat-portrait.jpg"
                        alt="Akshat Patel — AI Engineer"
                        width={280}
                        height={373}
                        priority
                      />
                    </div>
                    <div className="portrait-meta-overlay">
                      <span className="portrait-name">Akshat Patel</span>
                      <span className="portrait-role">Lead AI Engineer • Core Builder</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Assembly Footer with Chapter Status & Dots */}
        <div className="assembly-footer">
          <div className="chapter-status">
            <span className="chapter-number">{currentChapter.num}</span>
            <span className="chapter-desc">
              Chapter: {currentChapter.name} — {currentChapter.title}
            </span>
          </div>

          <div className="chapter-dots">
            {CHAPTERS.map((_, idx) => (
              <span
                key={idx}
                className={`step-dot ${activeChapter === idx ? 'active' : ''}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

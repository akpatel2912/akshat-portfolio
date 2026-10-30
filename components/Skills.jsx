'use client';

import { useState, useEffect } from 'react';

const SKILL_GROUPS = [
  {
    category: 'Programming',
    skills: [
      { name: 'Python', status: 'Used in projects', statusClass: 'status-used' },
      { name: 'SQL', status: 'Used in projects', statusClass: 'status-used' },
      { name: 'JavaScript (ES6+)', status: 'Used in projects', statusClass: 'status-used' },
      { name: 'Java', status: 'Studied', statusClass: 'status-studied' },
      { name: 'C', status: 'Studied', statusClass: 'status-studied' }
    ]
  },
  {
    category: 'AI & Machine Learning',
    skills: [
      { name: 'Machine Learning', status: 'Used in projects', statusClass: 'status-used' },
      { name: 'Deep Learning (PyTorch)', status: 'Used in projects', statusClass: 'status-used' },
      { name: 'AI Application Dev', status: 'Used in projects', statusClass: 'status-used' },
      { name: 'Scikit-learn & XGBoost', status: 'Used in projects', statusClass: 'status-used' },
      { name: 'Transformers & NLP (T5)', status: 'Used in projects', statusClass: 'status-used' },
      { name: 'Computer Vision (dlib)', status: 'Used in projects', statusClass: 'status-used' },
      { name: 'LLM Agentic Systems', status: 'Currently learning', statusClass: 'status-learning' }
    ]
  },
  {
    category: 'Backend & Development',
    skills: [
      { name: 'FastAPI & Uvicorn', status: 'Used in projects', statusClass: 'status-used' },
      { name: 'Streamlit', status: 'Used in projects', statusClass: 'status-used' },
      { name: 'REST APIs Architecture', status: 'Used in projects', statusClass: 'status-used' },
      { name: 'Flask', status: 'Studied', statusClass: 'status-studied' },
      { name: 'Next.js & SCSS', status: 'Used in projects', statusClass: 'status-used' }
    ]
  },
  {
    category: 'Tools & Cloud Platforms',
    skills: [
      { name: 'Git & GitHub', status: 'Used in projects', statusClass: 'status-used' },
      { name: 'Supabase (Auth & DB)', status: 'Used in projects', statusClass: 'status-used' },
      { name: 'VS Code & Jupyter', status: 'Used in projects', statusClass: 'status-used' },
      { name: 'Anaconda & Virtualenv', status: 'Used in projects', statusClass: 'status-used' },
      { name: 'Docker Containers', status: 'Currently learning', statusClass: 'status-learning' }
    ]
  }
];

export default function Skills() {
  const [spread, setSpread] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // Scroll-based sine-wave vertical spreading
      const wave = Math.sin(scrollY * 0.0035) * 14;
      setSpread(wave);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        {/* Header */}
        <div className="skills-header" data-reveal>
          <div>
            <div className="tech-breadcrumb">
              <span>AKSHAT</span>
              <span className="slash">/</span>
              <span>04</span>
              <span className="slash">/</span>
              <span>TECHNICAL CAPABILITIES</span>
            </div>
            <h2 className="section-title">
              Engineering <em>Discipline</em> &amp; Stack
            </h2>
            <p className="lead">
              Verified domain proficiencies across machine learning, neural architectures, backend APIs, and developer workflows.
            </p>
          </div>
        </div>

        {/* 3 Layered SVG Illustrations: FIG 01, FIG 02, FIG 03 */}
        <div className="skills-figures-row">
          {/* FIG 01 — Intelligence */}
          <div className="skill-figure-card" data-reveal>
            <div className="card-top">
              <span className="fig-num">FIG 01</span>
              <span className="fig-tag">INTELLIGENCE</span>
            </div>

            <div className="figure-svg-wrap">
              <svg className="figure-svg" viewBox="0 0 200 160">
                <g className="figure-layer" style={{ transform: `translateY(${-spread}px)` }}>
                  {/* Layer 1: Neural Nodes */}
                  <circle cx="100" cy="80" r="38" stroke="var(--copper)" strokeWidth="1.5" fill="none" opacity="0.3" strokeDasharray="4 4" />
                  <circle cx="100" cy="80" r="22" stroke="var(--copper)" strokeWidth="1.5" fill="none" opacity="0.6" />
                  <circle cx="100" cy="80" r="6" fill="var(--copper)" />
                </g>
                <g className="figure-layer" style={{ transform: `translateY(${spread * 0.8}px)` }}>
                  {/* Layer 2: Synaptic Lines */}
                  <line x1="60" y1="50" x2="100" y2="80" stroke="var(--copper)" strokeWidth="1.2" opacity="0.7" />
                  <line x1="140" y1="50" x2="100" y2="80" stroke="var(--copper)" strokeWidth="1.2" opacity="0.7" />
                  <line x1="60" y1="110" x2="100" y2="80" stroke="var(--copper)" strokeWidth="1.2" opacity="0.7" />
                  <line x1="140" y1="110" x2="100" y2="80" stroke="var(--copper)" strokeWidth="1.2" opacity="0.7" />
                  <circle cx="60" cy="50" r="3.5" fill="var(--ink)" />
                  <circle cx="140" cy="50" r="3.5" fill="var(--ink)" />
                  <circle cx="60" cy="110" r="3.5" fill="var(--ink)" />
                  <circle cx="140" cy="110" r="3.5" fill="var(--ink)" />
                </g>
              </svg>
            </div>

            <div className="card-meta">
              <h3>Perception &amp; Models</h3>
              <p>Deep neural nets, feature engineering, classification benchmarks, and vision inference engines.</p>
            </div>
          </div>

          {/* FIG 02 — Architecture */}
          <div className="skill-figure-card" data-reveal>
            <div className="card-top">
              <span className="fig-num">FIG 02</span>
              <span className="fig-tag">ARCHITECTURE</span>
            </div>

            <div className="figure-svg-wrap">
              <svg className="figure-svg" viewBox="0 0 200 160">
                <g className="figure-layer" style={{ transform: `translateY(${spread * 1.1}px)` }}>
                  {/* Layer 1: Isometric Platform */}
                  <polygon points="100,30 160,65 100,100 40,65" stroke="var(--copper)" strokeWidth="1.5" fill="none" opacity="0.4" />
                </g>
                <g className="figure-layer" style={{ transform: `translateY(${-spread * 0.9}px)` }}>
                  {/* Layer 2: Elevated System Layer */}
                  <polygon points="100,55 160,90 100,125 40,90" stroke="var(--copper)" strokeWidth="1.5" fill="rgba(232, 171, 126, 0.08)" />
                  <line x1="100" y1="30" x2="100" y2="55" stroke="var(--copper)" strokeWidth="1.2" />
                  <line x1="160" y1="65" x2="160" y2="90" stroke="var(--copper)" strokeWidth="1.2" />
                  <line x1="40" y1="65" x2="40" y2="90" stroke="var(--copper)" strokeWidth="1.2" />
                </g>
              </svg>
            </div>

            <div className="card-meta">
              <h3>Systems Architecture</h3>
              <p>Low-latency REST pipelines, asynchronous request routing, microservice design, and cloud DB schema.</p>
            </div>
          </div>

          {/* FIG 03 — Engineering */}
          <div className="skill-figure-card" data-reveal>
            <div className="card-top">
              <span className="fig-num">FIG 03</span>
              <span className="fig-tag">ENGINEERING</span>
            </div>

            <div className="figure-svg-wrap">
              <svg className="figure-svg" viewBox="0 0 200 160">
                <g className="figure-layer" style={{ transform: `translateY(${-spread * 1.2}px)` }}>
                  {/* Layer 1: Calibrated Grid Frame */}
                  <rect x="45" y="30" width="110" height="90" rx="6" stroke="var(--copper)" strokeWidth="1.4" fill="none" opacity="0.5" />
                  <line x1="45" y1="60" x2="155" y2="60" stroke="var(--line)" />
                  <line x1="45" y1="90" x2="155" y2="90" stroke="var(--line)" />
                </g>
                <g className="figure-layer" style={{ transform: `translateY(${spread}px)` }}>
                  {/* Layer 2: Precision Dial */}
                  <circle cx="100" cy="75" r="18" stroke="var(--copper)" strokeWidth="1.5" fill="none" />
                  <circle cx="100" cy="75" r="3" fill="var(--copper)" />
                  <line x1="100" y1="75" x2="112" y2="67" stroke="var(--copper)" strokeWidth="2" strokeLinecap="round" />
                </g>
              </svg>
            </div>

            <div className="card-meta">
              <h3>Precision &amp; Quality</h3>
              <p>Type discipline, reproducible virtual environments, automated testing, and metric monitoring.</p>
            </div>
          </div>
        </div>

        {/* Technical Skills Matrix with Verified Distinction */}
        <div className="skills-matrix">
          {SKILL_GROUPS.map((grp) => (
            <div key={grp.category} className="skill-group" data-reveal>
              <h3 className="group-title">
                <span>✦</span>
                <span>{grp.category}</span>
              </h3>

              <div className="skill-items">
                {grp.skills.map((skill) => (
                  <div key={skill.name} className="skill-item">
                    <span className="skill-name">{skill.name}</span>
                    <span className={`skill-status ${skill.statusClass}`}>
                      {skill.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

'use client';

export default function ProjectCard({ project, index }) {
  return (
    <article className="project-card" data-reveal>
      {/* Dimensional Project Artwork */}
      <div className="project-art">
        <div className="art-canvas-bg" />
        <div className="art-grid-overlay" />

        <span className="project-badge-tag">{project.badge}</span>

        {/* 3D Geometric Sculpture Graphic for Project */}
        <div className="project-sculpture">
          <svg viewBox="0 0 100 100" width="100%" height="100%" aria-hidden="true">
            {project.artType === 'cube' && (
              <g stroke="var(--copper)" strokeWidth="1.2" fill="none" opacity="0.85">
                <polygon points="50,15 85,32 85,68 50,85 15,68 15,32" />
                <line x1="50" y1="15" x2="50" y2="85" />
                <line x1="15" y1="32" x2="50" y2="50" />
                <line x1="85" y1="32" x2="50" y2="50" />
                <circle cx="50" cy="50" r="4" fill="var(--copper)" />
                <circle cx="50" cy="15" r="2.5" fill="var(--ink)" />
                <circle cx="85" cy="32" r="2.5" fill="var(--ink)" />
                <circle cx="85" cy="68" r="2.5" fill="var(--ink)" />
                <circle cx="50" cy="85" r="2.5" fill="var(--ink)" />
                <circle cx="15" cy="68" r="2.5" fill="var(--ink)" />
                <circle cx="15" cy="32" r="2.5" fill="var(--ink)" />
              </g>
            )}

            {project.artType === 'network' && (
              <g stroke="var(--copper)" strokeWidth="1.2" fill="none" opacity="0.85">
                <circle cx="50" cy="50" r="34" strokeDasharray="3 3" opacity="0.4" />
                <line x1="25" y1="35" x2="75" y2="35" />
                <line x1="25" y1="65" x2="75" y2="65" />
                <line x1="25" y1="35" x2="50" y2="50" />
                <line x1="75" y1="35" x2="50" y2="50" />
                <line x1="25" y1="65" x2="50" y2="50" />
                <line x1="75" y1="65" x2="50" y2="50" />
                <circle cx="50" cy="50" r="6" fill="var(--copper)" />
                <circle cx="25" cy="35" r="4" fill="var(--ink)" />
                <circle cx="75" cy="35" r="4" fill="var(--ink)" />
                <circle cx="25" cy="65" r="4" fill="var(--ink)" />
                <circle cx="75" cy="65" r="4" fill="var(--ink)" />
              </g>
            )}

            {project.artType === 'lattice' && (
              <g stroke="var(--copper)" strokeWidth="1.2" fill="none" opacity="0.85">
                <path d="M20,50 Q50,20 80,50 T140,50" />
                <path d="M20,50 Q50,80 80,50 T140,50" />
                <circle cx="30" cy="50" r="3.5" fill="var(--copper)" />
                <circle cx="50" cy="35" r="3.5" fill="var(--ink)" />
                <circle cx="50" cy="65" r="3.5" fill="var(--ink)" />
                <circle cx="70" cy="50" r="3.5" fill="var(--copper)" />
                <line x1="50" y1="20" x2="50" y2="80" strokeDasharray="2 2" opacity="0.5" />
              </g>
            )}

            {project.artType === 'radar' && (
              <g stroke="var(--copper)" strokeWidth="1.2" fill="none" opacity="0.85">
                <polygon points="50,20 78,40 68,75 32,75 22,40" />
                <polygon points="50,32 66,45 60,65 40,65 34,45" opacity="0.5" />
                <circle cx="50" cy="50" r="3" fill="var(--copper)" />
                <line x1="50" y1="50" x2="50" y2="20" />
                <line x1="50" y1="50" x2="78" y2="40" />
                <line x1="50" y1="50" x2="68" y2="75" />
                <line x1="50" y1="50" x2="32" y2="75" />
                <line x1="50" y1="50" x2="22" y2="40" />
              </g>
            )}
          </svg>
        </div>
      </div>

      {/* Project Meta Information */}
      <div className="project-info">
        <div>
          <div className="project-header-row">
            <h3 className="project-title">{project.title}</h3>
            <span className="project-index">{(index + 1).toString().padStart(2, '0')}</span>
          </div>

          <p className="project-desc" style={{ marginTop: '0.75rem' }}>
            {project.description}
          </p>

          <div style={{ marginTop: '0.9rem', fontSize: '0.82rem', color: 'var(--ink)' }}>
            <span style={{ color: 'var(--copper)', fontWeight: 500 }}>Problem Solved: </span>
            <span style={{ color: 'var(--muted)' }}>{project.problem}</span>
          </div>
        </div>

        <div>
          <div className="project-tags">
            {project.tags.map((tag) => (
              <span key={tag} className="tech-tag">{tag}</span>
            ))}
          </div>

          <div className="project-links">
            {project.github && (
              <a 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="link-item"
                aria-label={`View ${project.title} source on GitHub`}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <use href="#code" />
                </svg>
                <span>GitHub Code</span>
              </a>
            )}

            {project.demo && (
              <a 
                href={project.demo} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="link-item"
                aria-label={`Open ${project.title} live preview`}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <use href="#diagonal" />
                </svg>
                <span>Live System</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

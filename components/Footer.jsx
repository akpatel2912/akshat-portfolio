'use client';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-left">
          <span className="brand-mark">Akshat Patel</span>
          <span>© {new Date().getFullYear()} • AI &amp; Machine Learning Engineer</span>
        </div>

        <div className="footer-links">
          <a href="#hero">Top</a>
          <a href="#assembly">Assembly</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="https://github.com/akpatel2912" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/akshat-patel-0b5254322/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}

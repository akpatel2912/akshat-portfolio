'use client';

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-header" data-reveal>
          <div className="tech-breadcrumb">
            <span>AKSHAT</span>
            <span className="slash">/</span>
            <span>08</span>
            <span className="slash">/</span>
            <span>GET IN TOUCH</span>
          </div>

          <h2 className="contact-heading">
            Have a problem <br />
            <em>worth solving?</em>
          </h2>

          <p className="contact-subtext">
            Whether you are building high-throughput machine learning systems, intelligent perception pipelines, or autonomous software, let’s discuss how I can contribute.
          </p>
        </div>

        <div className="contact-actions" data-reveal>
          <a
            href="mailto:akpatel2912@gmail.com"
            className="btn-copper"
            aria-label="Send email to Akshat Patel"
          >
            <span>Initiate Conversation</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <use href="#arrow" />
            </svg>
          </a>

          <a
            href="https://github.com/akpatel2912"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
            aria-label="View Akshat's GitHub Repositories"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <use href="#code" />
            </svg>
            <span>Browse GitHub Repos</span>
          </a>
        </div>

        <div className="contact-channels" data-reveal>
          <a href="mailto:akpatel2912@gmail.com" className="channel-link">
            <span className="channel-lbl">Direct Email</span>
            <span className="channel-val">akpatel2912@gmail.com</span>
          </a>

          <a
            href="https://www.linkedin.com/in/akshat-patel-0b5254322/"
            target="_blank"
            rel="noopener noreferrer"
            className="channel-link"
          >
            <span className="channel-lbl">LinkedIn Profile</span>
            <span className="channel-val">linkedin.com/in/akshat-patel</span>
          </a>

          <a
            href="https://github.com/akpatel2912"
            target="_blank"
            rel="noopener noreferrer"
            className="channel-link"
          >
            <span className="channel-lbl">GitHub Repos</span>
            <span className="channel-val">github.com/akpatel2912</span>
          </a>
        </div>
      </div>
    </section>
  );
}

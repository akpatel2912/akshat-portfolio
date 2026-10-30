'use client';

export default function Education() {
  return (
    <section id="education" className="timeline-section" style={{ background: '#131312' }}>
      <div className="timeline-container">
        <div className="timeline-grid">
          <div className="timeline-intro" data-reveal>
            <div className="tech-breadcrumb">
              <span>AKSHAT</span>
              <span className="slash">/</span>
              <span>06</span>
              <span className="slash">/</span>
              <span>ACADEMIC FOUNDATION</span>
            </div>

            <h2 className="section-title">
              Academic <em>Foundations</em> &amp; Studies
            </h2>
            <p className="lead">
              Core grounding in Computer Science, mathematics, deep learning algorithms, and software engineering principles.
            </p>
          </div>

          <div className="timeline-list">
            <div className="timeline-item" data-reveal>
              <div className="item-header">
                <h3 className="item-title">Computer Science &amp; Artificial Intelligence</h3>
                <span className="item-period">Academic Curriculum</span>
              </div>
              <div className="item-role">Core Engineering Studies</div>
              <p className="item-desc">
                In-depth coursework and project development covering Data Structures &amp; Algorithms, Object-Oriented Programming, Machine Learning, Database Management Systems (SQL), Operating Systems, and Deep Neural Networks.
              </p>
            </div>

            <div className="timeline-item" data-reveal>
              <div className="item-header">
                <h3 className="item-title">Self-Directed Neural Network Specialization</h3>
                <span className="item-period">Continuous Learning</span>
              </div>
              <div className="item-role">Advanced Deep Learning &amp; Transformers</div>
              <p className="item-desc">
                Hands-on practical mastery of PyTorch tensors, automatic differentiation, backpropagation mechanics, Transformer attention mechanisms, and modern LLM application tooling.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

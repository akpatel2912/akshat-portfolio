'use client';

export default function Experience() {
  return (
    <section id="experience" className="timeline-section">
      <div className="timeline-container">
        <div className="timeline-grid">
          <div className="timeline-intro" data-reveal>
            <div className="tech-breadcrumb">
              <span>AKSHAT</span>
              <span className="slash">/</span>
              <span>05</span>
              <span className="slash">/</span>
              <span>PRACTICAL TRACK RECORD</span>
            </div>

            <h2 className="section-title">
              Engineering <em>Experience</em> &amp; Systems
            </h2>
            <p className="lead">
              Demonstrated engineering execution through end-to-end production AI applications, open-source architectures, and benchmarked research implementations.
            </p>
          </div>

          <div className="timeline-list">
            <div className="timeline-item" data-reveal>
              <div className="item-header">
                <h3 className="item-title">SmartClass AI Attendance Platform</h3>
                <span className="item-period">Practical Engineering</span>
              </div>
              <div className="item-role">Lead AI Developer &amp; System Architect</div>
              <p className="item-desc">
                Architected and deployed a multi-modal biometric authentication platform integrating dlib facial feature vectors, Resemblyzer voice embeddings, and Supabase cloud persistence. Built teacher/student dashboards, QR enrollment pipelines, and sub-second attendance verification workflows.
              </p>
            </div>

            <div className="timeline-item" data-reveal>
              <div className="item-header">
                <h3 className="item-title">IoT Network Intrusion Detection Engine</h3>
                <span className="item-period">Applied ML Security</span>
              </div>
              <div className="item-role">Machine Learning Engineer</div>
              <p className="item-desc">
                Engineered an ensemble cyberattack detection engine trained on the CICIoT2023 dataset. Evaluated and tuned XGBoost and Random Forest classifiers for low false-positive rates on IoT network telemetry, deployed via asynchronous FastAPI microservices.
              </p>
            </div>

            <div className="timeline-item" data-reveal>
              <div className="item-header">
                <h3 className="item-title">Deep Learning &amp; Neural Research Implementations</h3>
                <span className="item-period">Neural Engineering</span>
              </div>
              <div className="item-role">Deep Learning Practitioner</div>
              <p className="item-desc">
                Developed comparative neural benchmarking between Convolutional (CNN) and Recurrent (LSTM) neural networks in PyTorch on MNIST. Implemented T5 Transformer sequence-to-sequence summarization pipelines and non-linear tabular multi-layer perceptron models.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

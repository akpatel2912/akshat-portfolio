'use client';

export default function Achievements() {
  const achievements = [
    {
      num: '01',
      title: 'Multi-Modal Biometric System Engineering',
      desc: 'Successfully engineered and integrated real-time facial feature vector detection with voice acoustic speaker embeddings into a cohesive attendance platform (SmartClass).'
    },
    {
      num: '02',
      title: 'CICIoT2023 Intrusion Detection Pipeline',
      desc: 'Implemented and evaluated ensemble machine learning classifiers (XGBoost + Random Forest) on large-scale real-world IoT attack telemetry with low-latency API serving.'
    },
    {
      num: '03',
      title: 'Comparative Deep Learning Benchmarking',
      desc: 'Formulated and trained custom PyTorch CNN and RNN (LSTM) architectures on handwritten digit classification, evaluating test loss, confusion matrices, and classification metrics.'
    },
    {
      num: '04',
      title: 'Transformer-Based Abstractive NLP Pipeline',
      desc: 'Constructed an end-to-end abstractive summarization service leveraging the T5 Transformer sequence-to-sequence neural network.'
    }
  ];

  return (
    <section id="achievements" className="timeline-section" style={{ borderBottom: '1px solid var(--line)' }}>
      <div className="timeline-container">
        <div className="timeline-grid">
          <div className="timeline-intro" data-reveal>
            <div className="tech-breadcrumb">
              <span>AKSHAT</span>
              <span className="slash">/</span>
              <span>07</span>
              <span className="slash">/</span>
              <span>MILESTONES</span>
            </div>

            <h2 className="section-title">
              Technical <em>Achievements</em> &amp; Milestones
            </h2>
            <p className="lead">
              Verified engineering accomplishments across multi-modal perception, neural model training, and automated workflow design.
            </p>
          </div>

          <div className="timeline-list">
            {achievements.map((item) => (
              <div key={item.num} className="timeline-item" data-reveal>
                <div className="item-header">
                  <h3 className="item-title">{item.title}</h3>
                  <span className="item-period">{item.num}</span>
                </div>
                <p className="item-desc" style={{ marginTop: '0.5rem' }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

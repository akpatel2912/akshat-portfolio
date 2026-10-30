'use client';

import { useState } from 'react';
import ProjectCard from './ProjectCard';

const PROJECTS = [
  {
    id: 'smartclass',
    title: 'SmartClass — AI Attendance System',
    category: ['AI/ML', 'Applications'],
    badge: 'Core Production AI',
    artType: 'network',
    description: 'Biometric automated attendance system combining real-time facial recognition and acoustic voice embeddings.',
    problem: 'Eliminates time-consuming manual roll calls and proxy attendance with instantaneous multi-modal identity verification.',
    tags: ['Python', 'Streamlit', 'dlib', 'face_recognition', 'Resemblyzer', 'Librosa', 'Supabase'],
    github: 'https://github.com/akpatel2912/SmartClass'
  },
  {
    id: 'iot-intrusion',
    title: 'IoT Network Intrusion Detection System',
    category: ['AI/ML', 'Software Engineering'],
    badge: 'Cybersecurity ML',
    artType: 'radar',
    description: 'Real-time malicious traffic classification engine trained on CICIoT2023 telemetry with high detection recall.',
    problem: 'Secures resource-constrained IoT mesh devices against cyberattacks with sub-millisecond asynchronous REST scoring.',
    tags: ['XGBoost', 'Random Forest', 'CICIoT2023', 'FastAPI', 'Uvicorn', 'Supabase'],
    github: 'https://github.com/akpatel2912/AI-Based-Network-Intrusion-Detection-for-IoT-Devices'
  },
  {
    id: 'text-summarizer',
    title: 'Transformer Text Summarizer App',
    category: ['AI/ML', 'Applications'],
    badge: 'NLP Architecture',
    artType: 'lattice',
    description: 'Abstractive NLP summarization tool powered by fine-tuned T5 Sequence-to-Sequence neural architecture.',
    problem: 'Distills complex documents, research papers, and technical articles into concise, actionable summaries.',
    tags: ['Python', 'T5 Transformer', 'PyTorch', 'Hugging Face', 'FastAPI', 'HTML/CSS/JS'],
    github: 'https://github.com/akpatel2912/Text_Summarizer_App'
  },
  {
    id: 'hospital-queue',
    title: 'Hospital Smart Turn & Queue Management',
    category: ['Software Engineering', 'Applications'],
    badge: 'Intelligent Systems',
    artType: 'cube',
    description: 'Intelligent automation-driven patient flow platform featuring fairness-aware priority scheduling.',
    problem: 'Reduces emergency and outpatient wait congestion using dynamic AI workload prediction and automated SMS/WhatsApp alerts.',
    tags: ['Python', 'Priority Queues', 'Workload Estimation', 'REST APIs', 'Notification Service'],
    github: 'https://github.com/akpatel2912/Hospital-smart-turn-management-system-'
  },
  {
    id: 'cnn-rnn-digits',
    title: 'Handwritten Digit Classification: CNN vs RNN',
    category: ['AI/ML'],
    badge: 'Deep Learning Study',
    artType: 'network',
    description: 'Comparative deep learning benchmarking comparing spatial CNN and sequential RNN (LSTM) models on MNIST.',
    problem: 'Analyzes spatial convolution vs temporal sequence representations using confusion matrices and loss trajectories.',
    tags: ['PyTorch', 'CNN', 'LSTM', 'Torchvision', 'Classification Metrics'],
    github: 'https://github.com/akpatel2912/Handwritten_Digit_Classification'
  },
  {
    id: 'smartcart-clustering',
    title: 'SmartCart Customer Behavioral Clustering',
    category: ['AI/ML', 'Software Engineering'],
    badge: 'Unsupervised ML',
    artType: 'radar',
    description: 'E-commerce cohort segmentation engine analyzing 2,240 customer vectors across 22 purchasing attributes.',
    problem: 'Uncovers latent consumer shopping personas and elasticity trends to optimize conversion and retention campaigns.',
    tags: ['Python', 'Scikit-learn', 'PCA', 'K-Means', 'Pandas', 'Seaborn'],
    github: 'https://github.com/akpatel2912/smart-cart-clustering-system'
  },
  {
    id: 'credit-wise',
    title: 'CreditWise Loan Evaluation System',
    category: ['AI/ML', 'Applications'],
    badge: 'Predictive Finance',
    artType: 'cube',
    description: 'Supervised predictive classification model for credit risk assessment and automated loan decisioning.',
    problem: 'Minimizes financial loan default rates through automated risk scoring and creditworthiness evaluations.',
    tags: ['Python', 'Scikit-learn', 'Imbalanced Learn', 'Feature Engineering'],
    github: 'https://github.com/akpatel2912/credit-wise-loan-system'
  },
  {
    id: 'ann-classifiers',
    title: 'Tabular Multi-Layer Perceptrons & Regressors',
    category: ['AI/ML'],
    badge: 'Neural Systems',
    artType: 'lattice',
    description: 'PyTorch deep feedforward networks for multi-class agricultural fruit classification and powerplant regression.',
    problem: 'Models non-linear boundary manifolds on tabular sensor telemetry with custom gradient descent optimization.',
    tags: ['PyTorch', 'ANN', 'Backpropagation', 'Tabular Deep Learning'],
    github: 'https://github.com/akpatel2912/ANN_DateFruit_Classifeir'
  }
];

const FILTERS = ['All', 'AI/ML', 'Software Engineering', 'Applications'];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects = activeFilter === 'All'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category.includes(activeFilter));

  return (
    <section id="projects" className="projects-section">
      <div className="projects-header">
        <div className="header-info" data-reveal>
          <div className="tech-breadcrumb">
            <span>AKSHAT</span>
            <span className="slash">/</span>
            <span>03</span>
            <span className="slash">/</span>
            <span>VERIFIED REPOSITORIES</span>
          </div>

          <h2 className="section-title">
            Featured <em>Projects</em> &amp; Engineering Systems
          </h2>
          <p className="lead">
            Production-grade systems, neural architectures, and intelligent software built from verified source repositories.
          </p>
        </div>

        {/* Functional Category Filters with smooth fade */}
        <div className="project-filters" role="tablist" data-reveal>
          {FILTERS.map((cat) => (
            <button
              key={cat}
              role="tab"
              aria-selected={activeFilter === cat}
              className={`filter-btn ${activeFilter === cat ? 'active' : ''}`}
              onClick={() => setActiveFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="projects-grid">
        {filteredProjects.map((project, idx) => (
          <ProjectCard key={project.id} project={project} index={idx} />
        ))}
      </div>
    </section>
  );
}

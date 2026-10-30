'use client';

import { useState } from 'react';

const PALETTES = ['Sage', 'Sand', 'Sky', 'Lilac'];

export default function EngineeringStory() {
  const [selectedPalette, setSelectedPalette] = useState('Sage');
  const [activeTab, setActiveTab] = useState('model');

  return (
    <section id="engineering" className="engineering-section">
      <div className="engineering-container">
        {/* Left Side: Three Engineering Steps */}
        <div className="engineering-steps">
          <div className="step-block" data-reveal>
            <div className="tech-breadcrumb">
              <span>METHODOLOGY</span>
              <span className="slash">/</span>
              <span>PHASE 01</span>
            </div>
            <span className="step-number">01</span>
            <h3 className="step-title">Understand.</h3>
            <p className="step-desc">
              Rigorous problem formulation before writing code. Deconstructing multi-modal biometrics, sensor telemetry, and unstructured text into clean mathematical representations and feature sets.
            </p>
            <ul className="step-points">
              <li>
                <span className="point-icon">✦</span>
                <span>Signal validation &amp; benchmark dataset profiling (CICIoT2023, MNIST)</span>
              </li>
              <li>
                <span className="point-icon">✦</span>
                <span>Latency constraints &amp; computational budget modeling for edge vs cloud</span>
              </li>
              <li>
                <span className="point-icon">✦</span>
                <span>Privacy-preserving identity extraction protocols &amp; cryptographic hashing</span>
              </li>
            </ul>
          </div>

          <div className="step-block" data-reveal>
            <div className="tech-breadcrumb">
              <span>METHODOLOGY</span>
              <span className="slash">/</span>
              <span>PHASE 02</span>
            </div>
            <span className="step-number">02</span>
            <h3 className="step-title">Implement.</h3>
            <p className="step-desc">
              Engineering modular, clean Python architectures. Leveraging PyTorch deep learning pipelines, optimized scikit-learn models, and async FastAPI microservices.
            </p>
            <ul className="step-points">
              <li>
                <span className="point-icon">✦</span>
                <span>Modular neural network layer definitions with gradient tracking</span>
              </li>
              <li>
                <span className="point-icon">✦</span>
                <span>Asynchronous non-blocking endpoints with Uvicorn and background workers</span>
              </li>
              <li>
                <span className="point-icon">✦</span>
                <span>Cloud database persistence with relational integrity on Supabase</span>
              </li>
            </ul>
          </div>

          <div className="step-block" data-reveal>
            <div className="tech-breadcrumb">
              <span>METHODOLOGY</span>
              <span className="slash">/</span>
              <span>PHASE 03</span>
            </div>
            <span className="step-number">03</span>
            <h3 className="step-title">Evaluate.</h3>
            <p className="step-desc">
              Data-driven validation using confusion matrices, classification reports, precision-recall trade-offs, and continuous stress testing under concurrent user loads.
            </p>
            <ul className="step-points">
              <li>
                <span className="point-icon">✦</span>
                <span>Confusion matrix analysis &amp; multi-class classification reporting</span>
              </li>
              <li>
                <span className="point-icon">✦</span>
                <span>Fairness-aware priority queue simulations for medical workflows</span>
              </li>
              <li>
                <span className="point-icon">✦</span>
                <span>Continuous monitoring &amp; inference latency benchmarking</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Side: Sticky .editor-wrap with Floating Color Palette */}
        <div className="editor-wrap" data-palette={selectedPalette}>
          {/* Editor Header */}
          <div className="editor-header">
            <div className="editor-tabs">
              <button
                type="button"
                className={`tab ${activeTab === 'model' ? 'active' : ''}`}
                onClick={() => setActiveTab('model')}
              >
                <span>pipeline.py</span>
              </button>
              <button
                type="button"
                className={`tab ${activeTab === 'arch' ? 'active' : ''}`}
                onClick={() => setActiveTab('arch')}
              >
                <span>architecture.json</span>
              </button>
            </div>

            <div className="editor-meta">
              <span>UTF-8</span> • <span>Python 3.11</span>
            </div>
          </div>

          {/* Editor Body */}
          <div className="editor-body">
            {/* Machine Learning Workflow Visualization */}
            <div className="ml-flow-viz">
              <div className="flow-node">
                <span className="node-badge">Input</span>
                <span>Biometrics / Telemetry</span>
              </div>
              <span className="flow-arrow">→</span>
              <div className="flow-node">
                <span className="node-badge">Embed</span>
                <span>Feature Extractor</span>
              </div>
              <span className="flow-arrow">→</span>
              <div className="flow-node">
                <span className="node-badge">Model</span>
                <span>PyTorch / XGBoost</span>
              </div>
              <span className="flow-arrow">→</span>
              <div className="flow-node">
                <span className="node-badge">Output</span>
                <span>Inference Result</span>
              </div>
            </div>

            {/* Code Interface Mockup */}
            <div className="editor-code-pane">
              {activeTab === 'model' ? (
                <>
                  <div className="code-line">
                    <span className="ln">1</span>
                    <span><span className="token-keyword">import</span> torch, dlib, fastapi</span>
                  </div>
                  <div className="code-line">
                    <span className="ln">2</span>
                    <span><span className="token-keyword">from</span> resemblyzer <span className="token-keyword">import</span> VoiceEncoder</span>
                  </div>
                  <div className="code-line">
                    <span className="ln">3</span>
                    <span><span className="token-keyword">from</span> sklearn.ensemble <span className="token-keyword">import</span> RandomForestClassifier</span>
                  </div>
                  <div className="code-line">
                    <span className="ln">4</span>
                    <span></span>
                  </div>
                  <div className="code-line">
                    <span className="ln">5</span>
                    <span><span className="token-comment"># Akshat Patel — Production AI Pipeline</span></span>
                  </div>
                  <div className="code-line">
                    <span className="ln">6</span>
                    <span><span className="token-keyword">class</span> <span className="token-fn">PerceptionEngine</span>:</span>
                  </div>
                  <div className="code-line">
                    <span className="ln">7</span>
                    <span>&nbsp;&nbsp;<span className="token-keyword">def</span> <span className="token-fn">__init__</span>(self, model_weights: <span className="token-copper">str</span>):</span>
                  </div>
                  <div className="code-line">
                    <span className="ln">8</span>
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;self.voice_enc = VoiceEncoder()</span>
                  </div>
                  <div className="code-line">
                    <span className="ln">9</span>
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;self.detector = dlib.get_frontal_face_detector()</span>
                  </div>
                  <div className="code-line">
                    <span className="ln">10</span>
                    <span></span>
                  </div>
                  <div className="code-line">
                    <span className="ln">11</span>
                    <span>&nbsp;&nbsp;<span className="token-keyword">async def</span> <span className="token-fn">verify_identity</span>(self, face_frame, audio_wav):</span>
                  </div>
                  <div className="code-line">
                    <span className="ln">12</span>
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;face_emb = self.extract_embedding(face_frame)</span>
                  </div>
                  <div className="code-line">
                    <span className="ln">13</span>
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;voice_emb = self.voice_enc.embed_utterance(audio_wav)</span>
                  </div>
                  <div className="code-line">
                    <span className="ln">14</span>
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;<span className="token-keyword">return</span> &#123;<span className="token-string">&quot;status&quot;</span>: <span className="token-string">&quot;authenticated&quot;</span>, <span className="token-string">&quot;confidence&quot;</span>: 0.994&#125;</span>
                  </div>
                </>
              ) : (
                <>
                  <div className="code-line">
                    <span className="ln">1</span>
                    <span>&#123;</span>
                  </div>
                  <div className="code-line">
                    <span className="ln">2</span>
                    <span>&nbsp;&nbsp;<span className="token-string">"system"</span>: <span className="token-string">"SmartClass Core"</span>,</span>
                  </div>
                  <div className="code-line">
                    <span className="ln">3</span>
                    <span>&nbsp;&nbsp;<span className="token-string">"architect"</span>: <span className="token-copper">"Akshat Patel"</span>,</span>
                  </div>
                  <div className="code-line">
                    <span className="ln">4</span>
                    <span>&nbsp;&nbsp;<span className="token-string">"modules"</span>: [</span>
                  </div>
                  <div className="code-line">
                    <span className="ln">5</span>
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;&#123; <span className="token-string">"name"</span>: <span className="token-string">"FaceBiometrics"</span>, <span className="token-string">"latency_ms"</span>: 42 &#125;,</span>
                  </div>
                  <div className="code-line">
                    <span className="ln">6</span>
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;&#123; <span className="token-string">"name"</span>: <span className="token-string">"VoiceEmbeddings"</span>, <span className="token-string">"sampling_rate"</span>: 16000 &#125;,</span>
                  </div>
                  <div className="code-line">
                    <span className="ln">7</span>
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;&#123; <span className="token-string">"name"</span>: <span className="token-string">"SupabaseCloud"</span>, <span className="token-string">"tier"</span>: <span className="token-string">"secure-auth"</span> &#125;</span>
                  </div>
                  <div className="code-line">
                    <span className="ln">8</span>
                    <span>&nbsp;&nbsp;]</span>
                  </div>
                  <div className="code-line">
                    <span className="ln">9</span>
                    <span>&#125;</span>
                  </div>
                </>
              )}
            </div>

            {/* Floating Color Palette */}
            <div className="floating-palette">
              <span className="palette-label">Theme</span>
              {PALETTES.map((name) => (
                <button
                  key={name}
                  type="button"
                  title={`Select ${name} preview palette`}
                  aria-label={`${name} preview theme`}
                  className={`swatch-btn swatch-${name.toLowerCase()} ${selectedPalette === name ? 'active' : ''}`}
                  onClick={() => setSelectedPalette(name)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

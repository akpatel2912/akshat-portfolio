'use client';

import { useEffect, useRef } from 'react';

export default function ParticleCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const isMobile = width < 768;
    const PARTICLE_COUNT = isMobile ? 320 : 650;
    const FOCAL_LENGTH = 380;
    const SPHERE_RADIUS = Math.min(width, height) * 0.28;

    // Generate particles with dual targets: 3D Sphere & 2D System Wireframe
    const particles = [];
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      // 1. Sphere coordinates (Fibonacci sphere distribution)
      const phi = Math.acos(1 - (2 * (i + 0.5)) / PARTICLE_COUNT);
      const theta = Math.PI * (1 + Math.sqrt(5)) * i;

      const sx = SPHERE_RADIUS * Math.sin(phi) * Math.cos(theta);
      const sy = SPHERE_RADIUS * Math.sin(phi) * Math.sin(theta);
      const sz = SPHERE_RADIUS * Math.cos(phi);

      // 2. 2D UI/AI System Wireframe coordinates (planar node network)
      const cols = 26;
      const col = i % cols;
      const row = Math.floor(i / cols);
      const spacingX = (Math.min(width * 0.7, 700)) / cols;
      const spacingY = 22;

      const wx = (col - cols / 2) * spacingX + (Math.sin(row * 0.8) * 15);
      const wy = (row - 12) * spacingY;
      const wz = 0;

      particles.push({
        sx, sy, sz,          // sphere coords
        wx, wy, wz,          // wireframe coords
        x: sx, y: sy, z: sz, // current coords
        baseSize: Math.random() * 1.6 + 1.1,
        colorHue: Math.random() > 0.4 ? 'copper' : 'ink'
      });
    }

    let angleX = 0;
    let angleY = 0;
    let scrollProgress = 0;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const vh = window.innerHeight;
      // Morph progress: 0 at top, 1 at 1.2 viewport heights
      scrollProgress = Math.min(Math.max(scrollY / (vh * 1.2), 0), 1);
    };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);

    const render = () => {
      // If motion is paused via MotionToggle or reduced-motion
      if (document.body.classList.contains('motion-paused')) {
        animId = requestAnimationFrame(render);
        return;
      }

      ctx.clearRect(0, 0, width, height);

      // Slow rotation for 3D depth
      angleY += 0.0035 * (1 - scrollProgress * 0.75);
      angleX += 0.0018 * (1 - scrollProgress * 0.75);

      const cosY = Math.cos(angleY);
      const sinY = Math.sin(angleY);
      const cosX = Math.cos(angleX);
      const sinX = Math.sin(angleX);

      const centerX = width * 0.5;
      const centerY = height * (0.42 - scrollProgress * 0.1);

      // Sort particles by depth for correct 3D rendering
      const rendered = [];

      for (let i = 0; i < PARTICLE_COUNT; i++) {
        const p = particles[i];

        // 3D rotation on sphere coords
        const rx1 = p.sx * cosY - p.sz * sinY;
        const rz1 = p.sz * cosY + p.sx * sinY;
        const ry1 = p.sy * cosX - rz1 * sinX;
        const rz2 = rz1 * cosX + p.sy * sinX;

        // Morph between 3D sphere and 2D wireframe system
        const targetX = (1 - scrollProgress) * rx1 + scrollProgress * p.wx;
        const targetY = (1 - scrollProgress) * ry1 + scrollProgress * p.wy;
        const targetZ = (1 - scrollProgress) * rz2 + scrollProgress * p.wz;

        // Smooth particle movement
        p.x += (targetX - p.x) * 0.12;
        p.y += (targetY - p.y) * 0.12;
        p.z += (targetZ - p.z) * 0.12;

        // Perspective projection
        const scale = FOCAL_LENGTH / (FOCAL_LENGTH + p.z + 200);
        const projX = centerX + p.x * scale;
        const projY = centerY + p.y * scale;
        const alpha = Math.min(Math.max((scale - 0.3) * 1.4, 0.15), 0.95);

        rendered.push({
          x: projX,
          y: projY,
          size: p.baseSize * scale,
          alpha,
          color: p.colorHue === 'copper' ? `rgba(232, 171, 126, ${alpha})` : `rgba(242, 240, 233, ${alpha * 0.7})`,
          z: p.z
        });
      }

      // Render wireframe connection lines between near neighbor particles when morphed
      if (scrollProgress > 0.25) {
        const lineAlpha = (scrollProgress - 0.25) * 0.22;
        ctx.strokeStyle = `rgba(232, 171, 126, ${lineAlpha})`;
        ctx.lineWidth = 0.65;
        ctx.beginPath();
        for (let i = 0; i < rendered.length; i += 3) {
          const p1 = rendered[i];
          const p2 = rendered[(i + 1) % rendered.length];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = dx * dx + dy * dy;
          if (dist < 4200) {
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
          }
        }
        ctx.stroke();
      }

      // Draw particles
      for (let i = 0; i < rendered.length; i++) {
        const p = rendered[i];
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, Math.max(p.size, 0.75), 0, Math.PI * 2);
        ctx.fill();
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <canvas id="sculpture" ref={canvasRef} aria-hidden="true" />;
}

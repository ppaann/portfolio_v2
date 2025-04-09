'use client';
import { useEffect, useRef } from 'react';
import { useMediaQuery } from '@uidotdev/usehooks';

const CanvasParticles = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles: {
    x: number;
    y: number;
    vx: number;
    vy: number;
    isMouse?: boolean;
  }[] = [];

  const mouse = { x: null as number | null, y: null as number | null };
  const isSmallScreen = useMediaQuery('(max-width: 640px)');
  const numParticles = isSmallScreen ? 60 : 120;
  const maxDist = isSmallScreen ? 60 : 120;
  const spotlightRadius = isSmallScreen ? 90 : 180;

  const hexToRgb = (hex: string) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? `${parseInt(result[1], 16)},${parseInt(result[2], 16)},${parseInt(
          result[3],
          16
        )}`
      : '0,0,0'; // fallback
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const getCSSVar = (name: string): string =>
      getComputedStyle(document.body).getPropertyValue(name).trim();

    const dotColor = getCSSVar('--dot'); // "#f8d784"
    const dotRGB = hexToRgb(dotColor); // Convert hex to RGB for use in canvas

    for (let i = 0; i < numParticles; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
      });
    }

    const mouseParticle = { x: 0, y: 0, vx: 0, vy: 0, isMouse: true };
    particles.push(mouseParticle);

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // === 1. Update positions ===
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        if (!p.isMouse) {
          p.x += p.vx;
          p.y += p.vy;
          if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
          if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        } else if (mouse.x !== null && mouse.y !== null) {
          p.x = mouse.x;
          p.y = mouse.y;
        }
      }
      // Draw particles
      for (const p of particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.isMouse ? 3 : 2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${dotRGB},${p.isMouse ? 1 : 0.2})`;
        ctx.fill();
      }

      // Draw lines (no gradient, static alpha)
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i];
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDist) {
            const alpha = 0.4 * (1 - dist / maxDist);
            ctx.strokeStyle = `rgba(${dotRGB}, ${alpha})`;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      // Glow spotlight effect
      if (mouse.x !== null && mouse.y !== null) {
        ctx.globalCompositeOperation = 'lighter';
        const gradient = ctx.createRadialGradient(
          mouse.x,
          mouse.y,
          0,
          mouse.x,
          mouse.y,
          spotlightRadius
        );
        gradient.addColorStop(0, `rgba(${dotRGB}, 0.25)`);
        gradient.addColorStop(1, `rgba(${dotRGB}, 0)`);

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, spotlightRadius, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalCompositeOperation = 'source-over'; // reset
      }

      requestAnimationFrame(draw);
    };

    draw();

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove);

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className='absolute top-0 left-0 w-full h-full z-[-1] dark:bg-black'
    />
  );
};

export default CanvasParticles;

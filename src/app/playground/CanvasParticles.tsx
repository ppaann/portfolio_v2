'use client';
import { useEffect, useRef } from 'react';

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
  const numParticles = 160; // doubled from 80
  const maxDist = 120;
  const spotlightRadius = 180;

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

      // === 2. Draw particles with spotlight brightness ===
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        const isMouse = p.isMouse;

        let brightness = 0.2; // default brightness

        if (!isMouse && mouse.x !== null && mouse.y !== null) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < spotlightRadius) {
            const boost = 1 - dist / spotlightRadius;
            brightness += boost * 0.5; // boost to max 1.0
          }
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, isMouse ? 3 : 2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${dotRGB},${isMouse ? 0.8 : brightness})`;
        ctx.fill();
      }

      // === 3. Draw connecting lines ===
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i];
          const b = particles[j];

          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDist) {
            // Midpoint of the line
            const mx = (a.x + b.x) / 2;
            const my = (a.y + b.y) / 2;

            // Distance to mouse
            let mouseAlpha = 0;
            if (mouse.x !== null && mouse.y !== null) {
              const mDist = Math.sqrt(
                (mx - mouse.x) ** 2 + (my - mouse.y) ** 2
              );
              if (mDist < spotlightRadius) {
                mouseAlpha = 1 - mDist / spotlightRadius;
              }
            }

            // Base opacity from distance between particles
            const baseAlpha = 0.2 * (1 - dist / maxDist);

            // Final alpha blends both
            const finalAlpha = baseAlpha + mouseAlpha * 0.8; // brighten near cursor

            // Optional: gradient stroke (if you want fancier fade)
            const gradient = ctx.createLinearGradient(a.x, a.y, b.x, b.y);
            gradient.addColorStop(0, `rgba(${dotRGB}, ${finalAlpha})`);
            gradient.addColorStop(1, `rgba(${dotRGB}, ${finalAlpha * 0.8})`);

            ctx.strokeStyle = gradient;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
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
      className='fixed top-0 left-0 w-full h-full z-[-1] dark:bg-black'
    />
  );
};

export default CanvasParticles;

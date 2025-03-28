'use client';
// OrigamiGrid.tsx
import { useEffect, useRef } from "react";

const OrigamiGrid = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const spacing = 60;
  const radius = 3;
  const maxDist = 100;
  const repelRadius = 120;

  const mouse = { x: null as number | null, y: null as number | null };

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const cols = Math.floor(canvas.width / spacing);
    const rows = Math.floor(canvas.height / spacing);

    // Build dot grid
    const dots: { x: number; y: number; baseX: number; baseY: number }[] = [];
    for (let y = 0; y <= rows; y++) {
      for (let x = 0; x <= cols; x++) {
        const px = x * spacing;
        const py = y * spacing;
        dots.push({ x: px, y: py, baseX: px, baseY: py });
      }
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < dots.length; i++) {
        const p = dots[i];

        // Soft repulsion from mouse
        if (mouse.x !== null && mouse.y !== null) {
          const dx = p.baseX - mouse.x;
          const dy = p.baseY - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < repelRadius) {
            const angle = Math.atan2(dy, dx);
            const force = (repelRadius - dist) / repelRadius;
            p.x = p.baseX + Math.cos(angle) * force * 10;
            p.y = p.baseY + Math.sin(angle) * force * 10;
          } else {
            p.x = p.baseX;
            p.y = p.baseY;
          }
        }

        // Draw dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, radius, 0, Math.PI * 2);
        ctx.fillStyle = "#999";
        ctx.fill();
      }

      // Draw lines between nearby dots
      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          const a = dots[i];
          const b = dots[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < maxDist) {
            const alpha = 1 - dist / maxDist;
            ctx.strokeStyle = `rgba(150, 150, 150, ${alpha * 0.4})`;
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

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full z-[-1] bg-white"
    />
  );
};

export default OrigamiGrid;
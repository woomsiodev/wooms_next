'use client';

import { useEffect, useRef } from 'react';

interface IcebergAnimationProps {
  onPositionUpdate?: (x: number, y: number, rotation: number) => void;
}

export default function IcebergAnimation({ onPositionUpdate }: IcebergAnimationProps = {}) {
  const topCanvasRef = useRef<HTMLCanvasElement>(null);
  const bottomCanvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const topCanvas = topCanvasRef.current;
    const bottomCanvas = bottomCanvasRef.current;
    const container = containerRef.current;
    if (!topCanvas || !bottomCanvas || !container) return;

    const TWO_PI = Math.PI * 2;
    const viewWidth = window.innerWidth;
    const viewHeight = window.innerHeight;
    const halfWidth = viewWidth * 0.5;
    const halfHeight = viewHeight * 0.5;

    const tctx = topCanvas.getContext('2d');
    const bctx = bottomCanvas.getContext('2d');
    if (!tctx || !bctx) return;

    const contexts = [tctx, bctx];

    const timeStep = 1 / 60;
    let time = 0;
    let animationId: number;

    // Create iceberg image programmatically
    const createIcebergPath = (ctx: CanvasRenderingContext2D, w: number, h: number) => {
      ctx.beginPath();
      ctx.moveTo(-w * 0.5, 0);

      // Top part (visible) - jagged edges
      ctx.lineTo(-w * 0.3, -h * 0.2);
      ctx.lineTo(-w * 0.4, -h * 0.35);
      ctx.lineTo(-w * 0.2, -h * 0.5);
      ctx.lineTo(0, -h * 0.45);
      ctx.lineTo(w * 0.2, -h * 0.5);
      ctx.lineTo(w * 0.3, -h * 0.3);
      ctx.lineTo(w * 0.5, 0);

      // Bottom part (underwater) - wider and smoother
      ctx.lineTo(w * 0.6, h * 0.3);
      ctx.lineTo(w * 0.7, h * 0.7);
      ctx.lineTo(w * 0.5, h);
      ctx.lineTo(0, h * 0.95);
      ctx.lineTo(-w * 0.5, h);
      ctx.lineTo(-w * 0.7, h * 0.7);
      ctx.lineTo(-w * 0.6, h * 0.3);

      ctx.closePath();
    };

    class Iceberg {
      w: number;
      h: number;
      x: number = 0;
      y: number = 0;

      constructor(w: number, h: number) {
        this.w = w;
        this.h = h;
      }

      update() {
        // 30% langsamer: time * 0.7
        this.x = halfWidth + Math.sin(time * 0.7) * 5;
        this.y = halfHeight + Math.cos(time * 0.7) * 20;

        // Notify parent component of position change
        if (onPositionUpdate) {
          const r = Math.sin(time * 0.7) * Math.PI * 0.01;
          onPositionUpdate(this.x, this.y, r);
        }
      }

      draw() {
        // 30% langsamer: time * 0.7
        const r = Math.sin(time * 0.7) * Math.PI * 0.01;

        contexts.forEach((c) => {
          c.save();
          c.translate(this.x, this.y);
          c.rotate(r);

          // Draw iceberg shape
          createIcebergPath(c, this.w, this.h);

          // Gradient fill
          const gradient = c.createLinearGradient(0, -this.h * 0.5, 0, this.h);
          gradient.addColorStop(0, '#e8f4f8');
          gradient.addColorStop(0.3, '#c5e3ed');
          gradient.addColorStop(0.5, '#a8d5e2');
          gradient.addColorStop(1, '#7bb8cc');

          c.fillStyle = gradient;
          c.fill();

          // Stroke
          c.strokeStyle = '#5a9fb5';
          c.lineWidth = 2;
          c.stroke();

          c.restore();
        });
      }
    }

    class Bubble {
      r: number;
      swayDir: number;
      speed: number;
      x: number = 0;
      y: number = 0;
      sway: number = 0;

      constructor() {
        this.r = 2 + Math.random() * 2;
        this.swayDir = Math.random() > 0.5 ? -1 : 1;
        // 30% langsamer: (20 + Math.random() * 30) * 0.7
        this.speed = (20 + Math.random() * 30) * 0.7;
      }

      update() {
        // 30% langsamer: time * 0.7
        this.sway = Math.sin(time * 0.7) * 30 * this.swayDir;
        this.y -= this.speed * timeStep;
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = '#0083b9';
        ctx.globalAlpha = 0.6;
        ctx.beginPath();
        ctx.arc(this.x + this.sway, this.y, this.r, 0, TWO_PI);
        ctx.fill();
        ctx.globalAlpha = 1;
      }
    }

    function initCanvases() {
      topCanvas.width = bottomCanvas.width = viewWidth;
      topCanvas.height = bottomCanvas.height = halfHeight;

      const zoom = 1.3;

      bctx.translate(halfWidth, halfHeight);
      bctx.scale(zoom, zoom);
      bctx.translate(-halfWidth, -halfHeight);
      bctx.translate(0, -halfHeight / zoom);
    }

    // Initialize objects
    const iceberg = new Iceberg(400, 200);
    iceberg.x = halfWidth;
    iceberg.y = 0;

    const bubbles: Bubble[] = [];
    for (let i = 0; i < 100; i++) {
      const bubble = new Bubble();
      bubble.x = Math.random() * viewWidth;
      bubble.y = Math.random() * halfHeight + halfHeight;
      bubbles.push(bubble);
    }

    function update() {
      iceberg.update();

      bubbles.forEach((b) => {
        b.update();
        if (b.y < halfHeight) {
          b.y = viewHeight;
        }
      });
    }

    function draw() {
      // Clear top canvas (sky/water surface)
      tctx.fillStyle = '#87CEEB';
      tctx.fillRect(0, 0, viewWidth, viewHeight);

      // Clear bottom canvas (underwater)
      bctx.fillStyle = '#092C4C';
      bctx.fillRect(0, 0, viewWidth, viewHeight);

      iceberg.draw();

      bubbles.forEach((b) => {
        b.draw(bctx);
      });
    }

    function loop() {
      update();
      draw();
      time += timeStep;
      animationId = requestAnimationFrame(loop);
    }

    initCanvases();
    loop();

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden"
      style={{
        backgroundColor: '#092C4C'
      }}
    >
      <canvas
        ref={topCanvasRef}
        className="absolute top-0 left-0 w-full h-1/2"
        style={{ zIndex: 1 }}
      />
      <canvas
        ref={bottomCanvasRef}
        className="absolute bottom-0 left-0 w-full h-1/2"
        style={{
          filter: 'blur(3px)',
          WebkitFilter: 'blur(3px)'
        }}
      />
    </div>
  );
}

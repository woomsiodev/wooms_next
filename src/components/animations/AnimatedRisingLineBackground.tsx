import React, { useEffect, useMemo, useState } from "react";

type Point = { x: number; y: number };

type AnimatedRisingLineBackgroundProps = {
  className?: string;
  strokeColor?: string;
  glowColor?: string;
  gridColor?: string;
  fillColor?: string;
  speed?: number;
  lineWidth?: number;
  opacity?: number;
};

const WIDTH = 1600;
const HEIGHT = 700;
const POINT_COUNT = 42;

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

function createInitialPoints(): Point[] {
  const step = WIDTH / (POINT_COUNT - 1);
  let y = HEIGHT * 0.72;

  return Array.from({ length: POINT_COUNT }, (_, i) => {
    const noise = (Math.random() - 0.35) * 28;
    const rise = 3 + Math.random() * 5;
    y = clamp(y - rise + noise, HEIGHT * 0.14, HEIGHT * 0.82);

    return {
      x: i * step,
      y,
    };
  });
}

function pointsToPath(points: Point[]) {
  if (!points.length) return "";

  let d = `M ${points[0].x} ${points[0].y}`;

  for (let i = 1; i < points.length; i++) {
    const prev = points[i - 1];
    const curr = points[i];
    const cx = (prev.x + curr.x) / 2;
    d += ` C ${cx} ${prev.y}, ${cx} ${curr.y}, ${curr.x} ${curr.y}`;
  }

  return d;
}

function areaPath(points: Point[]) {
  if (!points.length) return "";
  const line = pointsToPath(points);
  const last = points[points.length - 1];
  const first = points[0];
  return `${line} L ${last.x} ${HEIGHT} L ${first.x} ${HEIGHT} Z`;
}

export default function AnimatedRisingLineBackground({
  className = "",
  strokeColor = "#D4B16A",
  glowColor = "rgba(212, 177, 106, 0.28)",
  gridColor = "rgba(212, 177, 106, 0.12)",
  fillColor = "rgba(212, 177, 106, 0.08)",
  speed = 1.2,
  lineWidth = 4,
  opacity = 0.72,
}: AnimatedRisingLineBackgroundProps) {
  const [points, setPoints] = useState<Point[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setPoints(createInitialPoints());
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    let frame = 0;
    let animationId = 0;
    const step = WIDTH / (POINT_COUNT - 1);

    const tick = () => {
      frame += speed;

      setPoints((prev) => {
        if (prev.length === 0) return prev;

        const shifted = prev.map((point) => ({ ...point, x: point.x - speed }));

        let next = shifted;

        if (shifted[0].x <= -step) {
          const base = shifted[shifted.length - 1];
          const driftUp = 6 + Math.random() * 10;
          const pullDown = Math.random() > 0.72 ? Math.random() * 16 : 0;
          const randomNoise = (Math.random() - 0.45) * 12;
          const nextY = clamp(
            base.y - driftUp + pullDown + randomNoise,
            HEIGHT * 0.1,
            HEIGHT * 0.8
          );

          next = [...shifted.slice(1), { x: WIDTH, y: nextY }];
        }

        return next;
      });

      animationId = requestAnimationFrame(tick);
    };

    animationId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animationId);
  }, [speed, mounted]);

  const linePath = useMemo(() => pointsToPath(points), [points]);
  const fillPath = useMemo(() => areaPath(points), [points]);

  if (!mounted) {
    return null;
  }

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      <svg
        viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
        className="h-full w-full"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <filter id="chartGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={fillColor} />
            <stop offset="100%" stopColor="rgba(255,255,255,0)" />
          </linearGradient>
        </defs>

        {[0.2, 0.4, 0.6, 0.8].map((y, i) => (
          <line
            key={`h-${i}`}
            x1="0"
            y1={HEIGHT * y}
            x2={WIDTH}
            y2={HEIGHT * y}
            stroke={gridColor}
            strokeWidth="1"
          />
        ))}

        {[0.2, 0.4, 0.6, 0.8].map((x, i) => (
          <line
            key={`v-${i}`}
            x1={WIDTH * x}
            y1="0"
            x2={WIDTH * x}
            y2={HEIGHT}
            stroke={gridColor}
            strokeWidth="1"
          />
        ))}

        <path d={fillPath} fill="url(#chartFill)" opacity={opacity * 0.9} />

        <path
          d={linePath}
          fill="none"
          stroke={glowColor}
          strokeWidth={lineWidth + 10}
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#chartGlow)"
          opacity={opacity * 0.55}
        />

        <path
          d={linePath}
          fill="none"
          stroke={strokeColor}
          strokeWidth={lineWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity={opacity}
        />

        {points.slice(-8).map((point, index, arr) => {
          const fade = (index + 1) / arr.length;
          return (
            <circle
              key={`${point.x}-${point.y}`}
              cx={point.x}
              cy={point.y}
              r={index === arr.length - 1 ? 5.5 : 3.2}
              fill={strokeColor}
              opacity={fade * opacity}
            />
          );
        })}
      </svg>
    </div>
  );
}

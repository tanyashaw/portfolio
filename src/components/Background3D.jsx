import "./Background3D.css";

// Floating 3D wireframe cubes
const CUBES = [
  { size: 80,  x: "8%",   y: "12%", duration: 20, delay: 0   },
  { size: 48,  x: "88%",  y: "8%",  duration: 16, delay: 3   },
  { size: 64,  x: "78%",  y: "58%", duration: 24, delay: 6   },
  { size: 36,  x: "5%",   y: "70%", duration: 18, delay: 1.5 },
  { size: 56,  x: "60%",  y: "82%", duration: 22, delay: 4   },
  { size: 28,  x: "42%",  y: "5%",  duration: 14, delay: 7   },
];

// Scattered decorative stars
const STARS = [
  { size: 24, x: "12%", y: "15%", color: "#38BDF8", duration: 6, delay: 0 },
  { size: 18, x: "85%", y: "22%", color: "#818CF8", duration: 7, delay: 1 },
  { size: 28, x: "75%", y: "65%", color: "#34D399", duration: 8, delay: 2 },
  { size: 14, x: "6%",  y: "80%", color: "#38BDF8", duration: 5, delay: 0.5 },
  { size: 20, x: "92%", y: "85%", color: "#818CF8", duration: 6.5, delay: 1.5 },
  { size: 16, x: "50%", y: "40%", color: "#34D399", duration: 5.5, delay: 3 },
];

function Cube({ size, x, y, duration, delay }) {
  const h = size;
  const ht = h / 2;

  return (
    <div
      className="bg3d__cube-wrap"
      style={{ left: x, top: y, animationDuration: `${duration}s`, animationDelay: `${delay}s` }}
      aria-hidden="true"
    >
      <div className="bg3d__cube" style={{ width: h, height: h }}>
        <div className="bg3d__face bg3d__face--front"  style={{ width: h, height: h, transform: `translateZ(${ht}px)` }} />
        <div className="bg3d__face bg3d__face--back"   style={{ width: h, height: h, transform: `rotateY(180deg) translateZ(${ht}px)` }} />
        <div className="bg3d__face bg3d__face--right"  style={{ width: h, height: h, transform: `rotateY(90deg) translateZ(${ht}px)` }} />
        <div className="bg3d__face bg3d__face--left"   style={{ width: h, height: h, transform: `rotateY(-90deg) translateZ(${ht}px)` }} />
        <div className="bg3d__face bg3d__face--top"    style={{ width: h, height: h, transform: `rotateX(90deg) translateZ(${ht}px)` }} />
        <div className="bg3d__face bg3d__face--bottom" style={{ width: h, height: h, transform: `rotateX(-90deg) translateZ(${ht}px)` }} />
      </div>
    </div>
  );
}

export default function Background3D() {
  return (
    <div className="bg3d" aria-hidden="true">
      {/* Perspective grid floor */}
      <div className="bg3d__scene">
        <div className="bg3d__grid" />
      </div>

      {/* Floating 3D wireframe cubes */}
      {CUBES.map((c, i) => (
        <Cube key={i} {...c} />
      ))}

      {/* Floating background stars */}
      {STARS.map((s, i) => (
        <div
          key={i}
          className="bg3d__star"
          style={{
            left: s.x,
            top: s.y,
            animationDuration: `${s.duration}s`,
            animationDelay: `${s.delay}s`,
            color: s.color,
          }}
        >
          <svg width={s.size} height={s.size} viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17 5.8 21.3l2.4-7.4L2 9.4h7.6z" />
          </svg>
        </div>
      ))}

      {/* Ambient glow spots */}
      <div className="bg3d__glow bg3d__glow--1" />
      <div className="bg3d__glow bg3d__glow--2" />
      <div className="bg3d__glow bg3d__glow--3" />
    </div>
  );
}

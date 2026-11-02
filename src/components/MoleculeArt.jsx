// Decorative hexagonal / molecular line art — a nod to catalysts, MOFs and furan rings.
export function HexLattice({ className = '' }) {
  const hexes = [];
  const r = 34;
  const w = Math.sqrt(3) * r;
  for (let row = 0; row < 7; row++) {
    for (let col = 0; col < 6; col++) {
      const x = col * w + (row % 2 ? w / 2 : 0) + 40;
      const y = row * r * 1.5 + 40;
      const pts = Array.from({ length: 6 }, (_, i) => {
        const a = (Math.PI / 3) * i + Math.PI / 6;
        return `${(x + r * Math.cos(a)).toFixed(1)},${(y + r * Math.sin(a)).toFixed(1)}`;
      }).join(' ');
      hexes.push(<polygon key={`${row}-${col}`} points={pts} />);
    }
  }
  return (
    <svg className={className} viewBox="0 0 440 400" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true">
      {hexes}
      {[[99, 74], [217, 125], [158, 227], [276, 227], [335, 125], [217, 329]].map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r="5" fill="currentColor" stroke="none" />
      ))}
    </svg>
  );
}

// Furfural-like ring with substituents — used in the hero.
export function FuranMolecule({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden="true">
      <polygon points="100,52 140,81 125,128 75,128 60,81" />
      <line x1="69" y1="85" x2="98" y2="64" />
      <line x1="80" y1="120" x2="120" y2="120" />
      <line x1="140" y1="81" x2="176" y2="66" />
      <line x1="176" y1="66" x2="186" y2="30" />
      <line x1="181" y1="64" x2="190" y2="32" />
      <text x="96" y="146" fill="currentColor" stroke="none" fontSize="15" fontFamily="var(--font-mono)">O</text>
      <text x="184" y="24" fill="currentColor" stroke="none" fontSize="15" fontFamily="var(--font-mono)">O</text>
      <circle cx="100" cy="52" r="3.5" fill="currentColor" />
      <circle cx="60" cy="81" r="3.5" fill="currentColor" />
      <circle cx="176" cy="66" r="3.5" fill="currentColor" />
    </svg>
  );
}

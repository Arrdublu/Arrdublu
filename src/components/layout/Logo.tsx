
export function Logo() {
  return (
    <svg width="150" height="40" viewBox="0 0 150 40" xmlns="http://www.w3.org/2000/svg" className="font-headline">
      <style>
        {`
          .arr-text { fill: hsl(var(--primary)); }
          .dublu-text { fill: hsl(var(--primary)); }
          .dot1 { fill: hsl(var(--accent)); }
          .dot2 { fill: hsl(var(--accent)); }
          .dot3 { fill: hsl(var(--accent)); }
          .tagline-text { fill: hsl(var(--muted-foreground)); }
        `}
      </style>
      <text x="0" y="22" fontSize="24" className="arr-text font-bold">Arr</text>
      <text x="45" y="22" fontSize="24" className="dublu-text font-bold">d</text>
      <circle cx="51" cy="4" r="2.5" className="dot1" />
      <circle cx="59" cy="4" r="2.5" className="dot1" />
      <text x="65" y="22" fontSize="24" className="dublu-text font-bold">übl</text>
      <circle cx="70.5" cy="4" r="2.5" className="dot2" />
      <circle cx="78.5" cy="4" r="2.5" className="dot2" />
      <text x="110" y="22" fontSize="24" className="dublu-text font-bold">ü</text>
      <circle cx="115.5" cy="4" r="2.5" className="dot3" />
      <circle cx="123.5" cy="4" r="2.5" className="dot3" />

      <text x="68" y="35" fontSize="10" className="tagline-text">to create.</text>
    </svg>
  );
}

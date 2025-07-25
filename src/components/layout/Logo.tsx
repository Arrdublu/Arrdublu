
export function Logo() {
  return (
    <svg
      width="150"
      height="40"
      viewBox="0 0 150 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Arrdublu Logo"
    >
      <style>
        {`
          .arr-text { fill: hsl(var(--primary)); }
          .dublu-text { fill: hsl(var(--foreground)); }
          .dot1 { fill: hsl(var(--accent)); }
          .dot2 { fill: hsl(var(--secondary-foreground)); }
          .dot3 { fill: hsl(var(--primary-foreground)); stroke: hsl(var(--primary)); stroke-width: 0.5px; }
          .tagline-text { fill: hsl(var(--muted-foreground)); }
          @media (prefers-color-scheme: dark) {
            .dublu-text { fill: hsl(var(--primary-foreground)); }
            .dot3 { fill: hsl(var(--primary)); stroke: none; }
          }
        `}
      </style>
      <text x="10" y="28" fontFamily="Alegreya, serif" fontSize="30" fontWeight="bold">
        <tspan className="arr-text">Arr</tspan>
        <tspan className="dublu-text">düblü</tspan>
      </text>
      <circle className="dot1" cx="62" cy="12" r="2" />
      <circle className="dot2" cx="68" cy="12" r="2" />
      <circle className="dot3" cx="74" cy="12" r="2" />
      <text
        x="148"
        y="36"
        fontFamily="Alegreya, serif"
        fontSize="9"
        textAnchor="end"
        className="tagline-text"
      >
        to create.
      </text>
    </svg>
  );
}

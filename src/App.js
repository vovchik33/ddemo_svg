export default function App() {
  const l = 100;
  const a = new Array(l).fill(1);
  return (
    <div className="App">
      <svg viewBox="0 0 100 100">
        <defs>
          <radialGradient
            cx="50%"
            cy="100%"
            fx="50%"
            fy="100%"
            r="88.1887113%"
            gradientTransform="translate(0.500000,1.000000),scale(0.894740,1.000000),rotate(90.000000),translate(-0.500000,-1.000000)"
            id="radial-gradient"
          >
            <stop offset="0" stopColor="#3a3d3a" />
            <stop offset=".308" stopColor="#d2d4d0" stopOpacity=".86" />
            <stop offset=".477" stopColor="#f6f8f5" stopOpacity=".76" />
            <stop offset=".675" stopColor="#e8eae6" stopOpacity=".8" />
            <stop offset=".774" stopColor="#c7cac7" />
            <stop offset="1" stopColor="#6e706f" />
          </radialGradient>
        </defs>
        <rect x="0" y="0" width="100" height="100" fill="#f00" />
        {a.map((_, index) => (
          <g
            key={index}
            transform={`translate(${((index % (l / 10)) * 100) / (l / 10)}, ${
              Math.floor(index / (l / 10)) * 10
            })`}
          >
            <g transform="translate(1,1)">
              <circle
                cx="5"
                cy="5"
                r="6"
                fillOpacity="1"
                fill="url(#radial-gradient)"
              />
              <text
                fontSize="0.18em"
                transform="translate(5,5)"
                textAnchor="middle"
              >
                <tspan dy="0.2em">Name</tspan>
              </text>
            </g>
          </g>
        ))}
      </svg>
    </div>
  );
}

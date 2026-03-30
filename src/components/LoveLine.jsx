function LoveLine({ topAnchors, bottomAnchors }) {
  return (
    <svg className="love-line" viewBox="0 0 1100 700">
      {/* TOP ROPE */}
      <path
        d="
          M 50 180
          C 250 140, 350 220, 550 180
          S 850 140, 1050 180
        "
        fill="none"
        stroke="#2f2f2f"
        strokeWidth="3"
      />

      {/* TURN */}
      <path
        d="
          M 1050 180
          C 1100 300, 1100 400, 1050 520
        "
        fill="none"
        stroke="#2f2f2f"
        strokeWidth="3"
      />

      {/* BOTTOM ROPE */}
      <path
        d="
          M 1050 520
          C 850 560, 750 480, 550 520
          S 250 560, 50 520
        "
        fill="none"
        stroke="#2f2f2f"
        strokeWidth="3"
      />

      {topAnchors.map((x, i) => (
        <circle key={`t-${i}`} cx={x} cy={180} r="5" className="bulb" />
      ))}

      {bottomAnchors.map((x, i) => (
        <circle key={`b-${i}`} cx={x} cy={520} r="5" className="bulb" />
      ))}
    </svg>
  );
}

export default LoveLine;

/**
 * @fileoverview Today's score radial / circular chart.
 * Shows a percentage arc with a centered label on a white card.
 * Uses a custom SVG arc for pixel-perfect rendering.
 */

interface ScoreRadialChartProps {
  /** Score as a decimal between 0 and 1 (e.g. 0.12 = 12%) */
  score: number
}

/**
 * Converts polar coordinates to cartesian for SVG arc paths.
 */
function polarToCartesian(cx: number, cy: number, r: number, angleDeg: number) {
  const rad = ((angleDeg - 90) * Math.PI) / 180
  return {
    x: cx + r * Math.cos(rad),
    y: cy + r * Math.sin(rad),
  }
}

/**
 * Builds an SVG arc path string.
 */
function describeArc(cx: number, cy: number, r: number, startAngle: number, endAngle: number) {
  const start = polarToCartesian(cx, cy, r, endAngle)
  const end = polarToCartesian(cx, cy, r, startAngle)
  const largeArc = endAngle - startAngle <= 180 ? '0' : '1'
  return `M ${start.x} ${start.y} A ${r} ${r} 0 ${largeArc} 0 ${end.x} ${end.y}`
}

/**
 * Circular progress chart showing today's score as a percentage arc.
 */
export default function ScoreRadialChart({ score }: ScoreRadialChartProps) {
  const scorePercent = Math.round(score * 100)

  const cx = 130
  const cy = 130
  const r = 80
  const startAngle = 90   // top, going clockwise
  const sweepAngle = scorePercent * 3.6  // 100% = 360°
  const endAngle = startAngle + sweepAngle

  const arcPath = describeArc(cx, cy, r, startAngle, endAngle)

  return (
    <section
      className="bg-[#FBFBFB] rounded-xl shadow-sm relative"
      aria-label={`Score aujourd'hui: ${scorePercent}%`}
      style={{ height: 263 }}
    >
      {/* Title */}
      <h2 className="absolute top-6 left-6 text-base font-medium text-[#282D30] z-10">
        Score aujourd&apos;hui
      </h2>

      {/* SVG Arc */}
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 260 260"
        className="absolute inset-0"
        aria-hidden="true"
      >
        {/* Background track circle */}
        <circle cx={cx} cy={cy} r={r} fill="none" stroke="#F5F5F5" strokeWidth="10" />
        {/* White inner fill */}
        <circle cx={cx} cy={cy} r={r - 5} fill="white" />
        {/* Colored arc */}
        <path
          d={arcPath}
          fill="none"
          stroke="#FF0000"
          strokeWidth="10"
          strokeLinecap="round"
        />
      </svg>

      {/* Center label */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
        <span className="text-3xl font-bold text-[#282D30]">{scorePercent}%</span>
        <span className="text-sm font-medium text-[#74798C] text-center max-w-[80px] leading-snug mt-1">
          de votre objectif
        </span>
      </div>
    </section>
  )
}

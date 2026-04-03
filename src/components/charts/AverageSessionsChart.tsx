/**
 * @fileoverview Average session length line chart.
 * Displays average session duration by day of week (Mon-Sun).
 * Dark background gradient, custom tooltip.
 */

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Rectangle,
} from 'recharts'
import type { AverageSession } from '../../types/sportTypes'

interface AverageSessionsChartProps {
  /** Normalized average session data (7 days) */
  data: AverageSession[]
}

interface CustomTooltipProps {
  active?: boolean
  payload?: Array<{ value?: number }>
}

/** Custom tooltip */
function CustomTooltip({ active, payload }: CustomTooltipProps) {
  if (!active || !payload || !payload.length) return null

  return (
    <div className="bg-white text-[#282D30] text-xs font-medium px-3 py-2 shadow-md">
      {payload[0]?.value} min
    </div>
  )
}

/** Custom cursor: dark overlay on the right of the hover point */
function CustomCursor({ points, width }: { points?: { x: number }[]; width?: number; height?: number }) {
  if (!points || !points.length) return null
  const { x } = points[0]
  return (
    <Rectangle
      x={x}
      y={0}
      width={width ?? 0}
      height={300}
      fill="rgba(0,0,0,0.1)"
    />
  )
}

/**
 * Smooth line chart on a red gradient background showing average session duration per day of week.
 */
export default function AverageSessionsChart({ data }: AverageSessionsChartProps) {
  return (
    <section
      className="rounded-xl overflow-hidden shadow-sm"
      style={{ background: 'linear-gradient(to bottom right, #FF0000, #E60000)' }}
      aria-label="Durée moyenne des sessions"
    >
      <div className="px-6 pt-6 pb-0">
        <h2 className="text-sm font-medium text-white/70 leading-snug max-w-[120px]">
          Durée moyenne des sessions
        </h2>
      </div>

      <ResponsiveContainer width="100%" height={200}>
        <LineChart
          data={data}
          margin={{ top: 20, right: 16, left: 16, bottom: 16 }}
        >
          <XAxis
            dataKey="day"
            tick={{ fontSize: 12, fill: 'rgba(255,255,255,0.7)' }}
            tickLine={false}
            axisLine={false}
          />
          <YAxis hide domain={['dataMin - 10', 'dataMax + 20']} />
          <Tooltip
            content={<CustomTooltip />}
            cursor={<CustomCursor />}
          />
          <Line
            type="monotone"
            dataKey="sessionLength"
            stroke="rgba(255,255,255,0.8)"
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 5, fill: 'white', strokeWidth: 4, stroke: 'rgba(255,255,255,0.4)' }}
          />
        </LineChart>
      </ResponsiveContainer>
    </section>
  )
}

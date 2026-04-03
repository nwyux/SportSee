/**
 * @fileoverview Performance radar chart.
 * Displays 6 athletic metrics on a dark background radar chart.
 */

import {
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from 'recharts'
import type { PerformanceEntry } from '../../types/sportTypes'

interface PerformanceRadarChartProps {
  /** Normalized performance data (6 metrics) */
  data: PerformanceEntry[]
}

/**
 * Hexagonal radar chart showing 6 performance metrics on a dark card.
 */
export default function PerformanceRadarChart({ data }: PerformanceRadarChartProps) {
  return (
    <section
      className="rounded-xl overflow-hidden shadow-sm"
      style={{ background: '#282D30' }}
      aria-label="Performances"
    >
      <ResponsiveContainer width="100%" height={263}>
        <RadarChart
          cx="50%"
          cy="50%"
          outerRadius="62%"
          data={data}
        >
          <PolarGrid
            gridType="polygon"
            stroke="rgba(255,255,255,0.2)"
            radialLines={false}
          />
          <PolarAngleAxis
            dataKey="subject"
            tick={{ fontSize: 12, fill: 'white', fontWeight: 500 }}
            tickLine={false}
          />
          <Radar
            dataKey="value"
            stroke="transparent"
            fill="#FF0101"
            fillOpacity={0.7}
          />
        </RadarChart>
      </ResponsiveContainer>
    </section>
  )
}

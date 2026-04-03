/**
 * @fileoverview Daily activity bar chart.
 * Shows kilogram weight and calories burned per day using a grouped BarChart.
 */

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'
import type { ActivityDay } from '../../types/sportTypes'

interface ActivityBarChartProps {
  /** Normalized daily activity data */
  data: ActivityDay[]
}

interface CustomTooltipProps {
  active?: boolean
  payload?: Array<{ value?: number }>
}

/** Custom tooltip showing kg and kcal values */
function CustomTooltip({ active, payload }: CustomTooltipProps) {
  if (!active || !payload || payload.length < 2) return null

  return (
    <div className="flex flex-col gap-3 bg-[#FF0000] text-white text-xs font-medium px-3 py-4 rounded shadow-lg">
      <span>{payload[0]?.value}kg</span>
      <span>{payload[1]?.value}Kcal</span>
    </div>
  )
}

/** Custom legend */
function CustomLegend() {
  return (
    <div className="flex items-center justify-end gap-8 pr-4">
      <div className="flex items-center gap-2">
        <span className="w-3 h-3 rounded-full bg-[#282D30] inline-block" />
        <span className="text-sm text-[#74798C]">Poids (kg)</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="w-3 h-3 rounded-full bg-[#FF0000] inline-block" />
        <span className="text-sm text-[#74798C]">Calories brûlées (kCal)</span>
      </div>
    </div>
  )
}

/**
 * Bar chart displaying daily activity: weight and calories burned per day.
 */
export default function ActivityBarChart({ data }: ActivityBarChartProps) {
  return (
    <section
      className="bg-[#FBFBFB] rounded-xl p-6 shadow-sm"
      aria-label="Activité quotidienne"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-base font-medium text-[#282D30]">Activité quotidienne</h2>
        <CustomLegend />
      </div>

      <ResponsiveContainer width="100%" height={200}>
        <BarChart
          data={data}
          barSize={7}
          barGap={8}
          margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
        >
          <CartesianGrid vertical={false} strokeDasharray="2 2" stroke="#DEDEDE" />
          <XAxis
            dataKey="day"
            tick={{ fontSize: 14, fill: '#9B9EAC' }}
            tickLine={false}
            axisLine={false}
          />
          <YAxis
            yAxisId="kg"
            orientation="right"
            tick={{ fontSize: 14, fill: '#9B9EAC' }}
            tickLine={false}
            axisLine={false}
            tickCount={3}
          />
          <YAxis yAxisId="cal" orientation="left" hide />
          <Tooltip
            content={<CustomTooltip />}
            cursor={{ fill: 'rgba(196,196,196,0.5)' }}
          />
          <Bar
            yAxisId="kg"
            dataKey="kilogram"
            name="Poids (kg)"
            fill="#282D30"
            radius={[3, 3, 0, 0]}
          />
          <Bar
            yAxisId="cal"
            dataKey="calories"
            name="Calories brûlées (kCal)"
            fill="#FF0000"
            radius={[3, 3, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </section>
  )
}

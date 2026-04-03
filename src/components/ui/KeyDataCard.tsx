/**
 * @fileoverview Key data card component (calories, protéines, glucides, lipides).
 * Displays a colored icon, a value with unit, and a label.
 */

import type { ReactNode } from 'react'

interface KeyDataCardProps {
  /** Icon element to display */
  icon: ReactNode
  /** Background color for the icon container */
  iconBg: string
  /** The main numeric value */
  value: string
  /** Unit label shown inline with value (e.g. "kCal", "g") */
  unit: string
  /** Card label (e.g. "Calories") */
  label: string
}

/**
 * Stat card showing a key nutritional or performance metric.
 */
export default function KeyDataCard({
  icon,
  iconBg,
  value,
  unit,
  label,
}: KeyDataCardProps) {
  return (
    <article className="flex items-center gap-6 bg-[#FBFBFB] rounded-xl px-8 py-8 shadow-sm hover:shadow-md transition-shadow duration-200">
      {/* Icon */}
      <div
        className="w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0"
        style={{ backgroundColor: iconBg }}
        aria-hidden="true"
      >
        {icon}
      </div>

      {/* Text */}
      <div className="flex flex-col gap-1">
        <p className="text-xl font-bold text-[#282D30]">
          {value}
          <span className="text-xl font-bold text-[#282D30]">{unit}</span>
        </p>
        <p className="text-sm font-medium text-[#74798C]">{label}</p>
      </div>
    </article>
  )
}

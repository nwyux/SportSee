/**
 * @fileoverview Main dashboard layout assembling all charts and key data cards.
 * Takes fully loaded UserDashboardData as props (no fetching here).
 */

import { Flame, Apple, Drumstick, Droplets } from 'lucide-react'
import type { UserDashboardData } from '../../types/sportTypes'
import ActivityBarChart from '../charts/ActivityBarChart'
import AverageSessionsChart from '../charts/AverageSessionsChart'
import PerformanceRadarChart from '../charts/PerformanceRadarChart'
import ScoreRadialChart from '../charts/ScoreRadialChart'
import KeyDataCard from '../ui/KeyDataCard'

interface UserDashboardProps {
  data: UserDashboardData
}

/** Key data card configurations */
const KEY_DATA_CONFIG = (keyData: UserDashboardData['userInfo']['keyData']) => [
  {
    id: 'calories',
    icon: <Flame className="w-7 h-7 text-[#FF0000]" aria-hidden="true" />,
    iconBg: 'rgba(255, 0, 0, 0.1)',
    value: keyData.calorieCount.toLocaleString('fr-FR'),
    unit: 'kCal',
    label: 'Calories',
  },
  {
    id: 'proteines',
    icon: <Drumstick className="w-7 h-7 text-[#4AB8FF]" aria-hidden="true" />,
    iconBg: 'rgba(74, 184, 255, 0.1)',
    value: `${keyData.proteinCount}`,
    unit: 'g',
    label: 'Protéines',
  },
  {
    id: 'glucides',
    icon: <Apple className="w-7 h-7 text-[#FDCC0C]" aria-hidden="true" />,
    iconBg: 'rgba(253, 204, 12, 0.1)',
    value: `${keyData.carbohydrateCount}`,
    unit: 'g',
    label: 'Glucides',
  },
  {
    id: 'lipides',
    icon: <Droplets className="w-7 h-7 text-[#FD5181]" aria-hidden="true" />,
    iconBg: 'rgba(253, 81, 129, 0.1)',
    value: `${keyData.lipidCount}`,
    unit: 'g',
    label: 'Lipides',
  },
]

/**
 * Full dashboard view for a user: greeting, charts grid, and key data cards.
 */
export default function UserDashboard({ data }: UserDashboardProps) {
  const { userInfo, activity, averageSessions, performance } = data

  const keyCards = KEY_DATA_CONFIG(userInfo.keyData)

  return (
    <main className="min-h-screen pl-[117px] pt-[91px] bg-[#F5F5F5]">
      <div className="px-12 py-10 max-w-[1440px] mx-auto">

        {/* Page heading */}
        <header className="mb-10">
          <h1 className="text-5xl font-bold text-[#282D30]">
            Bonjour{' '}
            <span className="text-[#FF0000]">{userInfo.firstName}</span>
          </h1>
          <p className="mt-2 text-lg text-[#74798C]">
            Félicitation ! Vous avez explosé vos objectifs hier 👏
          </p>
        </header>

        {/* Dashboard grid */}
        <div className="flex gap-7">

          {/* Left column: charts */}
          <div className="flex-1 flex flex-col justify-between min-w-0">

            {/* Activity bar chart — full width */}
            <ActivityBarChart data={activity} />

            {/* Bottom row: 3 small charts */}
            <div className="grid grid-cols-3 gap-7">
              <AverageSessionsChart data={averageSessions} />
              <PerformanceRadarChart data={performance} />
              <ScoreRadialChart score={userInfo.todayScore} />
            </div>
          </div>

          {/* Right column: key data cards */}
          <aside
            aria-label="Données nutritionnelles clés"
            className="w-[258px] flex flex-col gap-7 flex-shrink-0"
          >
            {keyCards.map((card) => (
              <KeyDataCard
                key={card.id}
                icon={card.icon}
                iconBg={card.iconBg}
                value={card.value}
                unit={card.unit}
                label={card.label}
              />
            ))}
          </aside>
        </div>
      </div>
    </main>
  )
}

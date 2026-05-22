/**
 * @fileoverview Left vertical sidebar.
 * Contains sport icon shortcuts and copyright notice.
 */

import Cycling from '../../../public/bike.svg'
import Swimming from '../../../public/swim.svg'
import Gym from '../../../public/weight.svg'
import Running from '../../../public/relax.svg'

const sportsIcons = [
  { id: 'running', icon: <img src={Running} alt="Course à pied" className="w-8 h-8" />, label: 'Course à pied' },
  { id: 'swimming', icon: <img src={Swimming} alt="Natation" className="w-8 h-8" />, label: 'Natation' },
  { id: 'cycling', icon: <img src={Cycling} alt="Cyclisme" className="w-8 h-8" />, label: 'Cyclisme' },
  { id: 'gym', icon: <img src={Gym} alt="Musculation" className="w-8 h-8" />, label: 'Musculation' },
]

/**
 * Fixed left sidebar with vertical sport icons and copyright.
 */
export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-[91px] bottom-0 z-40 w-[117px] bg-[#020203] shadow-[4px_0_4px_rgba(0,0,0,0.25)] flex flex-col items-center justify-between py-24">
      {/* Sport icons */}
      <nav aria-label="Activités sportives" className="flex flex-col items-center gap-6">
        {sportsIcons.map((sport) => (
          <button
            key={sport.id}
            id={`sidebar-${sport.id}`}
            aria-label={sport.label}
            title={sport.label}
            className="w-16 h-16 rounded-xl bg-white hover:bg-white/90 flex items-center justify-center transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#FF0000] text-[#FF0000]"
          >
            {sport.icon}
          </button>
        ))}
      </nav>

      {/* Copyright */}
      <p className="text-white text-xs font-medium rotate-[-90deg] whitespace-nowrap opacity-70 select-none">
        Copyright, SportSee 2020
      </p>
    </aside>
  )
}

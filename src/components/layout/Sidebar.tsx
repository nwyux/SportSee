/**
 * @fileoverview Left vertical sidebar.
 * Contains sport icon shortcuts and copyright notice.
 */

const sportsIcons = [
  {
    id: 'yoga',
    label: 'Yoga',
    icon: (
      <svg width="32" height="32" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <circle cx="32" cy="10" r="6" fill="white"/>
        <path d="M32 20C24 20 16 28 16 36H24C24 32 28 28 32 28C36 28 40 32 40 36H48C48 28 40 20 32 20Z" fill="white"/>
        <path d="M20 36L10 48M44 36L54 48" stroke="white" strokeWidth="3" strokeLinecap="round"/>
        <path d="M24 36V52M40 36V52" stroke="white" strokeWidth="3" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: 'natation',
    label: 'Natation',
    icon: (
      <svg width="32" height="32" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M8 32C14 32 14 40 20 40C26 40 26 32 32 32C38 32 38 40 44 40C50 40 50 32 56 32" stroke="white" strokeWidth="3.5" strokeLinecap="round"/>
        <path d="M8 44C14 44 14 52 20 52C26 52 26 44 32 44C38 44 38 52 44 52C50 52 50 44 56 44" stroke="white" strokeWidth="3.5" strokeLinecap="round"/>
        <circle cx="44" cy="16" r="5" fill="white"/>
        <path d="M36 22L28 30H42L52 18" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    id: 'cyclisme',
    label: 'Cyclisme',
    icon: (
      <svg width="32" height="32" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <circle cx="16" cy="44" r="12" stroke="white" strokeWidth="3.5"/>
        <circle cx="48" cy="44" r="12" stroke="white" strokeWidth="3.5"/>
        <path d="M16 44L32 20L40 32H48" stroke="white" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M28 20H40" stroke="white" strokeWidth="3.5" strokeLinecap="round"/>
        <circle cx="40" cy="16" r="4" fill="white"/>
      </svg>
    ),
  },
  {
    id: 'musculation',
    label: 'Musculation',
    icon: (
      <svg width="32" height="32" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect x="26" y="28" width="12" height="8" rx="2" fill="white"/>
        <rect x="10" y="22" width="6" height="20" rx="3" fill="white"/>
        <rect x="4" y="26" width="6" height="12" rx="3" fill="white"/>
        <rect x="48" y="22" width="6" height="20" rx="3" fill="white"/>
        <rect x="54" y="26" width="6" height="12" rx="3" fill="white"/>
        <rect x="16" y="28" width="10" height="8" rx="2" fill="white"/>
        <rect x="38" y="28" width="10" height="8" rx="2" fill="white"/>
      </svg>
    ),
  },
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
            className="w-16 h-16 rounded-xl bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#FF0000]"
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

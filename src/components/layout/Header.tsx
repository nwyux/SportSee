/**
 * @fileoverview Top navigation header.
 * Contains the SportSee logo and main navigation links.
 */

import { Link, NavLink } from 'react-router-dom'

const navLinks = [
  { to: '/', label: 'Accueil' },
  { to: '/profil', label: 'Profil' },
  { to: '/réglages', label: 'Réglages' },
  { to: '/communauté', label: 'Communauté' },
]

/**
 * Fixed top header with SportSee branding and navigation.
 */
export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-[91px] bg-[#020203] shadow-[0_4px_4px_rgba(0,0,0,0.25)] flex items-center justify-between px-8">
      {/* Logo */}
      <Link to="/" className="flex items-center gap-3 select-none" aria-label="SportSee — Accueil">
        {/* SportSee Logo SVG */}
        <svg width="178" height="55" viewBox="0 0 178 55" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M13.5 41L3 27.5L13.5 14" stroke="#FF0000" strokeWidth="4" strokeLinecap="round"/>
          <path d="M8 27.5H38.5" stroke="#FF0000" strokeWidth="4" strokeLinecap="round"/>
          <path d="M44.5 14L55 27.5L44.5 41" stroke="#FF0000" strokeWidth="4" strokeLinecap="round"/>
          <path d="M19.5 14L30 41" stroke="#FF0000" strokeWidth="4" strokeLinecap="round"/>
          <path d="M38.5 14L28 41" stroke="#FF0000" strokeWidth="4" strokeLinecap="round"/>
          <text x="72" y="39" fontFamily="Roboto" fontWeight="500" fontSize="24" fill="white">
            SportSee
          </text>
        </svg>
      </Link>

      {/* Navigation */}
      <nav aria-label="Navigation principale">
        <ul className="flex items-center gap-10">
          {navLinks.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `text-white font-medium text-lg transition-colors duration-200 hover:text-[#FF0000] ${
                    isActive ? 'text-[#FF0000]' : ''
                  }`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

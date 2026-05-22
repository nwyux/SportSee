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
    <header className="fixed top-0 left-0 right-0 z-50 h-[91px] bg-[#020203] shadow-[0_4px_4px_rgba(0,0,0,0.25)] flex items-center gap-3 px-8">
      {/* Logo */}
      <Link to="/" className="flex shrink-0 items-center gap-3 select-none" aria-label="SportSee — Accueil">
        {/* SportSee Logo SVG */}
        <img
          src="/logo.svg"
          alt="Logo de SportSee"
          className=""
        />
      </Link>

      {/* Navigation */}
      <nav aria-label="Navigation principale" className="flex flex-1 justify-center">
        <ul className="flex w-full max-w-[1024px] items-center justify-between gap-10">
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

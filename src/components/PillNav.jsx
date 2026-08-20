import { NavLink } from 'react-router-dom'
import './PillNav.css'

const links = [
  { to: '/home', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/show', label: 'Show' },
  { to: '/project', label: 'Projects' },
  { to: '/contact', label: 'Contact' },
]

export default function PillNav() {
  return (
    <nav className="pill-nav">
      {links.map((link) => (
        <NavLink
          key={link.to}
          to={link.to}
          className={({ isActive }) => (isActive ? 'active' : undefined)}
        >
          {link.label}
        </NavLink>
      ))}
    </nav>
  )
}

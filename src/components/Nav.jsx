import { NavLink } from 'react-router-dom'
import './Nav.css'

function Nav() {
  return (
    <header className="nav">
      <div className="container nav-inner">
        <span className="nav-brand">
          pipeline<span className="nav-brand-dot">.</span>demo
        </span>
        <nav className="nav-links">
          <NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : '')}>
            Home
          </NavLink>
          <NavLink to="/status" className={({ isActive }) => (isActive ? 'active' : '')}>
            Pipeline status
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>
            About
          </NavLink>
        </nav>
      </div>
    </header>
  )
}

export default Nav

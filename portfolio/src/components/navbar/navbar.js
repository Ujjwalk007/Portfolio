
import { useState } from 'react'
import './navbar.css'

function Navbar()
{
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => setIsOpen((prev) => !prev)
    const closeMenu = () => setIsOpen(false)

    return(<>
    
    <nav className="navbar custom-navbar">
  <div className="container-fluid custom-container">
    <a className="navbar-brand brand" href="/">
      Portfolio
    </a>
    <button
      className="navbar-toggler custom-toggler"
      type="button"
      aria-controls="navbarNav"
      aria-expanded={isOpen ? 'true' : 'false'}
      aria-label="Toggle navigation"
      onClick={toggleMenu}
    >
      <span className="navbar-toggler-icon custom-toggler-icon"><span></span></span>
    </button>
    <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
      <ul className="navbar-nav ms-auto nav-list" onClick={closeMenu}>
        <li className="nav-item">
          <a className="nav-link nav-link-custom" aria-current="page" href="#about">
            About
          </a>
        </li>

        <li className="nav-item">
          <a className="nav-link nav-link-custom" href="#skills">
            Skills
          </a>
        </li>

        <li className="nav-item">
          <a className="nav-link nav-link-custom" href="#projects">
            Projects
          </a>
        </li>
        
        <li className="nav-item">
          <a className="nav-link nav-link-custom" href="#contact">
            Contact Me
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>

    </>)
}

export default Navbar;
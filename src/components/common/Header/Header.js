import { useState } from "react";
import Hamburger from 'hamburger-react'
import "./Header.css"

function Header() {
  const [isOpen, setOpen] = useState(false)

  return (
    <header className="header">
      <nav className="nav">
        <div className="logo_wrap">
          <h1>Citaz Bank</h1>
        </div>
        <ul className={`nav__ul ${isOpen ? 'visible' : ''}`}>
          <li className="nav__li">
            <a href="#features" className="nav__link" onClick={e => setOpen(false)}>Features</a>
          </li>
          <li className="nav__li">
            <a href="#operations" className="nav__link" onClick={e => setOpen(false)}>Operations</a>
          </li>
          <li className="nav__li">
            <a href="#testimonials" className="nav__link" onClick={e => setOpen(false)}>Testimonials</a>
          </li>
          <li className="nav__li">
            <a href="#cta" className="nav__link" onClick={e => setOpen(false)}>Open Account</a>
          </li>
        </ul>



        <Hamburger toggled={isOpen} toggle={setOpen} direction="right" size={20} />

      </nav>
    </header >
  )
}

export default Header;
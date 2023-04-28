import { useState } from "react";
import Hamburger from 'hamburger-react'
import "./Header.css"

function Header() {
  const [isOpen, setOpen] = useState(false)

  //Smooth scroll
  function scrollSmooth(e) {
    e.preventDefault();
    setOpen(false)
    let id = e.target.getAttribute('href');
    let sid = document.querySelector(id);
    let idcord = sid.getBoundingClientRect();
    window.scrollTo({
      left: idcord.left + window.pageXOffset,
      top: idcord.top + window.pageYOffset,
      behavior: 'smooth',
    });
  }


  return (
    <header className="header">
      <nav className="nav">
        <div className="logo_wrap">
          <h1>Citaz Bank</h1>
        </div>
        <ul className={`nav__ul ${isOpen ? 'visible' : ''}`}>
          <li className="nav__li">
            <a href="#features" className="nav__link" onClick={e => scrollSmooth(e)}>Features</a>
          </li>
          <li className="nav__li">
            <a href="#operations" className="nav__link" onClick={e => scrollSmooth(e)}>Operations</a>
          </li>
          <li className="nav__li">
            <a href="#testimonials" className="nav__link" onClick={e => scrollSmooth(e)}>Testimonials</a>
          </li>
        </ul>



        <Hamburger toggled={isOpen} toggle={setOpen} direction="right" size={20} />

      </nav>
    </header >
  )
}

export default Header;
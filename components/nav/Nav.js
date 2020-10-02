import { useState } from 'react'

import Logo from  "../images/Logo"
import LanguageSwitcher from "../nav/LanguageSwitcher"
import MainNav from "../nav/MainNav"

export default function Nav() {
  const [popupIsOpen, setPopupIsOpen] = useState(false);

  const closePopups = () => {
    setPopupIsOpen(true)
  }

  return (
    <div className="p-6 flex justify-between items-center">
      <Logo />

      <nav className="flex justify-center items-center flex-grow">
        <ul className="flex">
          <li>
            <a href="" className="nav-link text-white p-4 relative">
              Boenden
            </a>
          </li>
          <li>
            <a href="" className="nav-link text-white p-4 relative">
              Upplevelser
            </a>
          </li>
          <li>
            <a href="" className="nav-link text-white p-4 relative">
              Upplevelser över webben
            </a>
          </li>
        </ul>
      </nav>

      <LanguageSwitcher popupIsOpen={ popupIsOpen } closePopups={ closePopups } />

      <MainNav popupIsOpen={ popupIsOpen } closePopups={ closePopups } />
    </div>
  )
}

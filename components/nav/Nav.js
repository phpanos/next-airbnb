import Logo from  "../images/Logo"
import Globe from  "../images/Globe"
import ArrowDown from  "../images/ArrowDown"
import Hamburger from  "../images/Hamburger"
import ProfileImg from  "../images/ProfileImg"

export default function Nav() {
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

      <nav className="flex mr-2">
        <ul className="flex items-center">
          <li className="p-4">
            <a href="" className="text-sm p-3 text-white rounded-full hover:bg-white hover:bg-opacity-15 transition duration-200 ease-in-out">
              Bli värd
            </a>
          </li>
          <li>
            <button className="flex text-white items-center p-3 cursor-pointer rounded-full hover:bg-white hover:bg-opacity-15 transition duration-200 ease-in-out">
              <i className="mr-2">
                <Globe />
              </i>
              <ArrowDown />
            </button>
          </li>
        </ul>
      </nav>

      <button className="bg-white flex rounded-full justify-between cursor-pointer pl-4 pr-2 items-center h-10">
        <Hamburger />
        <div className="ml-3 w-6 h-6">
          <ProfileImg />
        </div>
      </button>
    </div>
  )
}

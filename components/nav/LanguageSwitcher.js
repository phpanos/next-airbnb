import { useState, Fragment } from 'react'
import Globe from  "../images/Globe"
import ArrowDown from  "../images/ArrowDown"
import PopupMenu from "../popup-menu/PopupMenu"

export default function MainNav({popupIsOpen, closePopups}) {
    const [showNav, setShowNav] = useState(false)
    const toggleVisibility = () => {
        // closePopups()
        setShowNav(! showNav ? true : false)
    }
    const items = [
        {
            title: 'Svenska',
            link: 'https://google.se',
        },
        {
            title: 'Engelska',
            link: 'https://google.se',
        },
        {
            title: 'Norska',
            link: 'https://google.se',
        }
    ]

    if (popupIsOpen) {
        setShowNav(false)
    }

    return (
        <Fragment>
            <nav className="flex mr-2">
                <ul className="flex items-center">
                    <li className="p-4">
                    <a href="" className="text-sm p-3 text-white rounded-full hover:bg-white hover:bg-opacity-15 transition duration-200 ease-in-out">
                        Bli värd
                    </a>
                    </li>
                    <li>
                    <button  onClick={toggleVisibility} className="flex text-white items-center p-3 cursor-pointer rounded-full hover:bg-white hover:bg-opacity-15 transition duration-200 ease-in-out relative">
                        <i className="mr-2">
                        <Globe />
                        </i>
                        <ArrowDown />

                        <PopupMenu visibility={ showNav } items={ items }/>
                    </button>
                    </li>
                </ul>
            </nav>
        </Fragment>
    )
}

import { useState } from 'react'
import Hamburger from  "../images/Hamburger"
import ProfileImg from  "../images/ProfileImg"
import PopupMenu from "../popup-menu/PopupMenu"

export default function MainNav({popupIsOpen}) {
    const [showNav, setShowNav] = useState(false)
    const toggleVisibility = () => {
        setShowNav(! showNav ? true : false)
    }
    const items = [
        {
            title: 'Item 1 and what happens if this content is a bit longer hehae hear heae eah eha hea he',
            link: 'https://google.se',
        },
        {
            title: 'Item 2',
            link: 'https://google.se',
        },
        {
            title: 'Item 3',
            link: 'https://google.se',
        }
    ]

    if (popupIsOpen) {
        setShowNav(false)
    }

    return (
        <button
            onClick={toggleVisibility}
            className="bg-white flex rounded-full justify-between cursor-pointer pl-4 pr-2 items-center h-10 relative">
            <Hamburger />
            <div className="ml-3 w-6 h-6">
                <ProfileImg />
            </div>

            <PopupMenu visibility={ showNav } items={ items }/>
        </button>
    )
}

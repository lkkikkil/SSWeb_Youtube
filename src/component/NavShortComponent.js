import React from "react"

import NavIconBoxComponent from "./NavIconBoxComponent"

const NavShortComponent = () => {
    const navShortIconBoxList = [
        { src: "home", className: "navIcon", id: "navShort_Home_Icon", pText: "홈", pClassName: "navShortText" },
        { src: "explore", className: "navIcon", id: "navShort_Explore_Icon", pText: "탐색", pClassName: "navShortText" },
        { src: "shorts", className: "navIcon", id: "navShort_Shorts_Icon", pText: "Shorts", pClassName: "navShortText" },
        { src: "subscribe", className: "navIcon", id: "navShort_Subscribe_Icon", pText: "구독", pClassName: "navShortText" },
        { src: "storage", className: "navIcon", id: "navShort_Storage_Icon", pText: "보관함", pClassName: "navShortText" },
        { src: "record", className: "navIcon", id: "navShort_Record_Icon", pText: "시청기록", pClassName: "navShortText" }
    ]

    const navShortContent = navShortIconBoxList.map((element) => <NavIconBoxComponent key={element.id} object={element} className="navShortIconBox" />)

    return (
        <nav id="navShort">
            {navShortContent}
        </nav>
    )
}

export default NavShortComponent

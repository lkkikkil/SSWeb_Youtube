import React from "react"

import NavShortComponent from "./NavShortComponent"
import NavLongComponent from "./NavLongComponent"

import { useRecoilState, useSetRecoilState } from "recoil"

import { navOpenState, mainContentState } from  "../../recoil/youtubeState"

const findTargetLogic = (element, targetClassName) => {
    while (element) {
        if (element.classList == undefined) { }
        else if (element.classList.contains(targetClassName)) {
            return element
        }
        element = element.parentNode
    }
    return null
}

const HeaderNavComponent = () => {
    const [navOpen, setNavOpen] = useRecoilState(navOpenState)
    const setMainContent = useSetRecoilState(mainContentState)

    const navOpenControlEvent = event => {
        if (event.target.id == "navLongBackground" || event.target.id == "navLongCloseBtnImg" || findTargetLogic(event.target, "navLongIconBox") != null) {
            setNavOpen(!navOpen)
        }
        iconBoxClickEvent(event)
    }

    const iconBoxClickEvent = event => {
        let navIconBox = findTargetLogic(event.target, "navIconBox")
        if (navIconBox != null) {
            let content = navIconBox.id.split("_")[1]
            setMainContent(content)
        }
    }

    React.useEffect(() => {
        const toolContainer = document.getElementById("toolContainer")

        toolContainer.addEventListener("click", iconBoxClickEvent)
        toolContainer.addEventListener("click", navOpenControlEvent)

        return () => {
            toolContainer.removeEventListener("click", iconBoxClickEvent)
            toolContainer.removeEventListener("click", navOpenControlEvent)
        }
    })

    return (
        <div id="toolContainer">
            <NavShortComponent />
            <NavLongComponent />
        </div>
    )
}

export default HeaderNavComponent

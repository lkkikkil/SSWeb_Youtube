import React from "react"

import HeaderComponent from "./HeaderComponent"
import NavShortComponent from "./NavShortComponent"
import NavLongComponent from "./NavLongComponent"

import { useRecoilState, useSetRecoilState } from "recoil"

import { navOpenState, mainContentState } from  "../recoil/youtubeState"

let curEventElement

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

const checkParentLogic = (mouseOverElement, checkTarget) => {
    while (mouseOverElement) {
        if (mouseOverElement == checkTarget) {
            return true
        }
        mouseOverElement = mouseOverElement.parentNode
    }
    return false
}

const navIconBoxOverEvent = event => {
    let navIconBox = findTargetLogic(event.target, "navIconBox")
    if (navIconBox != null) {
        curEventElement = navIconBox
        navIconBox.style.background = "#cccccc"
    }
}

const navIconBoxOutEvent = event => {
    if (checkParentLogic(event.relatedTarget, curEventElement)) {
        return
    }
    let navIconBox = findTargetLogic(event.target, "navIconBox")
    if (navIconBox != null) {
        navIconBox.style.background = "white"
    }
}

const ToolComponent = () => {
    const [navOpen, setNavOpen] = useRecoilState(navOpenState)
    const setMainContent = useSetRecoilState(mainContentState)

    const navOpenControlEvent = event => {
        if (event.target.id == "navLongBackground" || event.target.id == "navLongCloseBtnImg" 
        || event.target.id == "navLongOpenBtnImg" || findTargetLogic(event.target, "navLongIconBox") != null) {
            const navOpenReverse = !navOpen
            setNavOpen(navOpenReverse)
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

        toolContainer.addEventListener("mouseover", navIconBoxOverEvent)
        toolContainer.addEventListener("mouseout", navIconBoxOutEvent)
        toolContainer.addEventListener("click", iconBoxClickEvent)
        toolContainer.addEventListener("click", navOpenControlEvent)

        return () => {
            toolContainer.removeEventListener("mouseover", navIconBoxOverEvent)
            toolContainer.removeEventListener("mouseout", navIconBoxOutEvent)
            toolContainer.removeEventListener("click", iconBoxClickEvent)
            toolContainer.removeEventListener("click", navOpenControlEvent)
        }
    })

    return (
        <div id="toolContainer">
            <HeaderComponent />
            <NavShortComponent />
            <NavLongComponent />
        </div>
    )
}

export default ToolComponent

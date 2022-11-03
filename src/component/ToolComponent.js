import React from "react"

import { useDispatch } from "react-redux"
import { setMainContent, setNavOpen } from "../action/action"

import HeaderComponent from "./HeaderComponent"
import NavShortComponent from "./NavShortComponent"
import NavLongComponent from "./NavLongComponent"

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
    const dispatch = useDispatch()

    const navLongOpenEvent = (event) => {
        if (event.target.id == "navLongOpenBtnImg") {
            dispatch(setNavOpen())
        }
    }

    const navLongCloseEvent = (event) => {
        if (event.target.id == "navLongBackground" || event.target.id == "navLongCloseBtnImg" || findTargetLogic(event.target, "navLongIconBox") != null) {
            dispatch(setNavOpen())
        }
    }

    const iconBoxClickEvent = event => {
        let navIconBox = findTargetLogic(event.target, "navIconBox")
        if (navIconBox != null) {
            let content = navIconBox.id.split("_")[1]
            dispatch(setMainContent(content))
        }
    }

    React.useEffect(() => {
        const toolContainer = document.getElementById("toolContainer")

        toolContainer.addEventListener("mouseover", navIconBoxOverEvent)
        toolContainer.addEventListener("mouseout", navIconBoxOutEvent)
        toolContainer.addEventListener("click", navLongOpenEvent)
        toolContainer.addEventListener("click", navLongCloseEvent)
        toolContainer.addEventListener("click", iconBoxClickEvent)
    }, [])

    return (
        <div id="toolContainer">
            <HeaderComponent />
            <NavShortComponent />
            <NavLongComponent />
        </div>
    )
}

export default ToolComponent

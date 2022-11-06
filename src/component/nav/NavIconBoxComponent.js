import React from "react"

import ImageComponent from "../basic/ImageComponent"
import PComponent from "../basic/PComponent"

import { useToggle } from "../../customHooks/youtubeCustomHook"

const checkParentLogic = (event, parentId) => {
    let tmpElement = event.relatedTarget
    while(tmpElement) {
        if(tmpElement.id == parentId) {
            return true
        }
        tmpElement = tmpElement.parentNode
    }
    return false
}

const NavIconBoxComponent = props => {
    const boxClassName = props.className
    const navIconBoxId = props.object.id + "Box"

    const [isOver, setIsOver] = useToggle()

    const navIconOverEvent = () => {
        if(isOver == false) {
            setIsOver()
        }
    }

    const navIconOutEvent = event => {
        if(checkParentLogic(event,navIconBoxId) == false) {
            setIsOver()
        }
    }

    React.useEffect(() => {
        const tmpNavIconBox = document.getElementById(navIconBoxId)

        tmpNavIconBox.addEventListener("mouseover", navIconOverEvent)
        tmpNavIconBox.addEventListener("mouseout", navIconOutEvent)

        return () => {
            tmpNavIconBox.removeEventListener("mouseover", navIconOverEvent)
            tmpNavIconBox.removeEventListener("mouseout", navIconOutEvent)
        }
    })

    return (
        <div className={`navIconBox ${boxClassName}`} id={navIconBoxId} style={{background : isOver ? "#cccccc" : "white"}}>
            <ImageComponent img={props.object} />
            <PComponent p={props.object} />
        </div>
    )
}

export default NavIconBoxComponent

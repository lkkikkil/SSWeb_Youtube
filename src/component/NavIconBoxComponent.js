import React from "react"

import ImageComponent from "./ImageComponent"
import PComponent from "./PComponent"

const NavIconBoxComponent = props => {
    const boxClassName = props.className

    return (
        <div className={`navIconBox ${boxClassName}`} id={`${props.object.id}Box`}>
            <ImageComponent img={props.object} />
            <PComponent p={props.object} />
        </div>
    )
}

export default NavIconBoxComponent

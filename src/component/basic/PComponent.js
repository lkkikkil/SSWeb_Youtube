import React from "react"

const PComponent = props => {
    const { pText, pClassName } = props.p

    return (
        <p className={pClassName}>{pText}</p>
    )
}

export default PComponent

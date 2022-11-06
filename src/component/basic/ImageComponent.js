import React from "react"

const ImageComponent = props => {
    const { src, className, id } = props.img

    return (
        <img src={`${process.env.PUBLIC_URL}/images/${src}.png`} className={className} id={id} />
    )
}

export default ImageComponent

import React from "react"

export const useIsSizeUp = () => {
    const [isSizeUp, setIsSizeUp] = React.useState(false)

    const changeIsSizeUp = () => {
        setIsSizeUp(!isSizeUp)
    }

    return [isSizeUp, changeIsSizeUp]
}

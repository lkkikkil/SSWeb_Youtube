import React from "react"

export const useToggle = () => {
    const [toggle, setToggle] = React.useState(false)

    const changeIsSizeUp = () => {
        setToggle(!toggle)
    }

    return [toggle, changeIsSizeUp]
}

import React from "react"

export const useToggle = () => {
    const [toggle, setToggle] = React.useState(false)

    const changeToggle = () => {
        setToggle(!toggle)
    }

    return [toggle, changeToggle]
}

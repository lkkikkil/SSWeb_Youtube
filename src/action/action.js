const setMainContent = content => {
    return {
        type: "SET_MAIN_CONTENT",
        mainContent: content
    }
}

const setNavOpen = () => {
    return {
        type: "SET_NAV_OPEN"
    }
}

export { setMainContent, setNavOpen } // 여러개를 export 할 때

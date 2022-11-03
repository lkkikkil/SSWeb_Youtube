const initState = {
    navOpen: false,
    mainContent: "Home"
}

const reducer = (state = initState, action) => { 

    switch (action.type) {
        case "SET_MAIN_CONTENT":
            return {
                ...state,
                mainContent: action.mainContent
            }
        case "SET_NAV_OPEN":
            return {
                ...state,
                navOpen: !state.navOpen
            }
        default:
            return state
    }
}

export default reducer

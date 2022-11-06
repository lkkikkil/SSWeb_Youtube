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

const setVideoList = videoList => {
    return {
        type: "SET_VIDEO_LIST",
        videoList: videoList
    }
}

export { setMainContent, setNavOpen, setVideoList } // 여러개를 export 할 때

import React from "react"

import VideoBoxComponent from "./VideoBoxComponent"

const HomeComponent = () => {

    const videoObject = { videoImg: "videoImg", videoTime: "19:06:04", userImg: "user", title: "하루의 끝 | 잠 못 자는 당신을 위한 수면 음악", userName: "user", videoState: "조회수 2000만회 • 3시간 전" }
    let videoList = []
    for (let index = 0; index < 60; index++) {
        videoList.push(videoObject)
    }

    const homeContent = videoList.map((element, index) => {
        return <VideoBoxComponent key={`videoBox${index}`} object={element} index={index} />
    })

    return (
        <main>
            {homeContent}
        </main>
    )
}

export default HomeComponent

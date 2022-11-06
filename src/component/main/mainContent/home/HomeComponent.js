import React from "react"

import VideoBoxComponent from "./VideoBoxComponent"

import { useRecoilState } from "recoil"

import { videoListState } from "../../../../recoil/backEndState"

const HomeComponent = () => {
    const videoObject = { videoImg: "videoImg", videoTime: "19:06:04", userImg: "user", title: "하루의 끝 | 잠 못 자는 당신을 위한 수면 음악", userName: "user", videoState: "조회수 2000만회 • 3시간 전" }
    let tmpVideoList = []

    for (let index = 0; index < 60; index++) {
        tmpVideoList.push(videoObject)
    }

    const [videoList, setVideoList] = useRecoilState(videoListState)

    const homeContent = videoList && videoList.map((element, index) => {
        return <VideoBoxComponent key={`videoBox${index}`} object={element} index={index} />
    })

    React.useEffect(() => {
        setVideoList(tmpVideoList)
    }, [])

    return (
        <main>
            {homeContent}
        </main>
    )
}

export default HomeComponent

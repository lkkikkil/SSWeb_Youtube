import React from "react"

import ImageComponent from "./ImageComponent"
import PComponent from "./PComponent"

import { useIsSizeUp } from "../customHooks/videoCustomHook"

const VideoBoxComponent = props => {
    const { videoImg, videoTime, userImg, title, userName, videoState } = props.object
    const videoIndex = props.index

    const [isSizeUp, changeIsSizeUp] = useIsSizeUp()

    const videoImgClickEvent = (event) => {
        if (event.target.className == "videoImg") {
            changeIsSizeUp()
        }
    }

    React.useEffect(() => {
        const article = document.getElementsByTagName("article")[videoIndex]
        article.addEventListener("click", videoImgClickEvent)
        // return () => {
        //     article.removeEventListener("click", videoImgClickEvent)
        // }
    }, [])

    return (
        <article className={isSizeUp ? "videoBoxLarge" : "videoBox"}>
            <div className="videoImgBox">
                <ImageComponent img={{ src: videoImg, className: "videoImg" }} />
                <PComponent p={{ pText: videoTime, pClassName: "videoTime" }} />
            </div>
            <div className="videoInfoBox">
                <ImageComponent img={{ src: userImg, className: "userImg" }} />
                <div className="videoInfoTextBox">
                    <h1>{title}</h1>
                    <PComponent p={{ pText: userName }} />
                    <PComponent p={{ pText: videoState }} />
                </div>
            </div>
        </article>
    )
}

export default VideoBoxComponent

import React from "react"

import ImageComponent from "../../../basic/ImageComponent"
import PComponent from "../../../basic/PComponent"

import { useToggle } from "../../../../customHooks/youtubeCustomHook"

const VideoBoxComponent = props => {
    const { videoImg, videoTime, userImg, title, userName, videoState } = props.object
    const videoIndex = props.index

    const [isSizeUp, setIsSizeUp] = useToggle()

    const videoImgClickEvent = (event) => {
        if (event.target.className == "videoImg") {
            setIsSizeUp()
        }
    }

    React.useEffect(() => {
        const article = document.getElementsByTagName("article")[videoIndex]
        article.addEventListener("click", videoImgClickEvent)
        return () => {
            article.removeEventListener("click", videoImgClickEvent)
        }
    })

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

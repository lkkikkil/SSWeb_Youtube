import React from "react"

import ImageComponent from "./ImageComponent"

const HeaderComponent = () => {
    const headerLeftBoxImgList = [
        { src: "menu", className: "headerIcon", id: "navLongOpenBtnImg" },
        { src: "youtubeLogo", className: "youtubeLogo", id: "headerYoutubeLogo" }
    ]

    const headerCenterBoxImgList = [
        { src: "keyboard", className: "headerIcon", id: "keyboardIcon" },
        { src: "search", className: "headerIcon", id: "searchIcon" },
        { src: "mike", className: "headerIcon", id: "mikeIcon" }
    ]

    const headerRightBoxImgList = [
        { src: "upload", className: "headerIcon", id: "uploadIcon" },
        { src: "app", className: "headerIcon", id: "appIcon" },
        { src: "alarm", className: "headerIcon", id: "alarmIcon" },
        { src: "user", className: "userImg", id: "headerUserIcon" }
    ]

    const headerLeftBoxContent = headerLeftBoxImgList.map((element) => <ImageComponent key={element.id} img={element} />)
    const headerRightBoxContent = headerRightBoxImgList.map((element) => <ImageComponent key={element.id} img={element} />)

    return (
        <header>
            <div className="headerBox">
                {headerLeftBoxContent}
            </div>
            <div className="headerBox" id="headerCenterBox">
                <div id="searchBox">
                    <input type="text" placeholder="검색" id="searchInput" />
                    <ImageComponent img={headerCenterBoxImgList[0]} />
                </div>
                <div id="searchIconBox">
                    <ImageComponent img={headerCenterBoxImgList[1]} />
                </div>
                <div id="mikeIconBox">
                    <ImageComponent img={headerCenterBoxImgList[2]} />
                </div>
            </div>
            <div className="headerBox">
                {headerRightBoxContent}
            </div>
        </header>
    )
}

export default HeaderComponent

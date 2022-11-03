import React from "react"

import { useSelector } from "react-redux"

import ImageComponent from "./ImageComponent"
import NavIconBoxComponent from "./NavIconBoxComponent"

const NavLongComponent = () => {
    const navLongHeaderImgList = [
        { src: "menu", className: "headerIcon", id: "navLongCloseBtnImg" },
        { src: "youtubeLogo", className: "youtubeLogo", id: "navLongYoutubeLogo" }
    ]

    const navLongBoxList = [
        [
            { src: "home", className: "navLongIcon", id: "navLong_Home_Icon", pText: "홈", pClassName: "navLongText" },
            { src: "explore", className: "navLongIcon", id: "navLong_Explore_Icon", pText: "탐색", pClassName: "navLongText" },
            { src: "shorts", className: "navLongIcon", id: "navLong_Shorts_Icon", pText: "Shorts", pClassName: "navLongText" },
            { src: "subscribe", className: "navLongIcon", id: "navLong_Subscribe_Icon", pText: "구독", pClassName: "navLongText" }
        ],
        [
            { src: "storage", className: "navLongIcon", id: "navLong_Storage_Icon", pText: "보관함", pClassName: "navLongText" },
            { src: "record", className: "navLongIcon", id: "navLong_Record_Icon", pText: "시청기록", pClassName: "navLongText" },
            { src: "later", className: "navLongIcon", id: "navLong_Later_Icon", pText: "나중에 볼 동영상", pClassName: "navLongText" },
            { src: "like", className: "navLongIcon", id: "navLong_Like_Icon", pText: "좋아요 표시한 동영상", pClassName: "navLongText" }
        ],
        [
            { src: "user", className: "navLongIcon", id: "navLong_User1_Icon", pText: "user1", pClassName: "navLongText" },
            { src: "user", className: "navLongIcon", id: "navLong_User2_Icon", pText: "user2", pClassName: "navLongText" },
            { src: "user", className: "navLongIcon", id: "navLong_User3_Icon", pText: "user3", pClassName: "navLongText" },
            { src: "user", className: "navLongIcon", id: "navLong_User4_Icon", pText: "user4", pClassName: "navLongText" }
        ],
        [
            { src: "movie", className: "navLongIcon", id: "navLong_Moive_Icon", pText: "영화", pClassName: "navLongText" },
            { src: "game", className: "navLongIcon", id: "navLong_Game_Icon", pText: "게임", pClassName: "navLongText" },
            { src: "live", className: "navLongIcon", id: "navLong_Live_Icon", pText: "실시간", pClassName: "navLongText" },
            { src: "learn", className: "navLongIcon", id: "navLong_Learn_Icon", pText: "학습", pClassName: "navLongText" },
            { src: "sport", className: "navLongIcon", id: "navLong_Sport_Icon", pText: "스포츠", pClassName: "navLongText" }
        ],
        [
            { src: "setting", className: "navLongIcon", id: "navLong_Setting_Icon", pText: "설정", pClassName: "navLongText" },
            { src: "report", className: "navLongIcon", id: "navLong_Report_Icon", pText: "신고 기록", pClassName: "navLongText" },
            { src: "customerCenter", className: "navLongIcon", id: "navLong_CustomerCenter_Icon", pText: "고객 센터", pClassName: "navLongText" },
            { src: "opinion", className: "navLongIcon", id: "navLong_Opinion_Icon", pText: "의견 보내기", pClassName: "navLongText" }
        ]
    ]

    const navLongMainContent = navLongBoxList.map((navIconBoxList, index) => {
        let navLongBoxContent = navIconBoxList.map((element) => <NavIconBoxComponent key={element.id} object={element} className="navLongIconBox" />)

        return (
            <div key={`navLongBox${index}`} className="navLongBox">
                {navLongBoxContent}
            </div>
        )
    })

    const navOpen = useSelector(state => state.navOpen)

    return (
        <nav id="navLong" style={{ left: navOpen ? "0px" : "-240px" }}>
            <div id="navLongBackground" style={{ display: navOpen ? "block" : "none" }}></div>
            <div id="navLongMain">
                <div id="navLongHeader">
                    <ImageComponent img={navLongHeaderImgList[0]} />
                    <ImageComponent img={navLongHeaderImgList[1]} />
                </div>
                {navLongMainContent}
            </div>
        </nav>
    )
}

export default NavLongComponent

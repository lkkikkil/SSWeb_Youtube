import React from "react"

import HomeComponent from "./mainContent/home/HomeComponent"

import { useRecoilValue } from "recoil"

import { mainContentState } from "../../recoil/youtubeState"

const MainComponent = () => {
    const mainContent = useRecoilValue(mainContentState)

    // switch(mainContent) {
    //     case "Home": 
    //     return (
    //         <HomeComponent/>
    //     )
    //     default:
    //     return (
    //         <main>
    //             {`${mainContent} 페이지 입니다.`}
    //         </main>
    //     )
    // }

    // 스위치문은 매우 길어질 수 있다.
    return (
        <React.Fragment>
            {
                mainContent == "Home" && <HomeComponent/> ||
                mainContent != "Home" && <main>{`${mainContent} 페이지 입니다.`}</main>
            }
        </React.Fragment>
    )
}

export default MainComponent

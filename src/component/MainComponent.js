import React from "react"

import { useSelector } from "react-redux"

import HomeComponent from "./HomeComponent"

const MainComponent = () => {
    const mainContent = useSelector(state => state.mainContent)

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

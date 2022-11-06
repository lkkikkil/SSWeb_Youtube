// 최고 부모 컴포넌트

import React from "react"

import HeaderComponent from "./component/header/HeaderComponent"
import NavComponent from "./component/nav/NavComponent"
import MainComponent from "./component/main/MainComponent"

const App = () => {
    return (
        <React.Fragment>
            <HeaderComponent/>
            <NavComponent/>
            <MainComponent/>
        </React.Fragment>
    )
}

export default App  // 다른 파일에서 무엇을 import 할지 적어줘야함

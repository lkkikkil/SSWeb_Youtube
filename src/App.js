// 최고 부모 컴포넌트

import React from "react"

import ToolComponent from "./component/ToolComponent"
import MainComponent from "./component/MainComponent"

const App = () => {
    return (
        <React.Fragment>
            <ToolComponent/>
            <MainComponent/>
        </React.Fragment>
    )
}

export default App  // 다른 파일에서 무엇을 import 할지 적어줘야함

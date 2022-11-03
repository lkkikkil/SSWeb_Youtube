// App 컴포넌트를 root div에 랜더링 시키는 파일

import React from "react"   //react import 작업 (자바스크립트 중심이므로 html에 설치하던걸 여기에 설치)
import ReactDOM from "react-dom/client"
import {RecoilRoot} from "recoil"   

import App from "./App" // 내가 만든 App.js import 작업

// ReactDOM.render(<App />, document.getElementById("root")) // 이제 곧 사라진다.
ReactDOM.createRoot (document.getElementById("root")).render(
    // Provider로 감싸주어야 store를 사용할 준비를 한다.
    // store 안에 어떤 store를 쓸지 넣어줘야함
    <RecoilRoot><App /></RecoilRoot>
)

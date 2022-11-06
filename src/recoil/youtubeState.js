import { atom } from "recoil"

//export 하나씩 가능
export const navOpenState = atom({
    key: "navOpen",
    default: false
})

export const mainContentState = atom({
    key: "mainContent",
    default: "Home"
})

export const videoListState = atom({
    key: "videoList",
    default: []
})

export const userImgState = atom({
    key: "userImg",
    default: "user"
})

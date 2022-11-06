import { atom } from "recoil"

export const videoListState = atom({
    key: "videoList",
    default: []
})

export const userImgState = atom({
    key: "userImg",
    default: {}
})

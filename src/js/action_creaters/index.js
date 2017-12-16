import {INCREMENT, GET_IMAGES} from "../constants";

export function increment() {
    return {
        type: INCREMENT
    }
}

export function getImages() {
    return {
        type: GET_IMAGES
    }
}
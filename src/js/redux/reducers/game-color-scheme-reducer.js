import {SET_CELLS_COLOR, SET_WINDOW_COLOR} from "../../constants";

let cellsColor = 'white';
let windowColor = 'white';


export function cellsColorScheme(color = cellsColor, action) {

    if (action.type === SET_CELLS_COLOR) {
        switch (action.payload.color) {
            case "green":
                return "#1FFF26";
            case "blue":
                return "#110de2";
            case "orange":
                return "#e28c0f";
            default:
                return "white";
        }
    }

    return color;
}

export function windowColorScheme(color = windowColor, action) {

    if (action.type === SET_WINDOW_COLOR) {
        switch (action.payload.color) {
            case "green":
                return "#26B453";
            case "blue":
                return "#41d8e2";
            case "orange":
                return "#e2ce22";
            default:
                return "white";
        }
    }

    return color;
}
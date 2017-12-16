import {combineReducers} from "redux";
import counterReducer from "./counter-reducer";
import imageReducer from "./image-reducer";

export default combineReducers({
    count: counterReducer,
    images: imageReducer
});
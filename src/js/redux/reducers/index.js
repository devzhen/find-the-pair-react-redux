import {combineReducers} from "redux";

import {isOnPause, isStarted} from "../reducers/game-state-reducer";
import {getCountAttempts} from "../reducers/game-statistics-reducer";

export default combineReducers({
    isGameOnPause: isOnPause,
    isGameStarted: isStarted,
    countAttempts: getCountAttempts
});
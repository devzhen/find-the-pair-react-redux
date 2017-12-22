import {combineReducers} from "redux";

import {isFinished, isOnPause, isStarted} from "../reducers/game-state-reducer";
import {getCountAttempts} from "../reducers/game-statistics-reducer";

export default combineReducers({
    isGameOnPause: isOnPause,
    isGameStarted: isStarted,
    isGameFinished: isFinished,
    countAttempts: getCountAttempts
});
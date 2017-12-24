import {combineReducers} from "redux";

import {isFinished, isOnPause, isStarted} from "../reducers/game-state-reducer";
import gameConfig from "../reducers/game-config-reducer";
import {countAttempts, gameFieldColsCount, gameFieldRowsCount, gameSeconds} from "../reducers/game-statistics-reducer";

export default combineReducers({
    gameConfig: gameConfig,
    isGameOnPause: isOnPause,
    isGameStarted: isStarted,
    isGameFinished: isFinished,
    countAttempts: countAttempts,
    seconds: gameSeconds,
});
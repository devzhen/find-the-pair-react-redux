import {combineReducers} from "redux";

import {activeTab} from "./game-window-tabs-reducer";
import {windowColorScheme, cellsColorScheme} from "./game-color-scheme-reducer";
import {isFinished, isOnPause, isStarted} from "../reducers/game-state-reducer";
import gameConfig from "../reducers/game-config-reducer";
import {countAttempts, gameFieldColsCount, gameFieldRowsCount, gameSeconds} from "../reducers/game-statistics-reducer";

export default combineReducers({
    activeTab: activeTab,
    windowColor: windowColorScheme,
    cellColor: cellsColorScheme,
    gameConfig: gameConfig,
    isGameOnPause: isOnPause,
    isGameStarted: isStarted,
    isGameFinished: isFinished,
    countAttempts: countAttempts,
    seconds: gameSeconds,
});
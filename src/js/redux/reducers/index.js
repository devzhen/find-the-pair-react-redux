import {combineReducers} from "redux";

import {isOnPause, isStarted} from "../reducers/game-state-reducer";

export default combineReducers({
    isGameOnPause: isOnPause,
    isGameStarted: isStarted,
  });
import {combineReducers} from "redux";
import gameConfigReducer from "./game-config-reducer";
import gamePauseReducer from "./game-pause-reducer";
import gameTimerReducer from "./game-timer-reducer";

export default combineReducers({
    gameConfig: gameConfigReducer,      // Настройки игры
    isGameOnPause: gamePauseReducer,    // Нахождится ли игрв в режиме паузы
    seconds: gameTimerReducer           // Кол-во секунд в игре
});
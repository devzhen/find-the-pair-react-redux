import {FINISH_GAME, PAUSE_GAME, START_GAME, STOP_GAME} from "../../constants";

export function isOnPause(isPaused = false, action) {

    if (action.type === PAUSE_GAME) {
        return !isPaused;
    }

    return isPaused;
}


export function isStarted(isStarted = false, action) {

    if (action.type === START_GAME) {
        return true;
    }

    if (action.type === STOP_GAME) {
        return false
    }

    return isStarted;
}

export function isFinished(isGameFinished = false, action) {

    if (action.type === FINISH_GAME) {
        return true;
    }

    return isGameFinished;
}
import {CLEAR_IS_FINISHED, FINISH_GAME, PAUSE_GAME, RESUME_GAME, START_GAME, STOP_GAME} from "../../constants";


export function isOnPause(isPaused = false, action) {

    if (action.type === PAUSE_GAME) {
        return true;
    }

    if (action.type === RESUME_GAME) {
        return false;
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

    if (action.type === CLEAR_IS_FINISHED) {
        return false;
    }

    return isGameFinished;
}
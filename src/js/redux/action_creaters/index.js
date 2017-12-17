import {INCREMENT, PAUSE_GAME, START_GAME, GET_TIME, START_TIMER, STOP_TIMER, CLEAR_TIMER} from "../../constants";

export function increment() {
    return {
        type: INCREMENT
    }
}

export function restartGame() {
    return {
        type: START_GAME
    }
}

export function pauseGame() {
    return {
        type: PAUSE_GAME
    }
}

export function getTime() {
    return {
        type: GET_TIME
    }
}

export function startTimer() {
    return {
        type: START_TIMER
    }
}

export function stopTimer() {
    return {
        type: STOP_TIMER
    }
}

export function clearTimer() {
    return {
        type: CLEAR_TIMER
    }
}
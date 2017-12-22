import {PAUSE_GAME, START_GAME, STOP_GAME} from "../../constants";

export function pauseGame() {
    return {
        type: PAUSE_GAME
    }
}

export function startGame() {
    return {
        type: START_GAME
    }
}

export function stopGame() {
    return {
        type: STOP_GAME
    }
}
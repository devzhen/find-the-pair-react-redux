import {
    CHANGE_GAME_FIELD_SIZE, FINISH_GAME, INCREASE_COUNT_ATTEMPTS, NEW_GAME, PAUSE_GAME, SET_ACTIVE_TAB,
    SET_GAME_TIME, START_GAME, STOP_GAME, ZERO_COUNT_ATTEMPTS
} from "../../constants";


export function setActiveTab(tab) {
    return {
        type: SET_ACTIVE_TAB,
        payload: {
            activeTab: tab
        }
    }
}


export function startNewGame() {
    return {
        type: NEW_GAME
    }
}


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

export function finishGame() {
    return {
        type: FINISH_GAME
    }
}

export function increaseCountAttempts() {
    return {
        type: INCREASE_COUNT_ATTEMPTS
    }
}

export function zeroCountAttempts() {
    return {
        type: ZERO_COUNT_ATTEMPTS
    }
}

export function setGameTime(seconds) {
    return {
        type: SET_GAME_TIME,
        payload: {
            seconds: seconds
        }
    }
}

export function changeGameFieldSize(size) {
    return {
        type: CHANGE_GAME_FIELD_SIZE,
        payload: {
            size: size
        }
    }
}
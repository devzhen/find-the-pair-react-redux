import {
    CHANGE_GAME_FIELD_SIZE, CLEAR_IS_FINISHED, FINISH_GAME, INCREASE_COUNT_ATTEMPTS, NEW_GAME, PAUSE_GAME,
    SET_ACTIVE_TAB, SET_CELLS_COLOR,
    SET_GAME_TIME, SET_RECORDS_ACTIVE_TAB, SET_WINDOW_COLOR, START_GAME, STOP_GAME, ZERO_COUNT_ATTEMPTS
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

export function clearIsFinished() {
    return {
        type: CLEAR_IS_FINISHED
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

export function changeGameWindowColorScheme(color) {
    return {
        type: SET_WINDOW_COLOR,
        payload: {
            color: color
        }
    }
}

export function changeGameCellsColorScheme(color) {
    return {
        type: SET_CELLS_COLOR,
        payload: {
            color: color
        }
    }
}
import {INCREASE_COUNT_ATTEMPTS, SET_GAME_TIME, ZERO_COUNT_ATTEMPTS} from "../../constants";

let attempts = 0;
let seconds = 0;

export function countAttempts(count = attempts, action) {

    if (action.type === INCREASE_COUNT_ATTEMPTS) {
        return ++attempts;
    }

    if (action.type === ZERO_COUNT_ATTEMPTS) {
        attempts = 0;
        return attempts;
    }

    return count;
}

export function gameSeconds(time = seconds, action) {

    if (action.type === SET_GAME_TIME) {
        seconds = action.payload.seconds;
        return seconds;
    }

    return time;
}
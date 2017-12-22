import {INCREASE_COUNT_ATTEMPTS} from "../../constants";

let attempts = 0;

export function getCountAttempts(count = attempts, action) {

    if (action.type === INCREASE_COUNT_ATTEMPTS) {
        return ++attempts;
    }

    return count;
}
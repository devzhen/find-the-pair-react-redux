import {PAUSE_GAME} from "../../constants";

export default (isPaused = false, action) => {

    if (action.type === PAUSE_GAME) {

        return !isPaused;
    }

    return isPaused;
}
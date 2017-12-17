import {GET_TIME, START_TIMER, STOP_TIMER, CLEAR_TIMER} from "../../constants";

let seconds = 0;
let intervalId = null;

export default (time = seconds, action) => {

    switch (action.type) {

        case START_TIMER:
            startTimer();
            return seconds;

        case STOP_TIMER:
            stopTimer();
            return seconds;

        case GET_TIME:
            return seconds;

        case CLEAR_TIMER:
            clearTimer();
            return seconds;
    }

    return time;
}

function startTimer() {

    intervalId = setInterval(function () {
        ++seconds;
    }, 1000);
}

function stopTimer() {
    clearInterval(intervalId);
}

function clearTimer() {
    clearInterval(intervalId);
    seconds = 0;
}
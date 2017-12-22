import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";

const convertSecondsToTime = Symbol('convertSecondsToTime');


class GameTimer extends React.Component {

    constructor(props) {
        super(props);

        this.seconds = 0;
        this.intervalId = null;
        this.state = {
            seconds: this[convertSecondsToTime]()
        };
    }


    /**
     * Lifecycle method
     */
    render() {

        let className = this.props.isGameOnPause ? "game-timer disable-content-opacity" : "game-timer";

        return (
            <p className={className}>{"Timer: " + this.state.seconds}</p>
        );
    }


    /**
     * Lifecycle method
     */
    componentDidMount() {

        /*Запустить таймер*/
        let self = this;
        setTimeout(function () {
            self.startTimer();
        }, 2300);

    }


    /**
     * Lifecycle method
     */
    componentDidUpdate(prevProps, prevState) {

        /*Остановить таймер если игра в режиме паузы*/
        if (prevProps.isGameOnPause !== this.props.isGameOnPause && this.props.isGameOnPause) {
            this.stopTimer();

        } else if (prevProps.isGameOnPause !== this.props.isGameOnPause && !this.props.isGameOnPause) {
            this.startTimer();
        }
    }


    /**
     * Запустить таймер
     */
    startTimer() {
        let self = this;

        self.intervalId = setInterval(function () {

            self.seconds++;

            self.setState({
                seconds: self[convertSecondsToTime]()
            });

        }, 1000);
    }


    /**
     * Остановить таймер
     */
    stopTimer() {
        clearInterval(this.intervalId);
        this.intervalId = null;
    }


    /**
     * Вернуть строковое прдставление значения таймера
     * @returns {string}
     */
    [convertSecondsToTime]() {

        let date = new Date(null);

        date.setSeconds(this.seconds);

        return date.toISOString().substr(11, 8);
    }

}


GameTimer.propTypes = {
    isGameOnPause: PropTypes.bool.isRequired    // Находится ли игра в режиме паузы
};


let decorator = connect((store) => {
    return {
        isGameOnPause: store.isGameOnPause,
    }
}, {});

export default decorator(GameTimer);
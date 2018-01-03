import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {setGameTime} from "../../redux/action_creaters";

const convertSecondsToTime = Symbol('convertSecondsToTime');


/**
 * Класс отображает таймер в игре
 */
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

        let className = this.props.isGameOnPause || this.props.isGameFinished || !this.props.isGameStarted ? "game-timer disable-content-opacity" : "game-timer";

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
        }, 2000);

    }


    /**
     * Lifecycle method
     */
    componentWillReceiveProps(nextProps) {

        /*Если новая игра*/
        if (nextProps.gameConfig.id !== this.props.gameConfig.id) {

            /*Остановить таймер*/
            this.stopTimer();
            this.seconds = 0;
            this.setState({
                seconds: this[convertSecondsToTime]()
            });

            /*Запустить таймер*/
            let self = this;
            setTimeout(function () {
                self.startTimer();
            }, 2000);

            return;
        }

        /*Если игра окончена*/
        if (nextProps.isGameFinished) {

            /*Остановить таймер*/
            this.stopTimer();

            /*Отправить в store количество секунд в игре*/
            this.props.setGameTime(this.seconds);

            return;
        }


        /*Если игра на паузе*/
        if (nextProps.isGameOnPause && !this.props.isGameOnPause) {

            this.stopTimer();
        }

        /*Если игра на паузе*/
        if (!nextProps.isGameOnPause && this.props.isGameOnPause) {

            this.startTimer();
        }
    }


    /**
     * Запустить таймер
     */
    startTimer() {
        let self = this;

        self.seconds++;

        self.setState({
            seconds: self[convertSecondsToTime]()
        });

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
    gameConfig: PropTypes.object.isRequired,        // Настройки игры
    isGameOnPause: PropTypes.bool.isRequired,       // Находится ли игра в режиме паузы
    isGameFinished: PropTypes.bool.isRequired,      // Закончена ли игра
    isGameStarted: PropTypes.bool.isRequired,       // Начата ли игра
    setGameTime: PropTypes.func.isRequired,         // Установить в store кол-во секунд на таймере
};


let decorator = connect((store) => {
    return {
        gameConfig: store.gameConfig,
        isGameOnPause: store.isGameOnPause,
        isGameFinished: store.isGameFinished,
        isGameStarted: store.isGameStarted
    }
}, {setGameTime});

export default decorator(GameTimer);
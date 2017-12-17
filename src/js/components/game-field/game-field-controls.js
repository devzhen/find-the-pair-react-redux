import React from 'react';
import PropTypes from 'prop-types';

import {connect} from "react-redux";

import {restartGame, pauseGame, startTimer, clearTimer, stopTimer} from "../../redux/action_creaters"

import Timer from "./game-timer";


class GameFieldControls extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isPaused: false
        }
    }

    /**
     * Lifecycle method
     */
    render() {

        return (

            <div className="game-field-controls">
                <button className="game-restart"
                        disabled={this.props.isGameOnPause ? true : false}
                        onClick={this.handleRestartButtonClick.bind(this)}>Restart
                </button>

                <Timer/>

                <p>Count<br/>attempts: <span className="game-attempts">0</span></p>

                <button className={this.state.isPaused ? "game-pause" : "game-continue"}
                        onClick={this.handlePauseButtonClick.bind(this)}>
                    {this.state.isPaused ? "Continue" : "Pause"}
                </button>
            </div>
        );
    }


    /**
     * Обработчик 'click' на кнопке 'Restart'
     */
    handleRestartButtonClick() {

        /*Очистить таймер*/
        this.props.clearTimer();

        /*Перезапуск игры*/
        this.props.restartGame();

        /*Запустить таймер*/
        this.props.startTimer();
    }


    /**
     * Обработчик 'click' на кнопке 'Pause|Continue'
     */
    handlePauseButtonClick() {

        let value = this.state.isPaused;

        this.setState({
            isPaused: !value
        });

        this.props.pauseGame();
    }

    componentDidUpdate() {
        console.log('GameFieldControls - componentDidUpdate');

        if (this.state.isPaused) {
            this.props.stopTimer();
        } else {
            this.props.startTimer();
        }
    }
}


GameFieldControls.propTypes = {
    isGameOnPause: PropTypes.bool.isRequired,           // Находится ли игра в режиме паузы
    restartGame: PropTypes.func.isRequired,             // Перезапустить игру
    pauseGame: PropTypes.func.isRequired,               // Поставить игру на паузу
    startTimer: PropTypes.func.isRequired,              // Запустить таймер
    clearTimer: PropTypes.func.isRequired,              // Очистиь таймер
    stopTimer: PropTypes.func.isRequired,                // Остановить таймер
};

export default connect((store) => {
    return {
        isGameOnPause: store.isGameOnPause
    }
}, {restartGame, pauseGame, startTimer, clearTimer, stopTimer})(GameFieldControls);
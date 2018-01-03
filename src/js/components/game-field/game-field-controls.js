import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {
    clearIsFinished, finishGame, pauseGame, resumeGame, startNewGame, stopGame,
    zeroCountAttempts
} from "../../redux/action_creaters";
import GameTimer from "./game-timer";
import GameAttempts from "./game-attempts";

const buttonRestartClickHandler = Symbol('buttonRestartClickHandler');
const buttonPauseClickHandler = Symbol('buttonPauseClickHandler');


/**
 * Класс отображает панель управления игрой
 */
class GameFieldControls extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isPaused: false
        };

        /*Обработчики click событий на кнопках*/
        this.buttonRestartClickHandler = this[buttonRestartClickHandler].bind(this);
        this.buttonPauseClickHandler = this[buttonPauseClickHandler].bind(this);
    }

    /**
     * Lifecycle method
     */
    render() {

        return (

            <div className="game-field-controls no-select">
                <button className="game-restart"
                        disabled={this.props.isGameOnPause || !this.props.isGameStarted && !this.props.isGameFinished}
                        onClick={this.buttonRestartClickHandler}>
                    Restart
                </button>

                <GameTimer/>

                <GameAttempts/>

                <button className={this.state.isPaused ? "game-pause" : "game-continue"}
                        onClick={this.buttonPauseClickHandler}
                        disabled={!this.props.isGameStarted}>
                    {this.state.isPaused ? "Continue" : "Pause"}
                </button>
            </div>
        );
    }


    componentWillReceiveProps(nextProps) {

        this.setState({isPaused: nextProps.isGameOnPause});
    }

    /**
     * Обработчик click события на кнопке Pause
     */
    [buttonPauseClickHandler]() {

        let value = this.state.isPaused;

        this.setState({
            isPaused: !value
        });

        if (value) {
            this.props.resumeGame();
        } else {
            /*Поставить игру на паузу*/
            this.props.pauseGame()
        }
    }


    /**
     * Обработчик click события на кнопке Restart
     */
    [buttonRestartClickHandler]() {
        /*Остановить игру*/
        this.props.stopGame();

        /*Обнулить кол-во попыток в игре*/
        this.props.zeroCountAttempts();

        /*Если игра завершена - очистить статус 'завершена'*/
        if (this.props.isGameFinished) {
            this.props.clearIsFinished();
        }

        /*Начать новую игру*/
        this.props.startNewGame(this.props.gameConfig);
    }
}


GameFieldControls.propTypes = {
    gameConfig: PropTypes.object.isRequired,        // Объект с настройками игры
    isGameOnPause: PropTypes.bool.isRequired,       // Находится ли игра в режиме паузы
    isGameStarted: PropTypes.bool.isRequired,       // Начата ли игра
    isGameFinished: PropTypes.bool.isRequired,      // Завершена ли игра
    pauseGame: PropTypes.func.isRequired,           // Поставить на паузу
    resumeGame: PropTypes.func.isRequired,          // Возобновить игру
    startNewGame: PropTypes.func.isRequired,        // Запустить новую игру
    stopGame: PropTypes.func.isRequired,            // Остановить игру
    finishGame: PropTypes.func.isRequired,          // Закончить игру
    zeroCountAttempts: PropTypes.func.isRequired,   // Обнулить кол-во попыток в игре
    clearIsFinished: PropTypes.func.isRequired,     // Очистить статус игры - 'завершена'
};

export default connect((state) => {

    return {
        gameConfig: state.gameConfig,
        isGameOnPause: state.isGameOnPause,
        isGameStarted: state.isGameStarted,
        isGameFinished: state.isGameFinished,
    }
}, {pauseGame, resumeGame, stopGame, finishGame, startNewGame, zeroCountAttempts, clearIsFinished})(GameFieldControls);
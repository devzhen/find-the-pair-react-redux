import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {pauseGame, stopGame, finishGame, startNewGame} from "../../redux/action_creaters";
import GameTimer from "./game-timer";
import GameAttempts from "./game-attempts";

const buttonRestartClickHandler = Symbol('buttonRestartClickHandler');
const buttonPauseClickHandler = Symbol('buttonPauseClickHandler');

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

    /**
     * Обработчик click события на кнопке Pause
     */
    [buttonPauseClickHandler]() {

        let value = !this.state.isPaused;

        this.setState({
            isPaused: value
        });

        this.props.pauseGame();
    }


    /**
     * Обработчик click события на кнопке Restart
     */
    [buttonRestartClickHandler]() {
        this.props.stopGame();
        this.props.startNewGame();
    }
}


GameFieldControls.propTypes = {
    isGameOnPause: PropTypes.bool.isRequired,
    isGameStarted: PropTypes.bool.isRequired,
    isGameFinished: PropTypes.bool.isRequired,
    pauseGame: PropTypes.func.isRequired,
    startNewGame: PropTypes.func.isRequired,
};

export default connect((store) => {
    return {
        isGameOnPause: store.isGameOnPause,
        isGameStarted: store.isGameStarted,
        isGameFinished: store.isGameFinished,
    }
}, {pauseGame, stopGame, finishGame, startNewGame})(GameFieldControls);
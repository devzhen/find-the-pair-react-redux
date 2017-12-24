import React from 'react';
import {connect} from "react-redux";
import PropTypes from "prop-types";
import GamePointsManager from "../../service/game-points-manager";
import LocalStorageManager from "../../service/local-storage-manager";


const handleUserClick = Symbol('handleUserClick');
const saveGameResult = Symbol('saveGameResult');


class GameSaveResult extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            incorrectName: false,
            isGameResultSaved: false
        };

        /*Обработчик click события*/
        this.clickHandler = this[handleUserClick].bind(this);
    }

    render() {

        let buttonClassName = this.state.isGameResultSaved ? 'no-display' : null;

        return (
            <div className="game-save-result">
                {this.state.incorrectName ? <p style={{color: 'red'}}>Wrong name</p> : null}
                <p>{this.state.isGameResultSaved ? "The result was saved" : "Do you want to save the result of the game?"}</p>
                <button className={buttonClassName} onClick={this.clickHandler}>Save</button>
            </div>
        );
    }


    /**
     * Private method
     * Обработчик click события
     */
    [handleUserClick]() {
        let userName = prompt("Please enter your name", "");
        if (userName !== '' && userName !== null) {

            /*Сохранить результат игры в local storage*/
            this[saveGameResult](userName);

            this.setState({
                incorrectName: false,
                isGameResultSaved: true
            });
        } else {
            this.setState({
                incorrectName: true,
                isGameResultSaved: false
            });
        }

    }


    /**
     * Сохранить результат игры в local storage
     */
    [saveGameResult](name) {

        /*Подготовить результат для сохранения*/
        let result = new GamePointsManager(
            this.props.gameConfig.rows,
            this.props.gameConfig.cols,
            this.props.countAttempts,
            this.props.seconds
        ).getGameResult();

        /*Сохранить результат игры в local storage*/
        LocalStorageManager.saveGameResult(name, result);
    }
}

GameSaveResult.propTypes = {
    gameConfig: PropTypes.object.isRequired,
    countAttempts: PropTypes.number.isRequired,
    seconds: PropTypes.number.isRequired,
};

export default connect((store) => {
    return {
        gameConfig: store.gameConfig,
        countAttempts: store.countAttempts,
        seconds: store.seconds
    };
})(GameSaveResult);
import React from 'react';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {startGame} from "../../redux/action_creaters";
import GameFieldControls from "./game-field-controls";
import GameField from "./game-field";
import GameFieldCell from "./game-field-cell";
import GameFieldRow from "./game-field-row";

const createGameCells = Symbol('createGameCells');
const handleUserClick = Symbol('handleUserClick');
const hideImages = Symbol('hideImages');
const showImages = Symbol('showImages');


class GameFieldPanel extends React.Component {

    constructor(props) {
        super(props);

        this.htmlElement = null;
    }


    render() {

        return (
            <div className={"game-field-panel"} ref={(div) => {
                this.htmlElement = div
            }}>

                <GameField>
                    {this[createGameCells]()}
                </GameField>

                <GameFieldControls/>
            </div>
        );
    }

    componentDidMount() {

        setTimeout(() => {

            /*Активировать игру*/
            this.props.startGame();

            /*Спрятать изображения*/
            this[hideImages]();

        }, 2000);
    }


    componentDidUpdate() {

        setTimeout(() => {

            /*Активировать игру*/
            this.props.startGame();

            /*Спрятать изображения*/
            this[hideImages]();

        }, 2000);
    }

    /**
     * Private method
     * Создать ячейки игрового поля
     * @returns {Array}
     */
    [createGameCells]() {

        let gameField = [];
        let cols = [];

        for (let i = 0; i < this.props.gameConfig.rows; i++) {

            for (let j = 0; j < this.props.gameConfig.cols; j++) {

                let component = <GameFieldCell
                    key={this.props.gameConfig.id + '#' + i.toString() + '#' + j.toString()}
                    width={100 / this.props.gameConfig.cols + '%'}
                    height={"100%"}
                    image={this.props.gameConfig.images[i][j]}/>;

                cols.push(component);
            }

            gameField.push(
                <GameFieldRow key={i.toString()}>
                    {cols}
                </GameFieldRow>
            );
            cols = [];

        }

        return gameField;
    }


    /**
     * Спрятать все изображения
     */
    [hideImages]() {

        let images = this.htmlElement.querySelectorAll('div.game-field-cell img');
        for (let i = 0; i < images.length; i++) {
            images[i].classList.add('no-display');
        }
    }
}


GameFieldPanel.propTypes = {
    gameConfig: PropTypes.object.isRequired,
    startGame: PropTypes.func.isRequired,
};

export default connect((store) => {
    return {gameConfig: store.gameConfig};
}, {startGame})(GameFieldPanel);
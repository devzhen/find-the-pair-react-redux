import React from "react";
import PropTypes from "prop-types";
import GameFieldCell from "./game-field-cell";


export default class GameField extends React.Component {

    constructor(props) {
        super(props);

        this.cols = this.props.cols;
        this.rows = this.props.rows;

        this.optimizeGameFieldSize();
    }

    render() {
        return (
            <div className="game-field">
                {this.createGameField()}
            </div>
        );
    }


    /**
     * Создать ячейки игрового поля
     * @returns {Array}
     */
    createGameField() {
        let rows = [];
        let cols = [];

        for (let i = 0; i < this.rows; i++) {

            for (let j = 0; j < this.cols; j++) {

                cols.push(<GameFieldCell key={i.toString() + j.toString()} image={""}/>);
            }
            rows.push(React.createElement('div', {key: i, className: "game-field-row"}, cols));
            cols = [];
        }

        return rows;
    }


    /**
     * Оптимизировать размер игрового поля
     */
    optimizeGameFieldSize(){

    }

}

GameField.propTypes = {
    rows: PropTypes.number.isRequired,
    cols: PropTypes.number.isRequired,
    images: PropTypes.array.isRequired
};

GameField.defaultProps = {
    rows: 3,
    cols: 3,
    images: []
};
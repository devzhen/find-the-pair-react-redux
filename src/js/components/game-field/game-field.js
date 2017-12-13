import React from "react";
import PropTypes from "prop-types";
import GameFieldCell from "./game-field-cell";


export default class GameField extends React.Component {

    constructor(props) {
        super(props);

        /*Кол-во столбцов игрового поля*/
        this.cols = this.props.cols;

        /*Кол-во строк игрового поля*/
        this.rows = this.props.rows;

        /*Оптимизировать размер игрового поля*/
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
    optimizeGameFieldSize() {

        let cellCount = this.rows * this.cols;

        while (cellCount % 2 !== 0) {
            this.cols++;

            cellCount = this.rows * this.cols;
        }
    }

}

GameField.propTypes = {
    rows: PropTypes.number.isRequired,      /*Кол-во строк игрового поля*/
    cols: PropTypes.number.isRequired,      /*Кол-во столбцов игрового поля*/
    images: PropTypes.array.isRequired      /*Массив с путями к изображениям*/
};

GameField.defaultProps = {
    rows: 3,
    cols: 3,
    images: []
};
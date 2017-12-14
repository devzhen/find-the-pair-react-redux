import React from "react";
import ReactDOM from "react-dom";

import PropTypes from "prop-types";
import GameFieldCell from "./game-field-cell";

const createImagePairs = Symbol('createImagePairs');
const mixImagePairs = Symbol('mixImagePairs');


export default class GameField extends React.Component {

    constructor(props) {
        super(props);

        /*Элемент-отображающий игровое поле*/
        this.htmlElement = null;

        /*Кол-во столбцов игрового поля*/
        this.cols = this.props.cols;

        /*Кол-во строк игрового поля*/
        this.rows = this.props.rows;

        /*Оптимизировать размер игрового поля*/
        this.optimizeGameFieldSize();

        /*Создать пары изображений*/
        this.imagePairs = this[createImagePairs](this.props.images);
    }


    render() {
        return (
            <div className="game-field" ref={(div) => {
                this.htmlElement = div;
            }}>

            </div>
        );
    }


    componentDidMount() {
        this.createGameField();
    }

    /**
     * Создать ячейки игрового поля
     */
    createGameField() {

        /*Размеры игрового поля*/
        let gameFieldWidth = this.htmlElement.clientWidth;
        let gameFieldHeight = this.htmlElement.clientHeight;

        /*Вычисление значения border ячейки*/
        let div = document.createElement('div');
        div.classList.add('game-field-cell');
        this.htmlElement.appendChild(div);
        let cellBorders = div.offsetWidth - div.clientWidth;
        this.htmlElement.removeChild(div);

        /*Размеры ячейки игрового поля*/
        let cellWidth = gameFieldWidth / this.cols - cellBorders;
        let cellHeight = gameFieldHeight / this.rows - cellBorders;


    }


    /**
     * Оптимизировать размер игрового поля
     * если кол-во ячеек игрового поля нечетное
     */
    optimizeGameFieldSize() {

        let cellCount = this.rows * this.cols;

        while (cellCount % 2 !== 0) {
            this.cols++;

            cellCount = this.rows * this.cols;
        }

    }


    /**
     * Private method
     * Создать пары изображений
     * @param array {Array}. Массив с изображениями
     * @returns {Array}. Двумерный массив пар изображений
     */
    [createImagePairs](array) {

        if (array.length === 0) {
            return;
        }

        /*Создание массива пар изображений*/
        let imagePairs = [];

        for (let i = 0, j = 0; i < this.rows * this.cols; i++, j++) {

            if (j >= array.length) {
                j = 0;
            }

            imagePairs[i] = array[j];
        }

        /*Перемешать массив пар изображений случайным образом*/
        this[mixImagePairs](imagePairs);

        /*Создание двумерного массива пар изображений*/
        let _imagePairs = [];
        let index = 0;

        for (let i = 0; i < this.rows; i++) {

            _imagePairs[i] = [];

            for (let j = 0; j < this.cols; j++) {

                _imagePairs[i][j] = imagePairs[index++];
            }
        }

        return _imagePairs;
    }


    /**
     * Private method
     * Перемешать массив пар изображений случайным образом
     * @param imagePairs {Array}. Массив пар изображений.
     */
    [mixImagePairs](imagePairs) {

        for (let i = 0; i < imagePairs.length; i++) {

            let index = Math.floor(Math.random() * imagePairs.length);
            if (index === i) {
                continue;
            }

            let temp = imagePairs[i];
            imagePairs[i] = imagePairs[index];
            imagePairs[index] = temp;
        }
    }
}

GameField.propTypes = {
    rows: PropTypes.number.isRequired, /*Кол-во строк игрового поля*/
    cols: PropTypes.number.isRequired, /*Кол-во столбцов игрового поля*/
    images: PropTypes.array.isRequired      /*Массив с путями к парам изображений*/
};

GameField.defaultProps = {
    rows: 3,
    cols: 3,
    images: []
};
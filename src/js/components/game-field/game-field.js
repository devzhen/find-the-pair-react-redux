import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

import GameFieldCell from "./game-field-cell";

import {connect} from "react-redux";


const createImagePairs = Symbol('createImagePairs');
const mixImagePairs = Symbol('mixImagePairs');
const optimizeGameFieldSize = Symbol('optimizeGameFieldSize');
const createGameField = Symbol('createGameField');
const getGameConfigFromStore = Symbol('getGameConfigFromStore');
const isGameConfigEquals = Symbol('isGameConfigEquals');


/**
 * Класс отображает игровое поле
 */
class GameField extends React.Component {

    constructor(props) {
        super(props);

        /*Элемент-отображающий игровое поле*/
        this.htmlElement = null;

        /*Получение настроек игры из store*/
        this[getGameConfigFromStore]();
    }


    /**
     * Lifecycle method
     */
    render() {

        let className = "game-field";

        /*Если игра поставлена на паузу*/
        if (this.props.isGameOnPause) {
            className += " disable-content disable-content-opacity"
        }

        return (
            <div className={className} ref={(div) => {
                this.htmlElement = div
            }}>

            </div>
        );
    }


    /**
     * Lifecycle method
     */
    componentDidUpdate(nextProps, nextState) {

        console.log('GameField - componentDidUpdate');

        /*Если изменились настройки игры*/
        if (JSON.stringify(nextProps.gameConfig) !== JSON.stringify(this.props.gameConfig)) {

            /*Получение настроек игры из store*/
            this[getGameConfigFromStore]();

            /*Создать ячейки игрового поля*/
            this[createGameField]();

        }
    }


    /**
     * Lifecycle method
     */
    componentDidMount() {

        /*Создать ячейки игрового поля*/
        this[createGameField]();
    }


    /**
     * Private method
     * Создать ячейки игрового поля
     */
    [createGameField]() {

        /*Создать ячейки игрового поля*/
        let gameFieldCells = [];

        /*Размеры игрового поля*/
        let gameFieldWidth = this.htmlElement.clientWidth;
        let gameFieldHeight = this.htmlElement.clientHeight;

        /*Размеры ячейки игрового поля*/
        let cellWidth = gameFieldWidth / this.cols;
        let cellHeight = gameFieldHeight / this.rows;

        /*Создать ячейки игрового поля*/
        for (let i = 0; i < this.rows; i++) {

            let top = i * cellHeight;

            for (let j = 0; j < this.cols; j++) {

                gameFieldCells.push(<GameFieldCell key={i.toString() + '#' + j.toString()}
                                                   top={top}
                                                   left={j * cellWidth}
                                                   width={cellWidth} height={cellHeight}
                                                   image={this.imagePairs[i][j]}/>)
            }
        }

        /*Отобразить ячейки игрового поля*/
        ReactDOM.render(
            gameFieldCells,
            this.htmlElement
        );
    }


    /**
     * Private method
     * Получение настроек игры из store
     */
    [getGameConfigFromStore]() {

        /*Получение настроек игры из store*/
        let gameConfig = this.props.gameConfig;

        /*Кол-во столбцов игрового поля*/
        this.cols = gameConfig.cols;

        /*Кол-во строк игрового поля*/
        this.rows = gameConfig.rows;

        /*Оптимизировать размер игрового поля*/
        this[optimizeGameFieldSize]();

        /*Создать пары изображений из массива изображений*/
        let images = gameConfig.images;
        this.imagePairs = this[createImagePairs](images);
    }


    /**
     * Private method
     * Оптимизировать размер игрового поля
     * если кол-во ячеек игрового поля нечетное
     */
    [optimizeGameFieldSize]() {

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

        for (let i = 0, j = 0; i < this.rows * this.cols; i = i + 2, j++) {

            if (j >= array.length) {
                j = 0;
            }

            imagePairs[i] = array[j];
            imagePairs[i + 1] = array[j];
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
    gameConfig: PropTypes.object.isRequired,        /*Объект с настройками игры*/
    isGameOnPause: PropTypes.bool.isRequired        /*Находится ли игра в режиме паузы*/
};


const decorator = connect((store) => {
    return {
        gameConfig: store.gameConfig,
        isGameOnPause: store.isGameOnPause
    }
});

export default decorator(GameField);
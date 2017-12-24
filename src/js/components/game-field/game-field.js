import React from "react";
import PropTypes from "prop-types";

import {connect} from "react-redux";
import {finishGame, increaseCountAttempts, stopGame} from "../../redux/action_creaters";

import GameSaveResult from "./game-save-result";

const handleUserClick = Symbol('handleUserClick');
const checkOpenImages = Symbol('checkOpenImages');
const attachKeyPressListener = Symbol('attachKeyPressListener');
const checkCountCells = Symbol('checkCountCells');

/**
 * Класс отображает игровое поле
 */
class GameField extends React.Component {

    constructor(props) {
        super(props);

        this.htmlElement = null;

        /*Кол-во открытых изображений*/
        this.countOpenImages = 0;

        /*Обработчик click события*/
        this.clickHandler = this[handleUserClick].bind(this);

        /*Обработчик keypress события*/
        this[attachKeyPressListener]();
    }


    /**
     * Lifecycle method
     */
    render() {

        let className = "game-field no-select";
        if (this.props.isGameOnPause) {
            className = "game-field no-select disable-content disable-content-opacity";
        }

        return (
            <div className={className} onClick={this.clickHandler} ref={div => {
                this.htmlElement = div
            }}>
                {this.props.isGameFinished ? <GameSaveResult/> : null}

                {this.props.children}

            </div>
        );
    }


    /**
     * Private method
     * Обработчик click события
     * @param e {Event}
     */
    [handleUserClick](e) {

        /*Если игра на паузе или не начата*/
        if (this.props.isGameOnPause || !this.props.isGameStarted) {
            return;
        }

        /*Если click не на ячейке игрового поля*/
        if (e.target.tagName !== 'DIV' || !e.target.classList.contains('game-field-cell')) {
            return;
        }

        /*Если уже открыто два изображения*/
        if (this.countOpenImages === 2) {
            return;
        }

        /*Перевернуть изображение*/
        let image = e.target.firstChild;
        image.classList.remove('no-display');
        this.countOpenImages++;

        /*Проверить открытые изображения*/
        this[checkOpenImages]();
    }


    /**
     * Private method
     * Проверить открытые изображения
     */
    [checkOpenImages]() {

        if (this.countOpenImages < 2) {
            return;
        }

        /*Открытые изображения*/
        let images = this.htmlElement.querySelectorAll('img:not(.no-display)');
        let callback = null;

        /*Если одинаковые изображения*/
        if (images[0].src === images[1].src) {

            /*Удалить ячейки*/
            callback = () => {
                images[0].classList.add('no-display');
                images[0].parentElement.classList.add('no-visibility');
                images[1].classList.add('no-display');
                images[1].parentElement.classList.add('no-visibility');

                /*Проверить количество оставшихся ячеек игрового поля*/
                this[checkCountCells]();
            };

        } else {

            /*Спрятать ячейки*/
            callback = () => {
                images[0].classList.add('no-display');
                images[1].classList.add('no-display');
            };
        }

        setTimeout(() => {
            callback();

            /*Кол-во открытых изображений*/
            this.countOpenImages = 0;

            /*Увеличить кол-во попыток в игре*/
            this.props.increaseCountAttempts();
        }, 200);
    }


    /**
     * Private method
     * Проверить количество оставшихся ячеек игрового поля
     */
    [checkCountCells]() {

        let cells = this.htmlElement.querySelectorAll('div.game-field-cell:not(.no-visibility)');
        if (cells.length > 0) {
            return;
        }

        /*Остановить игру*/
        this.props.stopGame();

        /*Закончить игру*/
        this.props.finishGame();
    }


    /**
     * Private method
     * Обработчик keypress события
     * При нажатии 'shift + s' отображаются все изображения
     */
    [attachKeyPressListener]() {

        document.addEventListener('keypress', (e) => {

            if (e.keyCode === 83 && e.shiftKey || e.keyCode === 1099 && e.shiftKey) {

                let images = this.htmlElement.querySelectorAll('img.no-display');

                for (let i = 0; i < images.length; i++) {

                    images[i].classList.remove('no-display');

                }

                setTimeout(() => {

                    for (let i = 0; i < images.length; i++) {

                        images[i].classList.add('no-display');

                    }

                }, 1000);
            }
        });
    }
}


GameField.propTypes = {
    isGameOnPause: PropTypes.bool.isRequired,
    isGameStarted: PropTypes.bool.isRequired,
    isGameFinished: PropTypes.bool.isRequired,
    stopGame: PropTypes.func.isRequired,
    finishGame: PropTypes.func.isRequired,
    increaseCountAttempts: PropTypes.func.isRequired,
};

export default connect((store) => {
    return {
        isGameOnPause: store.isGameOnPause,
        isGameFinished: store.isGameFinished,
        isGameStarted: store.isGameStarted,
    }
}, {stopGame, finishGame, increaseCountAttempts})(GameField);
import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {
    changeGameFieldSize, zeroCountAttempts, setActiveTab, stopGame, pauseGame,
    resumeGame, clearIsFinished
} from "../../redux/action_creaters";
import {FIRST_TAB} from "../../constants";

const handleUserChange = Symbol('handleUserChange');

/**
 * Класс отображает select выбор размера игрового поля
 */
class GameFieldSize extends React.Component {

    constructor(props) {
        super(props);

        /*Обработчик change события*/
        this.changeHandler = this[handleUserChange].bind(this);
    }

    render() {
        return (
            <div className="game-field-size" onChange={this.changeHandler}>
                <p>Select game field size:</p>
                <select>
                    <option value="2x2">2x2</option>
                    <option value="4x4">4x4</option>
                    <option value="6x6">6x6</option>
                    <option value="8x8">8x8</option>
                </select>
            </div>
        );
    }

    /*Обработчик change события*/
    [handleUserChange](e) {

        /*Остановить текущую игру*/
        this.props.stopGame();

        /*Обнулить кол-во попыток в игре*/
        this.props.zeroCountAttempts();

        /*Если игра была поставлена на паузу - удалить этот статус*/
        if (this.props.isGameOnPause) {
            this.props.resumeGame();
        }

        /*Если игра была завершена - очистить статус 'завершена'*/
        if (this.props.isGameFinished) {
            this.props.clearIsFinished();
        }

        /*Изменить размер игрового поля*/
        this.props.changeGameFieldSize(e.target.value);

        /*Установить первую вкладку окна игры - активной*/
        this.props.setActiveTab(FIRST_TAB);
    }
}


GameFieldSize.propTypes = {
    isGameOnPause: PropTypes.bool.isRequired,           // Находится ли игра в режиме паузы
    isGameFinished: PropTypes.bool.isRequired,          // Закончена ли игра
    stopGame: PropTypes.func.isRequired,                // Остановить текущую игру
    resumeGame: PropTypes.func.isRequired,              // Возобновить игру, если была на паузе
    clearIsFinished: PropTypes.func.isRequired,         // Очистить статус - игра завершена
    changeGameFieldSize: PropTypes.func.isRequired,     // Изменить размер игрового поля
    zeroCountAttempts: PropTypes.func.isRequired,       // Обнулить кол-во попыток в игре
    setActiveTab: PropTypes.func.isRequired,            // Установить активную вкладку окна игры
};

export default connect((store) => {
    return {
        isGameOnPause: store.isGameOnPause,
        isGameFinished: store.isGameFinished
    };
}, {
    stopGame,
    changeGameFieldSize,
    zeroCountAttempts,
    setActiveTab,
    resumeGame,
    clearIsFinished
})(GameFieldSize);
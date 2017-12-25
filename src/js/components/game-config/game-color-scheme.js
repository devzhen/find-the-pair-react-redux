import React from 'react';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {changeGameCellsColorScheme, changeGameWindowColorScheme} from "../../redux/action_creaters";

const handleUserChange = Symbol('handleUserChange');

/**
 * Компонент отображает select выбора цветовой схемы игры
 */
class GameColorScheme extends React.Component {

    constructor(props) {
        super(props);

        /*Обработчик change события*/
        this.changeHandler = this[handleUserChange].bind(this);
    }

    render() {
        return (
            <div className="game-color-scheme">
                <p>Select game color scheme:</p>
                <select onChange={this.changeHandler}>
                    <option value="white">white</option>
                    <option value="green">green</option>
                    <option value="blue">blue</option>
                    <option value="orange">orange</option>
                </select>
            </div>
        );
    }

    /*Обработчик change события*/
    [handleUserChange](e) {
        let color = e.target.value;

        /*Изменить цвет ячеек игрового поля*/
        this.props.changeGameCellsColorScheme(color);

        /*Изменить цвет окна*/
        this.props.changeGameWindowColorScheme(color);
    }
}


GameColorScheme.propTypes = {
    changeGameWindowColorScheme: PropTypes.func.isRequired,     // Изменить цвет ячеек игрового поля
    changeGameCellsColorScheme: PropTypes.func.isRequired,      // Изменить цвет окна
};


export default connect(null, {changeGameWindowColorScheme, changeGameCellsColorScheme})(GameColorScheme);
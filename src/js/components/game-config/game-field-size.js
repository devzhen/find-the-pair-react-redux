import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {changeGameFieldSize, zeroCountAttempts} from "../../redux/action_creaters";

const handleUserChange = Symbol(handleUserChange);

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

        /*Обнулить кол-во попыток в игре*/
        this.props.zeroCountAttempts();

        /*Изменить размер игрового поля*/
        this.props.changeGameFieldSize(e.target.value);
    }
}


GameFieldSize.propTypes = {
    changeGameFieldSize: PropTypes.func.isRequired,
    zeroCountAttempts: PropTypes.func.isRequired,
};

export default connect(null, {changeGameFieldSize, zeroCountAttempts})(GameFieldSize);
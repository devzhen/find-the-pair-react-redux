import React from 'react';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {changeGameCellsColorScheme, changeGameWindowColorScheme} from "../../redux/action_creaters";

const handleUserChange = Symbol(handleUserChange);

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

        this.props.changeGameCellsColorScheme(color);
        this.props.changeGameWindowColorScheme(color);
    }
}


GameColorScheme.propTypes = {
    changeGameWindowColorScheme:PropTypes.func.isRequired,
    changeGameCellsColorScheme:PropTypes.func.isRequired,
};


export default connect(null, {changeGameWindowColorScheme, changeGameCellsColorScheme})(GameColorScheme);
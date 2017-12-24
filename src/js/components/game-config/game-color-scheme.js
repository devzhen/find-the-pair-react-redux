import React from 'react';

const handleUserChange = Symbol(handleUserChange);

export default class GameColorScheme extends React.Component {

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
    [handleUserChange]() {

    }
}


GameColorScheme.propTypes = {};

GameColorScheme.defaultProps = {};
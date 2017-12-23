import React from 'react';
import {connect} from "react-redux";

const handleUserClick = Symbol('handleUserClick');


class GameSaveResult extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            incorrectName: false,
            isGameResultSaved: false
        };

        /*Обработчик click события*/
        this.clickHandler = this[handleUserClick].bind(this);
    }

    render() {

        let buttonClassName = this.state.isGameResultSaved ? 'no-display' : null;

        return (
            <div className="game-save-result">
                {this.state.incorrectName ? <p style={{color: 'red'}}>Wrong name</p> : null}
                <p>{this.state.isGameResultSaved ? "The result was saved" : "Do you want to save the result of the game?"}</p>
                <button className={buttonClassName} onClick={this.clickHandler}>Save</button>
            </div>
        );
    }


    /**
     * Private method
     * Обработчик click события
     */
    [handleUserClick]() {
        let name = prompt("Please enter your name", "");
        if (name !== '' && name !== null) {
            this.setState({
                incorrectName: false,
                isGameResultSaved: true
            });
        } else {
            this.setState({
                incorrectName: true,
                isGameResultSaved: false
            });
        }

    }
}

export default connect()(GameSaveResult);
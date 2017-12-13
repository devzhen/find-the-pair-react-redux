import React from 'react';
import PropTypes from 'prop-types';

export default class GameFieldControls extends React.Component {

    render() {
        return (

            <div className="game-field-controls">
                <button className="game-restart">Restart</button>
                <p className="game-timer">Timer</p>
                <p>Count<br />attempts: <span className="game-attempts">0</span></p>
                <button className="game-pause">Pause</button>
                <button className="game-continue no-display">Continue</button>
            </div>
        );
    }
}


GameFieldControls.propTypes = {};

GameFieldControls.defaultProps = {};
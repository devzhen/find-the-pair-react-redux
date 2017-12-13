import React from 'react';
import PropTypes from 'prop-types';

import GameFieldControls from "./game-field-controls";
import GameField from "./game-field";

export default class GameFieldPanel extends React.Component {

    render() {
        return (
            <div className="game-field-panel">

                <GameField cols={6} rows={6}/>

                <GameFieldControls/>
            </div>
        );
    }
}


GameFieldPanel.propTypes = {};

GameFieldPanel.defaultProps = {};
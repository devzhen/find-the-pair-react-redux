import React from 'react';
import PropTypes from 'prop-types';

import GameFieldControls from "./game-field-controls";
import GameField from "./game-field";

export default class GameFieldPanel extends React.Component {

    render() {

        let images = [
            "../img/bridge.jpg",
            "../img/cat.jpg",
            "../img/dog.jpg",
            "../img/horse.jpg",
            "../img/moto.jpg",
            "../img/shoes.jpg",
        ];

        return (
            <div className="game-field-panel">

                <GameField images={images}/>

                <GameFieldControls/>
            </div>
        );
    }
}


GameFieldPanel.propTypes = {};

GameFieldPanel.defaultProps = {};
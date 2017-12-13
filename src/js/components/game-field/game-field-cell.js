import React from 'react';
import PropTypes from 'prop-types';

export default class GameFieldCell extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isRevert: true          // Перевернуто ли изображение в данный момент
        };

        /*Обработчик click события*/
        this.clickHandler = this.handleUserClick.bind(this);
    }

    render() {
        return (
            <div className="game-field-cell"
                 onClick={this.clickHandler}>

            </div>
        );
    }

    /**
     * Обработчик click события
     */
    handleUserClick() {

        /*Перевернуть изображение*/
        let value = !this.state.isRevert;

        this.setState({
            isRevert: value
        });
    }
}


GameFieldCell.propTypes = {

    image: PropTypes.string.isRequired      // Путь к изображению
};

GameFieldCell.defaultProps = {

    image: ""
};
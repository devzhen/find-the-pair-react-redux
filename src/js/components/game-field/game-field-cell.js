import React from 'react';
import PropTypes from 'prop-types';

/**
 * Класс отображает ячейку игрового поля
 */
export default class GameFieldCell extends React.Component {

    render() {


        return (
            <div className="game-field-cell"
                 style={{
                     top: this.props.top,
                     left: this.props.left,
                     width: this.props.width,
                     height: this.props.height
                 }}>

                <img src={this.props.image} alt={"half pair"} draggable={false}/>
            </div>
        );
    }
}


GameFieldCell.propTypes = {
    top: PropTypes.number.isRequired,
    left: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired      // Путь к изображению
};
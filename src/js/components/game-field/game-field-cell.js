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
    top: PropTypes.number.isRequired,       // Координаты 'top' ячейки игрового поля
    left: PropTypes.number.isRequired,      // Координаты 'left' ячейки игрового поля
    width: PropTypes.number.isRequired,     // Ширина ячейки игрового поля
    height: PropTypes.number.isRequired,    // Высота ячейки игрового поля
    image: PropTypes.string.isRequired      // Путь к изображению
};
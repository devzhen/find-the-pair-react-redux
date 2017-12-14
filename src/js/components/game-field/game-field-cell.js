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
                 style={{
                     top: this.props.top,
                     left: this.props.left,
                     width: this.props.width,
                     height: this.props.height
                 }}
                 onClick={this.clickHandler}>

                <img src={this.props.image} alt={"half pair"} draggable={false}/>
            </div>
        );
    }

    /**
     * Обработчик click события
     */
    handleUserClick() {


    }
}


GameFieldCell.propTypes = {
    top: PropTypes.number.isRequired,
    left: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired      // Путь к изображению
};

GameFieldCell.defaultProps = {

    image: ""
};
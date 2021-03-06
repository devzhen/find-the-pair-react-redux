import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";

/**
 * Класс отображает ячейку игрового поля
 */
class GameFieldCell extends React.Component {

    constructor(props) {
        super(props);

        /*Ссылка на изображение*/
        this.image = null;
    }

    render() {

        return (
            <div className="game-field-cell"
                 style={{width: this.props.width, height: this.props.height, backgroundColor: this.props.color}}>

                <img src={this.props.image}
                     alt={"half pair"} draggable={false} />
            </div>
        );
    }
}


GameFieldCell.propTypes = {
    color: PropTypes.string.isRequired,         // Цвет ячейки игрового поля
    image: PropTypes.string.isRequired,         // Путь к изображению
};

export default connect((state) => {
    return {color: state.cellColor};
})(GameFieldCell);

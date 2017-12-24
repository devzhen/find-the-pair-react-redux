import React from 'react';
import PropTypes from 'prop-types';


/**
 * Класс отображает ячейку игрового поля
 */
class GameFieldCell extends React.Component {

    constructor(props) {
        super(props);

        this.image = null;
    }

    render() {

        return (
            <div className="game-field-cell"
                 style={{width: this.props.width, height: this.props.height}}>

                <img src={this.props.image} alt={"half pair"} draggable={false}
                     ref={(img) => {
                         this.image = img
                     }}/>
            </div>
        );
    }

    showImage(){
        this.image.classList.remove('no-display');
    }

    hideImage(){
        this.image.classList.add('no-display');
    }
}


GameFieldCell.propTypes = {
    image: PropTypes.string.isRequired,      // Путь к изображению
};

export default GameFieldCell;
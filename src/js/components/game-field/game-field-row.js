import React from 'react';
import PropTypes from "prop-types";
import {connect} from "react-redux";

/**
 * Класс отображает строку с ячейками игрового поля
 */
class GameFieldRow extends React.Component {

    render() {
        return (
            <div className={"game-field-row"} style={{height: 100 / this.props.gameConfig.rows + "%"}}>
                {this.props.children}
            </div>
        );
    }
}


GameFieldRow.propTypes = {
    gameConfig: PropTypes.object.isRequired,    // Настройки игры
};

export default connect((store) => {
    return {gameConfig: store.gameConfig};
})(GameFieldRow);

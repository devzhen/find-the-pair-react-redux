import React from 'react';
import config from "../../config";

export default class GameFieldRow extends React.Component {

    render() {
        return (
            <div className={"game-field-row"} style={{height: 100 / config.rows + "%"}}>
                {this.props.children}
            </div>
        );
    }
}


GameFieldRow.propTypes = {};

GameFieldRow.defaultProps = {};
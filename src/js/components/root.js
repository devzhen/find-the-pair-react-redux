import React from 'react';
import PropTypes from 'prop-types';
import store from "../redux/store";
import {Provider} from "react-redux";
import GameWindow from "./game-window";

export default class Root extends React.Component {

    render() {
        return (
            <Provider store={store}>
                <GameWindow width={this.props.width} height={this.props.height}/>
            </Provider>
        );
    }
}


Root.propTypes = {
    width: PropTypes.number.isRequired,     // Ширина окна
    height: PropTypes.number.isRequired     // Высота окна
};

Root.defaultProps = {
    width: 600,
    height: 400
};
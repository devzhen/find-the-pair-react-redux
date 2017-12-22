import React from 'react';
import PropTypes from 'prop-types';

import {connect} from "react-redux";

class GameAttempts extends React.Component {

    render() {

        let className = this.props.isGameOnPause || !this.props.isGameStarted ? "disable-content-opacity" : null;

        return (

            <p className={className}>Count<br /> attempts: {this.props.countAttempts}</p>
        );
    }
}


GameAttempts.propTypes = {
    countAttempts: PropTypes.number.isRequired,
    isGameOnPause: PropTypes.bool.isRequired,
    isGameStarted: PropTypes.bool.isRequired
};

export default connect((store) => {
    return {
        countAttempts: store.countAttempts,
        isGameOnPause: store.isGameOnPause,
        isGameStarted: store.isGameStarted,
    };
})(GameAttempts);
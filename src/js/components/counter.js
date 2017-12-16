import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import {increment} from "../action_creaters";


class Counter extends React.Component {

    render() {

        return (
            <div>
                <h2>{this.props.counter}</h2>
                <button onClick={this.handleClick.bind(this)}>Increment</button>
            </div>
        );
    }

    handleClick() {
        this.props.increment();
    }

}

Counter.propTypes = {
    counter: PropTypes.number.isRequired
};


/*Карта соответствия props и данных в store*/
function mapStateToProps(state) {
    return {
        counter: state.count
    }
}

/*Карта соотв-ия props и функций action creators*/
const mapToDispatch = {increment};

const decorator = connect(mapStateToProps, mapToDispatch);

export default decorator(Counter);
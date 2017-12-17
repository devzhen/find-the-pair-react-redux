import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {startTimer, getTime} from "../../redux/action_creaters/index"

const convertSecondsToTime = Symbol('convertSecondsToTime');

class Timer extends React.Component {

    constructor(props) {
        super(props);

        this.props.getTime();

        this.state = {
            seconds: this.props.seconds
        };
    }


    /**
     * Lifecycle method
     */
    render() {
        return <p className="game-timer">{"Timer: " + this[convertSecondsToTime]()}</p>;
    }


    /**
     * Lifecycle method
     */
    componentDidMount() {

        /*Запуск таймера*/
        this.props.startTimer();

        /*Каждую секунду получать значение time из store*/
        let self = this;
        setInterval(function () {

            self.props.getTime();
            self.setState({
                seconds: self.props.seconds
            });

        }, 900);
    }


    /**
     * Вернуть строковое прдставление значения таймера
     * @returns {string}
     */
    [convertSecondsToTime](){

        let date = new Date(null);

        date.setSeconds(this.state.seconds);

        return date.toISOString().substr(11, 8);
    }
}


Timer.propTypes = {
    seconds: PropTypes.number.isRequired,          // Время в секундах для отображения
    startTimer: PropTypes.func.isRequired,      // Запустить таймер
    getTime: PropTypes.func.isRequired          // Получить текщее время из store
};

let decorator = connect((store) => {
    return {
        seconds: store.seconds
    }
}, {startTimer, getTime});

export default decorator(Timer);
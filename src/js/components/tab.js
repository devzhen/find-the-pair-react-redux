import React from 'react';
import PropTypes from 'prop-types';

export default class Tab extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        let className = "tab";

        /*Активна ли вкладка*/
        if (this.props.active) {
            className = className + " tab-active";
        }

        return (
            <a href={"javascript:void(0);"} className={className} data-id={this.props.id}>{this.props.textContent}</a>
        );
    }
}

Tab.propTypes = {
    textContent: PropTypes.string.isRequired,   // текст внутри вкладки
    id: PropTypes.number,                       // id элемента, кот. открывает вкладка
    active: PropTypes.bool,                     // активна ли вкладка
};

Tab.defaultProps = {
    textContent: "Tab",
    id: null,
    active: false
};
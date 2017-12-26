import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {setActiveTab} from "../../redux/action_creaters";

const handleUserClick = Symbol('handleUserClick');

/**
 * Класс отображает вкладку окна игры
 */
class Tab extends React.Component {

    constructor(props) {
        super(props);

        /*Обработчик click события*/
        this.clickHandler = this[handleUserClick].bind(this);
    }

    render() {

        let className = "tab no-select";

        /*Активна ли вкладка*/
        if (this.props.activeTab === this.props.id) {
            className = className + " tab-active";
        }

        return (
            <a href={"javascript:void(0);"} className={className} data-id={this.props.id}
               onClick={this.clickHandler}>{this.props.textContent}</a>
        );
    }

    [handleUserClick]() {

        let id = this.props.id;
        this.props.setActiveTab(id);
    }
}

Tab.propTypes = {
    activeTab: PropTypes.number.isRequired,     // Номер активной вкладки в данный момент
    textContent: PropTypes.string.isRequired,   // Текст внутри вкладки
    id: PropTypes.number,                       // id элемента, кот. открывает вкладка
    setActiveTab: PropTypes.func.isRequired,    // Установить в store номер активной вкладки
};

export default connect(store => {
    return {activeTab: store.activeTab};
}, {setActiveTab})(Tab);
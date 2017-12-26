import React from 'react';
import PropTypes from "prop-types";


/**
 * Класс отображает содержимое вкладки окна игровых рекордов
 */
export default class GameRecordTabContent extends React.Component {

    render() {

        let className = this.props.activeTab === this.props.tabId ? "game-records-tab-content" : "game-records-tab-content no-display";

        return (
            <div className={className}>{this.props.children}</div>
        );
    }
}


GameRecordTabContent.propTypes = {
    tabId: PropTypes.number.isRequired,         // id вкладки
    activeTab: PropTypes.number.isRequired      // номер ативной в данный момент вкладки
};

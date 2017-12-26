import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";

/**
 * Класс отображает содержимое вкладки окна игры
 */
class TabContent extends React.Component {

    render() {

        let className = "tab-content";
        if (this.props.activeTab !== this.props.tabId) {
            className += " no-display";
        }

        return (
            <div className={className}
                 data-role="tab-content"
                 data-tab-id={this.props.tabId}>

                {this.props.children}
            </div>
        );
    }
}


TabContent.propTypes = {
    activeTab: PropTypes.number.isRequired,     // Номер активной вкладки в данный момент
    tabId: PropTypes.number.isRequired,         // Id вкладки, которую отображает данный элемент
};

export default connect(store => {
    return {activeTab: store.activeTab};
})(TabContent);
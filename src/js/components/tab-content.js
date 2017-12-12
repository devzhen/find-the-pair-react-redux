import React from 'react';
import PropTypes from 'prop-types';

export default class TabContent extends React.Component {

    render() {

        let className = "tab-content";
        if (!this.props.active) {
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
    tabId: PropTypes.number.isRequired,     // Id вкладки, которую отображает данный элемент
    active: PropTypes.bool                  // Видимый ли элемент
};

TabContent.defaultProps = {
    tabId: null,
    active: false
};
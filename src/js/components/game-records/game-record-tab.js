import React from 'react';
import PropTypes from "prop-types";

export default class GameRecordTab extends React.Component {

    render() {
        return (
            <a href={"javascript:void(0);"}
               className={this.props.activeTab === this.props.id ? "active" : null}
               data-id={this.props.id}>

                {this.props.textContent}
            </a>
        );
    }
}


GameRecordTab.propTypes = {
    id: PropTypes.number.isRequired,            // id вкладки
    textContent: PropTypes.string.isRequired,   // название вкладки
    activeTab: PropTypes.number.isRequired      // номер ативной в данный момент вкладки
};
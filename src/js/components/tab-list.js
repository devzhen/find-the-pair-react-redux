import React from 'react';

export default class TabList extends React.Component {

    render() {
        return (
            <div className="tab-list">{this.props.children}</div>
        );
    }
};
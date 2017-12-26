import React from 'react';

/**
 * Класс отображает список вкладок окна игры
 */
export default class TabList extends React.Component {

    render() {
        return (
            <div className="tab-list">{this.props.children}</div>
        );
    }
};
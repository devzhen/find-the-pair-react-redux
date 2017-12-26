import React from "react";

/**
 * Класс отображает панель настроек игры
 */
export default class GameConfig extends React.Component {

    render() {

        return (
            <div className="game-config">
                {this.props.children}
            </div>
        );

    }
}
import React from "react";

export default class GameConfig extends React.Component {

    render() {

        return (
            <div className="game-config">
                {this.props.children}
            </div>
        );

    }
}
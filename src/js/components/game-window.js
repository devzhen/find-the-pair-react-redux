import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import TabList from "./game-tabs/tab-list";
import Tab from "./game-tabs/tab";
import TabContent from "./game-tabs/tab-content";
import GameFieldPanel from "./game-field/game-field-panel";
import GameConfig from "./game-config/game-config-panel";
import GameFieldSize from "./game-config/game-field-size";
import GameColorScheme from "./game-config/game-color-scheme";
import GameRecordsPanel from "./game-records/game-records-panel";


/**
 * Класс отображает окно игры
 */
class GameWindow extends React.Component {

    render() {

        return (
            <div className="tabbed-window"
                 style={{
                     width: this.props.width + 'px',
                     height: this.props.height + 'px',
                     backgroundColor: this.props.color
                 }}>

                <TabList>
                    <Tab id={1} textContent="Game"/>
                    <Tab id={2} textContent="Config"/>
                    <Tab id={3} textContent="Records"/>
                </TabList>

                <TabContent tabId={1}>
                    <GameFieldPanel/>
                </TabContent>

                <TabContent tabId={2}>
                    <GameConfig>
                        <GameFieldSize/>
                        <GameColorScheme/>
                    </GameConfig>
                </TabContent>

                <TabContent tabId={3}>
                    <GameRecordsPanel/>
                </TabContent>

            </div>
        );
    }
}


GameWindow.propTypes = {
    color: PropTypes.string.isRequired,     // Цвет окна игры
    width: PropTypes.number.isRequired,     // Ширина окна
    height: PropTypes.number.isRequired     // Высота окна
};

export default connect(store => {
    return {color: store.windowColor};
})(GameWindow);
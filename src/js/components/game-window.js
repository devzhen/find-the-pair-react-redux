import React from 'react';
import PropTypes from 'prop-types';
import TabList from "./tabs/tab-list";
import Tab from "./tabs/tab";
import TabContent from "./tabs/tab-content";
import GameFieldPanel from "./game-field/game-field-panel";
import GameConfig from "./game-config/game-config";
import GameFieldSize from "./game-config/game-field-size";
import GameColorScheme from "./game-config/game-color-scheme";
import store from "../redux/store";
import {Provider} from "react-redux";

export default class GameWindow extends React.Component {

    render() {

        return (
            <Provider store={store}>
                <div className="tabbed-window"
                     style={{width: this.props.width + 'px', height: this.props.height + 'px'}}>

                    <TabList>
                        <Tab id={1} textContent="Game" active/>
                        <Tab id={2} textContent="Config"/>
                        <Tab id={3} textContent="Records"/>
                    </TabList>

                    <TabContent tabId={1} active>
                        <GameFieldPanel/>
                    </TabContent>

                    <TabContent tabId={2}>
                        <GameConfig>
                            <GameFieldSize/>
                            <GameColorScheme/>
                        </GameConfig>
                    </TabContent>

                    <TabContent tabId={3}>Records</TabContent>

                </div>
            </Provider>
        );
    }
}


GameWindow.propTypes = {
    width: PropTypes.number.isRequired,     // Ширина окна
    height: PropTypes.number.isRequired     // Высота окна
};

GameWindow.defaultProps = {
    width: 600,
    height: 400
};
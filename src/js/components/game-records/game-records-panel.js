import React from 'react';
import {FIRST_TAB, FOURTH_TAB, SECOND_TAB, THIRD_TAB} from "../../constants";
import GameRecordTab from "./game-record-tab";
import GameRecordTabContent from "./game-record-tab-content";
import GameRecord from "./game-record";

const handleUserChange = Symbol('handleUserChange');


class GameRecordsPanel extends React.Component {

    constructor(props) {
        super(props);

        this.state = {activeTab: FIRST_TAB};

        /*Обработчик change события*/
        this.clickHandler = this[handleUserChange].bind(this);
    }


    render() {


        return (
            <div className="game-records" onClick={this.clickHandler}>

                <div className="game-records-tab-list">
                    <GameRecordTab id={FIRST_TAB} textContent={"2x2"} activeTab={this.state.activeTab}/>
                    <GameRecordTab id={SECOND_TAB} textContent={"4x4"} activeTab={this.state.activeTab}/>
                    <GameRecordTab id={THIRD_TAB} textContent={"6x6"} activeTab={this.state.activeTab}/>
                    <GameRecordTab id={FOURTH_TAB} textContent={"8x8"} activeTab={this.state.activeTab}/>
                </div>

                <GameRecordTabContent tabId={FIRST_TAB} activeTab={this.state.activeTab}>
                    <GameRecord size={"2x2"}/>
                </GameRecordTabContent>
                <GameRecordTabContent tabId={SECOND_TAB} activeTab={this.state.activeTab}>
                    <GameRecord size={"4x4"}/>
                </GameRecordTabContent>
                <GameRecordTabContent tabId={THIRD_TAB} activeTab={this.state.activeTab}>
                    <GameRecord size={"6x6"}/>
                </GameRecordTabContent>
                <GameRecordTabContent tabId={FOURTH_TAB} activeTab={this.state.activeTab}>
                    <GameRecord size={"8x8"}/>
                </GameRecordTabContent>
            </div>
        );
    }


    /*Обработчик change события*/
    [handleUserChange](e) {

        if (e.target.tagName !== 'A') {
            return;
        }

        this.setState({
            activeTab: parseInt(e.target.getAttribute('data-id'))
        });
    }

}


GameRecordsPanel.propTypes = {};

export default GameRecordsPanel;
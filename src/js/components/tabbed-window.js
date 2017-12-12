import React from 'react';
import PropTypes from 'prop-types';
import TabList from "./tab-list";
import Tab from "./tab";
import TabContent from "./tab-content";

export default class GameWindow extends React.Component {

    render() {

        return (
            <div className="tabbed-window"
                 style={{width: this.props.width + 'px', height: this.props.height + 'px'}}
                 onClick={GameWindow.clickHandler}>

                <TabList>
                    <Tab id={1} textContent="Game" active/>
                    <Tab id={2} textContent="Config"/>
                    <Tab id={3} textContent="Records"/>
                </TabList>

                <TabContent tabId={1} active>Game</TabContent>
                <TabContent tabId={2}>Config</TabContent>
                <TabContent tabId={3}>Records</TabContent>

            </div>
        );
    }


    /**
     * Обработчик click события
     * @param e {Event}
     */
    static clickHandler(e) {

        if (e.target.tagName !== 'A') {
            return;
        }

        /*Id активной вкладки*/
        let activeTabId = null;

        /*Все вкладки в окне*/
        let tabs = e.currentTarget.querySelectorAll('a');

        /*Обход вкладок*/
        for (let i = 0; i < tabs.length; i++) {

            /*Если клик на вкладке*/
            if (tabs[i] === e.target) {

                /*Изменить фон*/
                tabs[i].classList.add('tab-active');

                /*Получиить атрибут id*/
                if (tabs[i].hasAttribute('data-id')) {
                    activeTabId = tabs[i].getAttribute('data-id');
                }
            } else {
                tabs[i].classList.remove('tab-active');
            }
        }

        /*Если Id активной вкладки не определен*/
        if (!activeTabId) {
            return;
        }

        /*Элементы отображающие контент вкладки*/
        let contents = e.currentTarget.querySelectorAll('div[data-role="tab-content"]');

        /*Обход элементов*/
        for (let i = 0; i < contents.length; i++) {
            if (!contents[i].hasAttribute('data-tab-id')) {
                continue;
            }

            /*Определение id вкладки, которую отображает элемент*/
            let tabId = contents[i].getAttribute('data-tab-id');

            /*Скрыть/Показать содержимое*/
            if (tabId === activeTabId) {
                contents[i].classList.remove('no-display');
            } else {
                contents[i].classList.add('no-display');
            }
        }
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
/**
 * Класс отвечающий за взаимодействие с local storage
 */
export default class LocalStorageManager {

    /**
     * Сохранить результат игры в local storage
     * @param name {String}
     * @param value {String}
     */
    static saveGameResult(name, value) {

        let storage = window.localStorage;

        /*Добавление в строку результатат имени игрока*/
        value = name + '#' + value;

        /*Сохранить результат*/
        storage.setItem(name, value);
    }


    /**
     * Получить сохраненные результаты из local storage,
     * но только соотв-ие размеру size.
     * @param size {String}
     */
    static getGameRecordBySize(size) {

        let gameResults = [];

        /*Перебрать объекты local storage*/
        for (let i = 0; i < localStorage.length; i++) {

            let result = localStorage.getItem(localStorage.key(i));

            /*Разбить строку с помощью разделителя #*/
            result = result.split('#');

            /*Сформировать результат игры в виде объекта*/
            let obj = {
                name: result[0],
                size: result[1],
                date: parseFloat(result[2]),
                points: parseFloat(result[3]),
            };

            if (obj.size === size) {
                gameResults.push(obj);
            }

        }

        /*Найти максимальный результат*/
        if (gameResults.length === 0) {
            return null;
        }

        if (gameResults.length === 1) {
            return gameResults[0];
        }

        let record = gameResults[0];

        for (let i = 1; i < gameResults.length; i++) {
            if (gameResults[i].points > record.points) {
                record = gameResults[i];
            }

        }
        return record;
    }
}
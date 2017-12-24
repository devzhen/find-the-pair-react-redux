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
     * Получить сохраненные результаты из local storage
     * @return {Array}. Массив результатов.
     */
    static getAllGameResults() {

        let objects = [];

        /*Перебрать объекты local storage*/
        for (let i = 0; i < localStorage.length; i++) {

            let result = localStorage.getItem(localStorage.key(i));

            /*Разбить строку с помощью разделителя #*/
            result = result.split('#');

            /*Сформировать результат игры в виде объекта*/
            let obj = {
                name: result[0],
                date: parseFloat(result[1]),
                points: parseFloat(result[2]),
            };

            objects.push(obj);
        }

        return objects;
    }


    /**
     * Получить сохраненные результаты из local storage,
     * но только соотв-ие размеру size.
     * @param size {String}
     */
    static getGameResultBySize(size) {

        let objects = [];

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
                objects.push(obj);
            }

        }

        return objects;
    }
}
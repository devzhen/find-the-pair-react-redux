const computeGamePoints = Symbol('computeGamePoints');

/**
 * Класс отображает статистические данные игры
 */
export default class GamePointsManager {

    /**
     * Конструктор
     * @param rows {number}. Кол-во строк игрового поля
     * @param cols {number}. Кол-во столбцов игрового поля
     * @param countAttempts {number}. Кол-во попыток в игре
     * @param time {number}. Затраченное время в секундах
     */
    constructor(rows, cols, countAttempts, time) {

        /*Кол-во строк игрового поля*/
        this.rows = rows;

        /*Кол-во столбцов игрового поля*/
        this.cols = cols;

        /*Размер игрового поля*/
        this.size = this.rows * this.cols;

        /*Кол-во попыток*/
        this.countAttemtps = countAttempts;

        /*Затраченное время в секундах*/
        this.time = time;

        /*Количество очков игры*/
        this.points = 0;
    }


    /**
     * Private method
     * Вичислить кол-во игровых очков.
     */
    [computeGamePoints]() {

        let self = this;

        /*
         * Набор данных для начисления 1000 очков.
         * {
         *      size:           размер игрового поля,
         *      attempts:       кол-во попыток,
         *      time:           затраченное время в секундах,
         *      getValue:       служебная переменная,
         *      points:         количесво очков
         * }
         * */
        let ref_result = {
            size: self.size,
            attempts: function () {
                return self.size / 2;
            },
            time: self.size,
            getValue: function () {
                return this.size * this.attempts() * this.time
            },
            points: 1000
        };

        /*Текущий набор данных*/
        let current_result = {
            size: self.size,
            attempts: self.countAttemtps,
            time: self.time,
            getValue: function () {
                return this.size * this.attempts * this.time
            },
            points: 0
        };

        /*Количество эталонных результатов, которые можно было бы произвести за это время*/
        let diff = current_result.getValue() / ref_result.getValue();

        /*Если текущий результат больше эталонного*/
        if (diff > 0) {

            /*Расчет количества очков игры*/
            current_result.points = (ref_result.points / diff).toFixed(1);

        } else if (diff < 0) {/*Если текущий результат меньше эталонного*/

            /*Расчет количества очков игры*/
            diff = diff * ref_result.points;
            current_result.points = (ref_result.points + ref_result.points - diff).toFixed(1);

        }

        if (current_result.points < 1) {
            current_result.points = 1;
        }

        /*Количество очков игры*/
        self.points = current_result.points;
        ref_result = null;
        current_result = null;
    }


    /**
     * Получить строку, отображающую результат игры
     * @return {string}
     */
    getGameResult() {

        /*Вичислить кол-во игровых очков.*/
        this[computeGamePoints]();

        /*Размер игрового поля*/
        let size = this.rows + 'x' + this.cols;

        /*Дата*/
        let date = new Date().getTime();

        /*Игровые очки*/
        let gamePoints = this.points;

        return `${size}#${date}#${gamePoints}`;

    }
}
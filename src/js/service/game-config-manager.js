/**
 * Класс предоставляет методы для получения объекта настроек игры
 */
export default class GameConfigManager {

    /**
     * Static method
     * Создать объект отображающий настройки игры
     * @param images {Array}. Массив с путями к изображениям
     * @param gameFieldSize {String}. Размер игрового поля
     * @returns {Object}
     */
    static createGameConfig(images, gameFieldSize) {

        let gameConfig = {
            id: new Date().getTime(),
        };

        switch (gameFieldSize) {
            case "2x2":
                gameConfig.rows = 2;
                gameConfig.cols = 2;
                break;
            case "4x4":
                gameConfig.rows = 4;
                gameConfig.cols = 4;
                break;
            case "6x6":
                gameConfig.rows = 6;
                gameConfig.cols = 6;
                break;
            case "8x8":
                gameConfig.rows = 8;
                gameConfig.cols = 8;
                break;
        }

        /*Создать пары изображений и добавить в объект настроек игры.*/
        gameConfig = GameConfigManager.createImagePairs(gameConfig, images);
        gameConfig = GameConfigManager.mixImagePairs(gameConfig);

        return gameConfig;
    }


    /**
     * Создать пары изображений и добавить в объект настроек игры.
     * @param config {Object}. Объект настроек игры.
     * @param images {Array}. Массив с путями к изображениям
     * @returns {Object}
     */
    static createImagePairs(config, images) {

        config.images = [];

        for (let i = 0; i < config.rows; i++) {

            config.images[i] = [];

            for (let j = 0; j < config.cols; j = j + 2) {

                /*Получить случайное изображение*/
                let image = GameConfigManager.getRandomImage(images);

                config.images[i][j] = image;
                config.images[i][j + 1] = image;
            }
        }

        return config;
    }


    /**
     * Перемешать пары изображений.
     * @param config {Object}. Объект настроек игры.
     * @returns {Object}
     */
    static mixImagePairs(config){

        for (let i = 0; i < config.images.length; i++) {
            for (let j = 0; j < config.images[i].length; j++) {

                let _i = Math.floor(Math.random() * config.images.length);
                let _j = Math.floor(Math.random() * config.images[i].length);

                let temp = config.images[i][j];
                config.images[i][j] = config.images[_i][_j];
                config.images[_i][_j] = temp;
            }
        }

        return config;
    }


    /**
     * Получить случайное изображение
     * @param images {Array}. Массив с путями к изображениям
     * @returns {string}
     */
    static getRandomImage(images) {

        let index = Math.floor(Math.random() * images.length);

        return images[index];
    }
}
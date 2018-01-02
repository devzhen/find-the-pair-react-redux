import {CHANGE_GAME_FIELD_SIZE, NEW_GAME} from "../../constants";
import GameConfigManager from "../../service/game-config-manager";

let images = [
    './img/bridge.jpg',
    './img/bug.jpg',
    './img/cat.jpg',
    './img/clock.jpg',
    './img/dog.jpg',
    './img/eye.jpg',
    './img/face.jpg',
    './img/giraffe.jpg',
    './img/horse.jpg',
    './img/moto.jpg',
    './img/shoes.jpg',
    './img/teeth.jpg',
];

/*Настройки игры по умолчанию*/
let defaultConfig = GameConfigManager.createGameConfig(images, '2x2');


export default function gameConfig(gameConfig = defaultConfig, action) {

    if (action.type === NEW_GAME) {

        /*Текущий объект с настройками игры*/
        let gameConfig = Object.assign({}, action.payload.config);

        gameConfig.id = new Date().getTime();

        /*Создать пары изображений*/
        gameConfig = GameConfigManager.createImagePairs(gameConfig, images);

        /*Проверка, что массив пар изображений не содержит все однаковые изображения*/
        while(GameConfigManager.isDuplicateImages(gameConfig)) {
            gameConfig = GameConfigManager.createImagePairs(gameConfig, images);
        }

        /*Перемешать пары изображений*/
        gameConfig = GameConfigManager.mixImagePairs(gameConfig);

        return gameConfig;
    }

    if (action.type === CHANGE_GAME_FIELD_SIZE) {

        let size = action.payload.size;

        switch (size) {
            case "4x4":
                return GameConfigManager.createGameConfig(images, '4x4');
            case "6x6":
                return GameConfigManager.createGameConfig(images, '6x6');
            case "8x8":
                return GameConfigManager.createGameConfig(images, '8x8');
            default:
                return GameConfigManager.createGameConfig(images, '2x2');
        }
    }

    return gameConfig;
}
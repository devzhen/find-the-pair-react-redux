import {START_GAME} from "../../constants";


export default (config = new GameConfig(), action) => {

    if (action.type === START_GAME) {

        return new GameConfig();
    }

    return config;
}

function GameConfig() {

    let images = [
        "../img/bridge.jpg",
        "../img/cat.jpg",
        "../img/dog.jpg",
        "../img/horse.jpg",
        "../img/moto.jpg",
        "../img/shoes.jpg",
    ];

    let config = {
        rows: 4,
        cols: 4,
    };

    config.images = mixImage(images);

    return config;
}

function mixImage(images) {

    for (let i = 0; i < images.length; i++) {

        let index = Math.floor(Math.random() * images.length);
        if (index === i) {
            continue;
        }

        let temp = images[i];
        images[i] = images[index];
        images[index] = temp;
    }

    return images;
}
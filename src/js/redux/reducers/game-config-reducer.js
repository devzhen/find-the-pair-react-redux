import {CHANGE_GAME_FIELD_SIZE, NEW_GAME} from "../../constants";

let config_2x2 = {
    id: new Date().getTime(),
    rows: 2,
    cols: 2,
    images: [
        [
            "../img/bridge.jpg",
            "../img/bridge.jpg",
        ],
        [
            "../img/horse.jpg",
            "../img/horse.jpg",
        ],
    ]
};

let config_4x4 = {
    id: new Date().getTime(),
    rows: 4,
    cols: 4,
    images: [
        [
            "../img/bridge.jpg",
            "../img/bridge.jpg",
            "../img/cat.jpg",
            "../img/cat.jpg",
        ],
        [
            "../img/dog.jpg",
            "../img/dog.jpg",
            "../img/horse.jpg",
            "../img/horse.jpg",
        ],
        [
            "../img/moto.jpg",
            "../img/moto.jpg",
            "../img/shoes.jpg",
            "../img/shoes.jpg"
        ],
        [
            "../img/bridge.jpg",
            "../img/bridge.jpg",
            "../img/cat.jpg",
            "../img/cat.jpg",
        ]
    ]
};

let config_6x6 = {
    id: new Date().getTime(),
    rows: 6,
    cols: 6,
    images: [
        [
            "../img/bridge.jpg",
            "../img/bridge.jpg",
            "../img/cat.jpg",
            "../img/cat.jpg",
            "../img/giraffe.jpg",
            "../img/giraffe.jpg",
        ],
        [
            "../img/dog.jpg",
            "../img/dog.jpg",
            "../img/clock.jpg",
            "../img/clock.jpg",
            "../img/horse.jpg",
            "../img/horse.jpg",
        ],
        [
            "../img/moto.jpg",
            "../img/moto.jpg",
            "../img/face.jpg",
            "../img/face.jpg",
            "../img/shoes.jpg",
            "../img/shoes.jpg",
        ],
        [
            "../img/bridge.jpg",
            "../img/bridge.jpg",
            "../img/shoes.jpg",
            "../img/shoes.jpg",
            "../img/cat.jpg",
            "../img/cat.jpg",
        ],
        [
            "../img/giraffe.jpg",
            "../img/giraffe.jpg",
            "../img/clock.jpg",
            "../img/clock.jpg",
            "../img/eye.jpg",
            "../img/eye.jpg",
        ],
        [
            "../img/face.jpg",
            "../img/face.jpg",
            "../img/teeth.jpg",
            "../img/teeth.jpg",
            "../img/bug.jpg",
            "../img/bug.jpg",
        ]
    ]
};

let config_8x8 = {
    id: new Date().getTime(),
    rows: 8,
    cols: 8,
    images: [
        [
            "../img/bridge.jpg",
            "../img/bridge.jpg",
            "../img/cat.jpg",
            "../img/cat.jpg",
            "../img/giraffe.jpg",
            "../img/giraffe.jpg",
            "../img/clock.jpg",
            "../img/clock.jpg",
        ],
        [
            "../img/dog.jpg",
            "../img/dog.jpg",
            "../img/clock.jpg",
            "../img/clock.jpg",
            "../img/cat.jpg",
            "../img/cat.jpg",
            "../img/horse.jpg",
            "../img/horse.jpg",
        ],
        [
            "../img/moto.jpg",
            "../img/moto.jpg",
            "../img/face.jpg",
            "../img/face.jpg",
            "../img/bridge.jpg",
            "../img/bridge.jpg",
            "../img/shoes.jpg",
            "../img/shoes.jpg",
        ],
        [
            "../img/bridge.jpg",
            "../img/bridge.jpg",
            "../img/shoes.jpg",
            "../img/shoes.jpg",
            "../img/bridge.jpg",
            "../img/bridge.jpg",
            "../img/cat.jpg",
            "../img/cat.jpg",
        ],
        [
            "../img/giraffe.jpg",
            "../img/giraffe.jpg",
            "../img/clock.jpg",
            "../img/clock.jpg",
            "../img/shoes.jpg",
            "../img/shoes.jpg",
            "../img/eye.jpg",
            "../img/eye.jpg",
        ],
        [
            "../img/face.jpg",
            "../img/face.jpg",
            "../img/teeth.jpg",
            "../img/teeth.jpg",
            "../img/bug.jpg",
            "../img/bug.jpg",
            "../img/shoes.jpg",
            "../img/shoes.jpg",
        ],
        [
            "../img/bridge.jpg",
            "../img/bridge.jpg",
            "../img/shoes.jpg",
            "../img/shoes.jpg",
            "../img/bridge.jpg",
            "../img/bridge.jpg",
            "../img/cat.jpg",
            "../img/cat.jpg",
        ],
        [
            "../img/giraffe.jpg",
            "../img/giraffe.jpg",
            "../img/clock.jpg",
            "../img/clock.jpg",
            "../img/shoes.jpg",
            "../img/shoes.jpg",
            "../img/eye.jpg",
            "../img/eye.jpg",
        ],
    ]
};


function mixImages(config) {

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


export default function gameConfig(gameConfig = config_2x2, action) {

    if (action.type === NEW_GAME) {

        let config = {
            id: new Date().getTime(),
            rows: gameConfig.rows,
            cols: gameConfig.cols,
            images: gameConfig.images,
        };
        mixImages(config);
        return config;
    }

    if (action.type === CHANGE_GAME_FIELD_SIZE) {

        let config = null;

        let size = action.payload.size;

        switch (size) {
            case "4x4":
                config = Object.assign({}, config_4x4);
                config.id = new Date().getTime();
                return mixImages(config);
            case "6x6":
                config = Object.assign({}, config_6x6);
                config.id = new Date().getTime();
                return mixImages(config);
            case "8x8":
                config = Object.assign({}, config_8x8);
                config.id = new Date().getTime();
                return mixImages(config);
            default:
                config = Object.assign({}, config_2x2);
                config.id = new Date().getTime();
                return mixImages(config);
        }
    }

    return gameConfig;
}
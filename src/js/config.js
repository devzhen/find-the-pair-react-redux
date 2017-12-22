let config = {
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

export default mixImages(config);
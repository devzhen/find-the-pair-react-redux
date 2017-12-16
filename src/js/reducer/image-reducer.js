import {GET_IMAGES} from "../constants";


function getImages() {
    return [
        "../img/bridge.jpg",
        "../img/cat.jpg",
        "../img/dog.jpg",
        "../img/horse.jpg",
        "../img/moto.jpg",
        "../img/shoes.jpg",
    ];

}

export default (images = [], action) => {

    if (action.type === GET_IMAGES) {
        return getImages();
    }

    return getImages();
};
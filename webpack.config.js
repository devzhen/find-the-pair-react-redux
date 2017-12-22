const DEV_MODE = true;
console.log('DEVELOPMENT MODE - ' + DEV_MODE);

let config = {
    entry: [
        // "babel-polyfill",
        "./src/js/index.js",
    ],
    // devtool: ENV === "dev" ? "source-map" : false,
    output: {
        path: __dirname + "/dist/js",
        filename: DEV_MODE ? 'find-the-pair.js' : 'find-the-pair.min.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            }
        ]
    },
    plugins: []
};

if (DEV_MODE) {

} else {

}

module.exports = config;
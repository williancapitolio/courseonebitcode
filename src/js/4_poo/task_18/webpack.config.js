const path = require("path");

module.exports = {
    devServer: {
        static: {
            directory: path.resolve(__dirname, "public")
        },
        compress: true,
        port: 8000
    },
    entry: {
        index: "./src/index.js"
    },
    mode: "production",
    output: {
        path: path.resolve(__dirname, "public"),
        filename: "script.bundle.min.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: "babel-loader"
            }
        ]
    }
};

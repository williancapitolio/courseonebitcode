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
        index: "./src/index.js",
        hello: "./src/helloWorld.js"
    },
    mode: "production",
    output: {
        path: path.resolve(__dirname, "public"),
        filename: "[name].bundle.min.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: "babel-loader"
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            }
        ],
    }
};

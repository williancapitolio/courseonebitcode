const path = require("path");

module.exports = {
    entry: {
        main: "./src/index.js",
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
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            ["@babel/preset-env", { targets: "defaults" }]
                        ]
                    }
                }
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            }
        ],
    }
};

module.exports = {
    entry: {
        index: "./src/index.js"
    },
    mode: "production",
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
        ],
    },
};

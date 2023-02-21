const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const CopyWebpackPlugin = require("copy-webpack-plugin");

// vue.config.js
module.exports = {
    publicPath: './',
    configureWebpack: {
        plugins: [
            new CopyWebpackPlugin({
                patterns: [{
                    from: "./src/media",
                    to: 'media'
                }]
            })
        ]
    }
}
var webpack = require('webpack');
var path = require('path');

// Build foler
var BUILD_DIR = path.resolve(__dirname, 'wp-content/themes/tuankhoa/public');

// Source code folder
var APP_DIR = path.resolve(__dirname, 'wp-content/themes/tuankhoa/src');

module.exports = {
    entry: APP_DIR + '/index.js',
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                include: APP_DIR,
                use: [
                    'babel-loader',
                ],
            },
        ],
    }
};
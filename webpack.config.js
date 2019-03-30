"use strict";

const path = require('path');

module.exports = {
    mode: 'none',
    entry: path.resolve(__dirname, 'src', 'index.js'),
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname,'./dist')
    },

    devServer: {
        contentBase: path.resolve(__dirname), // index.html not needed to specify?
        // this is a URL and always have a forward slash. can use single or double dots for URLs
        publicPath: '/dist'
    }


};
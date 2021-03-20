const { merge } = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf');
const path = require('path');
const miniCss = require('mini-css-extract-plugin');
const webpack = require('webpack');

const devWebpackConfig = merge(baseWebpackConfig, {
    mode: 'development',

    output: {
        filename: 'script.js',
    },

    devtool: false,

    module: {
        rules: [{
            test: /\.(s*)css$/,
            use: [
                miniCss.loader,
                {
                    loader: 'css-loader',
                    options: {
                        sourceMap: true,
                        url: false
                    }
                },
                {
                    loader: 'resolve-url-loader',
                },
                {
                    loader: 'sass-loader',
                    options: {sourceMap: true}
                },
            ],
        }]
    },

    devServer: {
        overlay: {
            warnings: true,
            errors: true
        },
        port: 8081,
    },

    plugins: [
        new miniCss({
            filename: 'style.css',
        }),
        new webpack.SourceMapDevToolPlugin({
            filename: '[file].map',
        })
    ]
});

module.exports = new Promise((resolve, reject) => {
    resolve(devWebpackConfig);
});
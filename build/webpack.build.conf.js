const { merge } = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf');
const path = require('path');
const miniCss = require('mini-css-extract-plugin');

const buildWebpackConfig = merge(baseWebpackConfig, {
    mode: 'production',

    output: {
        filename: 'script.[contenthash].js',
    },

    module: {
        rules: [{
            test: /\.(s*)css$/,
            use: [
                miniCss.loader,
                'css-loader',
                'postcss-loader',
                'sass-loader',
            ],
        }],
    },

    plugins: [
        new miniCss({
            filename: 'style.[contenthash].css',
        }),
    ]
});

module.exports = new Promise((resolve, reject) => {
    resolve(buildWebpackConfig);
})
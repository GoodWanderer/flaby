const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const PATH = {
    src: path.join(__dirname, './../src'),
    dist: path.join(__dirname, /../ + __dirname.split('\\').slice(-2, -1).toString()),
};

console.log(
    path.resolve(__dirname+'/../'+ __dirname.split('\\').slice(-2, -1).toString())
)

module.exports = {
    entry: './src/js/script.js',

    output: {
        path: path.resolve(__dirname+'/../'+ __dirname.split('\\').slice(-2, -1).toString())
    },

    module: {
        rules: [
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: 'img/'
                },
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: 'fonts/'
                },
            },
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: `${PATH.src}/index.html`,
            inject: 'body',
            minify: false
        }),
        new CopyWebpackPlugin({
            patterns: [
                { from: `${PATH.src}/img`, to: `${PATH.dist}/img`, noErrorOnMissing: true},
                { from: `${PATH.src}/fonts`, to: `${PATH.dist}/fonts`, noErrorOnMissing: true},
            ]
        }),
        new CleanWebpackPlugin(),
    ]
};
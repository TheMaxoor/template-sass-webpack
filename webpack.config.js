const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const fs = require('fs');

const debug = process.env.NODE_ENV !== 'production';
const pagesPath = './src/partials/pages/';
const htmlPlugins = [];

const pages = fs.readdirSync(pagesPath);

pages.forEach(file => {
    htmlPlugins.push(
        new HtmlWebpackPlugin({
            filename: file.slice(0, -5),
            template: pagesPath + file
        })
    );
});

module.exports = {
    mode: debug ? 'development' : 'production',
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                sourceMap: debug
            }),
            new OptimizeCSSAssetsPlugin({})
        ]
    },
    entry: {
        app: ['./src/js/index.js', './src/sass/main.scss']
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'web')
    },
    resolve: {
        alias: {
            jquery: path.join(__dirname, 'node_modules/jquery/src/jquery')
        }
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './web'
    },
    plugins: [
        new CleanWebpackPlugin(['web']),
        ...htmlPlugins,
        new CopyWebpackPlugin([{
            from: './src/img',
            to: './img'
        }]),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: debug ? '[name].css' : '[name].[hash].css',
            chunkFilename: debug ? '[id].css' : '[id].[hash].css'
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        })
    ],
    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    debug ? 'style-loader' : MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(twig)$/,
                loader: 'twig-loader'
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 10000,
                        mimetype: 'application/font-woff'
                    }
                }]
            },
            {
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                use: [{
                    loader: 'file-loader'
                }]
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                use: [
                    'url-loader?limit=10000',
                    'img-loader'
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader',
                    'eslint-loader'
                ]
            }
        ]
    }
};

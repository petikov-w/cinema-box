const webpack = require('webpack');
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const Dotenv = require('dotenv-webpack')


const production = process.env.NODE_ENV === 'production';


module.exports = {
    entry: { CinemaApp: path.resolve(__dirname, "./src/index.js") },
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: production ? '[name].[contenthash].js' : '[name].js',
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ["babel-loader"],
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    production ? MiniCssExtractPlugin.loader : 'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            sourceMap: !production
                        }
                    }
                ]
            },
            {
                test: /\.(png|svg|jpg|webp|jpeg)$/i,
                type: 'asset/resource',
            },

        ],
    },
    resolve: {
        extensions: [".*", ".js", ".jsx"],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Webpack & React",
            template: "./src/index.html",
            // favicon: "./src/favicon.ico"
        }),
        new MiniCssExtractPlugin({
            filename: production ? '[name].[contenthash].css' : '[name].css',
        }),
        new Dotenv({
            path: './.env.local', // Path to .env file (this is the default)
            systemvars: true,
        }),
    ],
    devServer: {
        port: 3001,
        historyApiFallback: true,
        // contentBase: './',
    },


    mode: production ? 'production' : 'development'
};
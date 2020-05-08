const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require('webpack');
const dotenv = require('dotenv');
const path = require('path');

// call dotenv and it will return an Object with a parsed key 
const env = dotenv.config().parsed;

// reduce it to a nice object, the same as before
const envKeys = Object.keys(env).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(env[next]);
    return prev;
}, {});

module.exports = {
    entry: './src/index.tsx',
    devtool: 'inline-source-map',
    mode: 'development',
    devServer: {
        historyApiFallback: true,
        publicPath: '/',
        contentBase: './dist',
        hot: true,
        port: 8082
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "babel-loader",
                    }
                ],
            },
            {
                test: /\.ts(x?)$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            /*
                        {
                            test: /\.css$/,
                            use: [
                                {
                                    loader: 'css-loader'
                                }
                            ]
                        },
            */
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            }, {
                test: /\.s?css$/,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-modules-typescript-loader" },
                    { loader: "css-loader", options: { modules: true } },
                    { loader: "sass-loader" },
                ]
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                loader: 'url-loader'
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            favicon: './public/favicon.ico',
            hash: true
        }),
        new webpack.DefinePlugin(envKeys)
    ],
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.css', '.scss'],
        alias: {
            react: path.resolve('./node_modules/react'),
            'react-redux': path.resolve('./node_modules/react-redux'),
            '@material-ui': path.resolve("./node_modules/@material-ui")
        }
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
};
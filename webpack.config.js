const webpack = require('webpack');

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    context: __dirname,
    entry: [
        'babel-polyfill',
        './client/index'
    ],
    output: {
        path: __dirname + '/public/build/',
        publicPath: 'build/',
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
        ],
    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.js$/,
                loader: 'eslint-loader',
                include: [/client/],
                exclude: [/node_modules/, /public/]
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query:
                    {
                        presets:['env', 'stage-0', 'react']
                    },
                exclude: [/node_modules/, /public/]
            },
            {
                test: /\.jsx$/,
                loader: 'babel-loader',
                query:
                    {
                        presets:['env', 'stage-0', 'react']
                    },
                exclude: [/node_modules/, /public/]
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            },
            {test: /\.css$/, loader: 'style-loader!css-loader'},
            {
                test: /\.less$/,
                exclude: [/node_modules/, /public/],
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1
                        }
                    },
                    {
                        loader: 'postcss-loader'
                    },
                    {
                        loader: 'less-loader'
                    }
                ]
            },
            {
                test: /\.gif$/,
                loader: 'url-loader?limit=10000&mimetype=image/gif'
            },
            {
                test: /\.jpg$/,
                loader: 'url-loader?limit=10000&mimetype=image/jpg'
            },
            {
                test: /\.png$/,
                loader: 'url-loader?limit=10000&mimetype=image/png'
            },
            {
                test: /\.svg/,
                loader: 'url-loader?limit=26000&mimetype=image/svg+xml'
            }
        ]
    },
    devServer: {
        historyApiFallback: true,
        hot: true
    }
};
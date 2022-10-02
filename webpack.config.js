const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        index: path.resolve(__dirname, 'src/index.js'),
        starwars: path.resolve(__dirname, 'src/starwars/starwars.js'),
    },
    mode: 'development',
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist'),
        },
        port: 3000,
        open: true,
        hot: true,
        compress: true,
        historyApiFallback: true,
    },
    
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Star-Wars-D3',
            filename: 'index.html',
            template: 'src/template.html'
        }),
      ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].js',
        assetModuleFilename: '[name].[ext]',
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ],
    },
    optimization: {
        runtimeChunk: 'single',
      },
};
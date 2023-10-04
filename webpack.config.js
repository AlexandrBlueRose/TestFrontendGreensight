const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        filename: path.resolve(__dirname, './src/index.js')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name][contenthash].js',
        assetModuleFilename: '[name][ext]',
        clean: true
    },
    performance: {
        hints: false,
        maxAssetSize: 1000000,
        maxEntrypointSize: 1000000 
    },
    devServer: {
        port: 9000,
        compress: true,
        hot: true,
        static:{
            directory: path.join(__dirname, 'dist')
        }

    },
    module: {
        rules:[
        {
            test: /\.scss$/,
            use: ['style-loader', 'css-loader','sass-loader']
        },
        {
            test: /\.(png|jpg|jpeg|svg|gif)$/i,
            type: 'asset/resource'
        }
    ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'List of vacancies',
            filename: 'index.html',
            template: './src/index.html'
        })
    ]
}

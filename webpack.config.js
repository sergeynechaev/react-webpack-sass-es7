var path = require('path');
var copyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    // context: path.join(__dirname, 'src'),
    entry: {
        javascript: "./src/scripts/index.js",
        html: "./src/index.html"
    },
    output: {
        path: path.join(__dirname, 'build'),
        filename: "assets/bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.html$/,
                loader: "file?name=[name].[ext]"
            },
            {
                test: /\.scss$/,
                loader: "style!css!sass"
            },
            {
                test: /\.js(x?)$/,
                exclude: /node_modules/,
                loaders: ["react-hot", "babel"]
            },
            {
                test: /\.(mp3|wave)$/,
                loader:'file'
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', 'jsx', '.sass', '.scss', '.css']
    },
    devServer: {
        contentBase: path.join(__dirname, 'build'),
        //noInfo: true,         // suppress webpack output into console
        hot: true,
        inline: true,
        historyApiFallback: true
    },
    plugins: [
        new copyWebpackPlugin([
            { from: './src/static', to: 'static' },
            { from: './src/vendor', to: 'assets/vendor' }
        ])
    ]
};


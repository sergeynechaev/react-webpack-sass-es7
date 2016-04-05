var path = require('path');

module.exports = {
    // context: path.join(__dirname, 'src'),
    entry: [
        "./src/App/index.js"
    ],
    output: {
        path: path.join(__dirname, 'build'),
        filename: "assets/bundle.js"
    },
    module: {
        loaders: [
            { test: /\.html$/, loader: "raw" },
            { test: /\.scss$/, loader: "style!css!sass" },
            {
                test: /\.js(x?)$/,
                loader: 'react-hot',
                exclude: /node_modules/
            },
            {
                test: /\.js(x?)$/,
                loader: 'babel',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', 'jsx', '.json', '.sass', '.scss', '.css']
    },
    devServer: {
        contentBase: path.join(__dirname, 'build'),
        //noInfo: true,         // suppress webpack output into console
        hot: true,
        inline: true,
        historyApiFallback: true
    }
};


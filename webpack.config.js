var path = require('path');

var APP_DIR = __dirname;
var DEV_DIR = path.resolve(APP_DIR, 'app');
var BUILD_DIR = path.resolve(APP_DIR, 'public');

var config = {
    entry: DEV_DIR + '/scripts/app.jsx',
    output: {
        path: BUILD_DIR + '/scripts',
        filename: 'app.js'
    },
    devServer: {
        inline: false,
        hot: false,
        contentBase: APP_DIR,
        port: '2020'
    },
    module: {
        loaders: [{
            test: /\.jsx?/,
            include: DEV_DIR,
            loader: 'babel',
            query: {
                presets: ['react', 'es2015']
            }
        }, {
            test: /\.css$/,
            include: DEV_DIR,
            loader: 'style-loader!css-loader'
        }]
    }
};

module.exports = config;

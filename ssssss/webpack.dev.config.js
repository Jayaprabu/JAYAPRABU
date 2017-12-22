var webpack = require('webpack');
var { Config } = require('webpack-config');
var path = require("path");



var mainConfig = new Config().extend("webpack.config");
//mainConfig.module.rules = [];

mainConfig.module.rules = [];

var devConfigExtension = {
    entry:{
        app:[
            'webpack-dev-server/client?http://localhost:8080',
            'webpack/hot/only-dev-server',
        ]
    },
    output:{
        filename: '[name].js',
        publicPath:'http://localhost:8080'
    },
    devtool: 'eval-source-map',
    module:{
        rules: [{
            test: /\.tsx?$/,
            loaders: [ "ts-loader"]
        }]
       /* loaders:[{
            test:/\.tsx?$/,
            loader:"ts-loader",
            exclude:/node_modules/
        }] */
    },
      plugins: [
    // Used for hot-reload
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      DEBUG: true
    })
  ]
};

module.exports = mainConfig.merge(devConfigExtension);
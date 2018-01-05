var path = require("path");
var webpack = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var config = {
    entry: {
        app: [
            path.join(__dirname, 'App', 'Index.tsx')
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.less', '.css'],
        modules: ["node_modules", "resources"],
    },
    output: {
        path: path.join(__dirname, 'build'),
        filename: '[name]_[chunkhash].js'
    },
    module:{
        rules: [
            // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
            { test: /\.tsx?$/, loader: 'ts-loader' },
            { test: /\.css$/,  loaders: ["style-loader", "css-loader?minimize"] },
            { test: /\.less$/,  exclude: /\.module\.less$/, loaders: ["style-loader",  "css-loader?minimize", "less-loader?compress"] },
            {test: /\.module\.less$/, loaders: ["style-loader", "css-loader?minimize&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]", "less-loader?-compress"]
            },{
                test: /\.(jpg|png|woff|eot|ttf|svg|gif)$/,
                loader: "file-loader?name=[name]_[hash].[ext]"
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({ name: 'vendors', filename: 'vendors_[hash].js' }),
        new HtmlWebpackPlugin({
        template: 'index.html'
        })
    ]
};

module.exports = config;
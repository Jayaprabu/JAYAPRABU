var path = require('path');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.dev.config');

var compiler = webpack(config);

var server = new WebpackDevServer(compiler,{
    hot: true,
    noInfo: false,
    publicPath: config.output.publicPath,
    stats:{
        colors:true,
        version: true,
        hash: true
    }
});

server.listen(8080, 'localhost', function (err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log("Listening at http://localhost:8080. Please wait, I'm building things for you...");
});


/**
 * 
 * {
    "compilerOptions":{
        "jsx": "react",
        "module": "commonjs",
        "noImplicitAny": true,
        "outDir": "./build/",
        "preserveConstEnums": true,
        "removeComments": true,
        "target": "es6" ,
        "lib":["es2015","dom"],
        "sourceMap": true,
        "experimentalDecorators": true,
        "moduleResolution": "node",
        "typeRoots": [
            "Models", "typings", "node_modules/@types"
        ]
    },
    "exclude":["node_modules"]
}
 */
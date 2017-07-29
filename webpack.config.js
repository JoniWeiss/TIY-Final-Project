var debug = process.env.NODE_ENV !== "production";
var path = require("path");
var webpack = require('webpack');

var DIST_DIR = path.resolve(__dirname, "dist");
var SRC_DIR = path.resolve(__dirname, "src");

module.exports = {
  entry: SRC_DIR + "/app/index.js",
  output: {
    path: DIST_DIR + "/app",
    filename: "bundle.js",
    publicPath: "/app/"
  },
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        loader: "source-map-loader"
      }
    ],
    loaders: [
      {
        test: /\.js?/,
        include: SRC_DIR,
        loader: "babel-loader",
        query: {
           presets: ['react', 'es2015']
        }
      },
      {
        test: /\.css$/,
        loader: "style!css"
      },
      {
        test: /\.sass$/,
        loaders: ["style", "css", "sass"]
      },
      {
        test: /\.scss$/,
        loaders: ["style", "css", "sass"]
      },
      {
        test: /\.(jpe?g|png|gif|svg)(\?v=\d+\.\d+\.\d+)?$/i,
        loader: 'file-loader?name=[path][name].[ext]?[hash:10]',
         exclude: /(node_modules|bower_components)/
      },
      {
        test:
        /\.gif$/,
        loader:
        "url-loader?mimetype=image/png"
      },
      {
        test:
        /\.woff(2)?(\?v=[0-9].[0-9].[0-9])?$/,
        loader:
        "url-loader?mimetype=application/font-woff"
      },
      {
        test:
        /\.(ttf|eot|svg)(\?v=[0-9].[0-9].[0-9])?$/,
        loader:
        "file-loader?name=[name].[ext]"
      },
      {
        test: /\.json$/,
        loader: "json"
      }
    ]
  },
  plugins: debug ? [] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(true),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    })
  ]
};

const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const packageConfig = require('./package.json');

const paths = {
  ROOT: path.resolve(__dirname),
  DIST: path.resolve(__dirname, 'dist'),
  SRC: path.resolve(__dirname, 'src'),
};

const development = process.env.NODE_ENV === 'development';
const publicPath = '/';

const processEnvPlugin = new webpack.DefinePlugin({
  'process.env': {
    NODE_ENV: JSON.stringify(process.env.NODE_ENV),
    SERVER: JSON.stringify(process.env.SERVER),
    VERSION: JSON.stringify(packageConfig.version),
  },
});

module.exports = {
  entry: {
    bundle: path.join(paths.SRC, 'index.js'),
  },
  output: {
    filename: 'bundle.js',
    path: paths.DIST,
    publicPath,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.(jpg|jpeg|gif|png)$/,
        exclude: /node_modules/,
        loader: 'url-loader?limit=1024&name=./assets/img/[name]-[hash].[ext]',
      },
      {
        test: /\.(eot|ttf|woff|woff2|otf|svg)$/,
        exclude: [/node_modules/, /img/],
        loader: 'url-loader?limit=1024&name=./fonts/[name]-[hash].[ext]',
      },
      {
        test: /\.svg$/,
        exclude: /fonts/,
        loader: 'file-loader',
        options: {
          name: './assets/img/[name]-[hash].[ext]',
        },
      },
    ],
  },
  resolve: {
    // Enable importing JS files without specifying their's extension
    extensions: ['.js', '.jsx'],
    alias: {
      // JS alias
      '@Common': path.resolve(__dirname, './src/common/'),
      '@Config': path.resolve(__dirname, './src/config/'),
      '@Grid': path.resolve(__dirname, './src/grid/'),
      // Style alias
      theme: path.resolve(__dirname, './src/styles/themes'),
      application: path.resolve(__dirname, './src/application'),
      config: path.resolve(__dirname, './src/common/styles/config'),
    },
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true,
      }),
    ],
  },
  plugins: [processEnvPlugin],
  devServer: {
    // noInfo: true,
    // HTML5 router
    historyApiFallback: true,
    disableHostCheck: true,
    hot: false,
    // Auto refresh
    inline: false,
  },
  mode: process.env.NODE_ENV,
  devtool: development && 'source-map',
};

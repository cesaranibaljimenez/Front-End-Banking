const { override, addWebpackModuleRule, addWebpackPlugin } = require('customize-cra');
const webpack = require('webpack');

module.exports = override(
  addWebpackModuleRule({
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  }),
  addWebpackModuleRule({
    test: /\.css$/,
    use: ['style-loader', 'css-loader'],
  }),
  addWebpackModuleRule({
    test: /\.html$/,
    use: ['html-loader'],
  }),
  addWebpackPlugin(
    new webpack.ProvidePlugin({
      process: 'process/browser',
    })
  ),
  (config) => {
    config.resolve = {
      ...config.resolve,
      fallback: {
        "fs": false,
        "path": require.resolve("path-browserify"),
        "util": require.resolve("util/"),
        "os": false, // Desactiva el módulo 'os' en el fallback
        "url": require.resolve("url/"), // Agrega el polyfill para el módulo 'url'
        "child_process": false, // Desactiva el módulo 'child_process' en el fallback
        "crypto": require.resolve("crypto-browserify"),
        "stream": false,
        "constants": require.resolve("constants-browserify"),
        "timers": require.resolve("timers-browserify"),
        "http": false,
        "https": require.resolve("https-browserify"),
        "zlib": require.resolve("zlib-browserify")
      }
    };
    config.plugins.push(
        new webpack.DefinePlugin({
          process: {},
        })
      );
    return config;
  }

);

const path = require('path');
const NodemonPlugin = require('nodemon-webpack-plugin');

module.exports = {
  target: 'node',
  mode: 'development',
  entry: './src/server.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  node: {
    global: true,
    __filename: true,
    __dirname: true,
  },

  resolve: {
    extensions: ['.ts', '.js'],
  },

  plugins: [new NodemonPlugin()],
};

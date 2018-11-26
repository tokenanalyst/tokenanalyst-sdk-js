const path = require('path');

module.exports = {
  entry: './lib/index.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  output: {
    filename: 'bundle.js',
    library: 'ta',
    libraryTarget: 'var',
    path: path.resolve(__dirname, 'dist-web')
  }
};


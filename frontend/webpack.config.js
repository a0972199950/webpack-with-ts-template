const path = require('path')

module.exports = {
  entry: {
    first: './src/first.ts',
    second: './src/second.ts',
    vue: './src/vue.ts'
  },

  output: {
    filename: '[name].js',
    path: path.join(__dirname, '../dist')
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },

      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
        exclude: /node_modules/
      }
    ],
  },

  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  }
}
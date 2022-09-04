module.exports = {
  module: {
    rules: [
      {
        test: /\.m?jsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  }
};

module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|ts)$/,
        use: {
          loader: 'babel-loader',
          options: {
            // presets: ['@babel/preset-env'],
            plugins: ['babel-plugin-istanbul']
          }
        },
        enforce: 'post',
        include: require('path').join(__dirname, '..', 'src/app'),
        exclude: [
          /\.cy-spec.ts$/,
          /\.cy-noninstr-spec.ts$/,
          /models/,
          /node_modules/,
          /(ngfactory|ngstyle)\.js/
        ]
      }
    ]
  }
};

module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|ts)$/,
        loader: 'istanbul-instrumenter-loader',
        options: { esModules: true },
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

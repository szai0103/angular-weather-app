const cypressTypeScriptPreprocessor = require('./cy-ts-preprocessor');
const browserify = require('@cypress/browserify-preprocessor')
const options = browserify.defaultOptions;
options.browserifyOptions.transform[1][1].babelrc = true;

module.exports = (on, config) => {
  on('file:preprocessor', cypressTypeScriptPreprocessor, browserify({
    ...options,
    typescript: require.resolve('typescript')
  }));
  on('task', require('cypress-istanbul/task'));
  return config;
};

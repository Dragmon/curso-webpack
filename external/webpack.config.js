const path = require('path');

module.exports = {
  // __dirname se basa en el directorio actual, este cambiara dependiendo de donde se encuentre el archivo
  // webpack.config.js
  entry:path.resolve(__dirname, 'index.js'),
  output:{
    path: path.resolve(__dirname, 'dist'),
    filename:'bundle.js'
  }
}

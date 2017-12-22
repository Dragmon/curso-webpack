const path = require('path');

module.exports = {
  // __dirname se basa en el directorio actual, este cambiara dependiendo de donde se encuentre el archivo
  // webpack.config.js
  entry:path.resolve(__dirname, 'index.js'),
  output:{
    path: path.resolve(__dirname, 'dist'),
    filename:'bundle.js'
  },
  module:{
    rules:[
      //Aquí van los loader
      {
        //test: tipo de archivo a reconocer (usando expreciones regualares),
        //use: que loader se va a encargara del archuivo
        test: /\.css$/,
        use:['style-loader', 'css-loader'],
      }
    ]
  }
}

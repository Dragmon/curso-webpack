const path = require('path');
const extractTextPlugin = require ('extract-text-webpack-plugin');

module.exports = {
  // __dirname se basa en el directorio actual, este cambiara dependiendo de donde se encuentre el archivo
  // webpack.config.js
  entry:{
    home: path.resolve(__dirname, 'src/js/index.js'),
    precios: path.resolve(__dirname, 'src/js/precios.js'),
    contactos: path.resolve(__dirname, 'src/js/contactos.js')
  },
  output:{
    path: path.resolve(__dirname, 'dist'),
    filename:'js/[name].js'
  },
  module:{
    rules:[
      //Aquí van los loader
      {
        //test: tipo de archivo a reconocer (usando expreciones regualares),
        //use: que loader se va a encargara del archuivo
        test: /\.css$/,
        use:extractTextPlugin.extract({
          //['style-loader', 'css-loader']
          use:"css-loader"
        }),
      }
    ]
  },
  plugins:[
    //plugins instalados
    new extractTextPlugin("css/[name].css")
  ]
}

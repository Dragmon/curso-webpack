const path = require('path');
const extractTextPlugin = require ('extract-text-webpack-plugin');

module.exports = {
  // __dirname se basa en el directorio actual, este cambiara dependiendo de donde se encuentre el archivo
  // webpack.config.js
  entry:path.resolve(__dirname, 'src/js/index.js'),
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
        test: /\.js$/,
        use:{
          loader: 'babel-loader',
          options:{
            presets: ['es2015']
          }
        }
      },
      {
        test: /\.(jpg|png|gif|woff|eot|ttf|svg)$/,
        use:[
          {
            loader: 'url-loader',
            options: {
              limit:120000
            }
          }
        ]
      },
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

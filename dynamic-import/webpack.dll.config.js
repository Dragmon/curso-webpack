const path = require('path');
const extractTextPlugin = require ('extract-text-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  // __dirname se basa en el directorio actual, este cambiara dependiendo de donde se encuentre el archivo
  // webpack.config.js
  entry:{
    modules:[
      'react',
      'react-dom'
    ],
  },
  output:{
    path: path.resolve(__dirname, 'dist'),
    filename:'[name].js',
    library: '[name]' //nombre con el cual se va a identificar el archivo para ser usado de manera global
  },
  plugins:[
    //plugins instalados
    //new extractTextPlugin("css/[name].css"),
    //new webpack.optimize.CommonsChunkPlugin({
    //  name: 'vendor',
    //  minChunks: Infinity
    //})
    new webpack.DllPlugin({
      name: "[name]", //nombre a exportar para usar como referencia en otros archivos
      path: path.join(__dirname, "[name]-manifest.json")
    })
  ]
}

const path = require('path');
const extractTextPlugin = require ('extract-text-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  // __dirname se basa en el directorio actual, este cambiara dependiendo de donde se encuentre el archivo
  // webpack.config.js
  entry:{
    //vendor:[
    //  'react',
    //  'react-dom'
    //],
    home:path.resolve(__dirname, 'src/js/index.js'),
    contact:path.resolve(__dirname, 'src/js/contact.js'),
  },
  output:{
    path: path.resolve(__dirname, 'dist'),
    filename:'[name].js',
    publicPath: path.resolve(__dirname, 'dist')+"/",
    chunkFilename: 'js/[id].[chunkhash].js'
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
            presets: ['es2015', 'react'],
            plugins: ['syntax-dynamic-import']
          }
        }
      },
      {
        test: /\.json$/,
        use:'json-loader',
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
    new extractTextPlugin("css/[name].css"),
    //new webpack.optimize.CommonsChunkPlugin({
    //  name: 'vendor',
    //  minChunks: Infinity
    //})
    new webpack.DllReferencePlugin({
      manifest: require('./modules-manifest.json')
    })
  ]
}

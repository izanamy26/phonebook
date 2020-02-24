var path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin'); // плагин для загрузки кода Vue
 
module.exports = {
 entry: './src/main.js',
 devServer: {
    historyApiFallback: true
  },
 output: {
   path: path.resolve(__dirname, './dist'),
   publicPath: '/dist/',
   filename: 'build.js'
 },
 module: {
   rules: [
     {
       test: /\.vue$/,
       use: ['vue-loader'],
      }, {
      test: /\.css$/,
        use: [
          'vue-style-loader',
          "css-loader"
        ]
    },
    {
      test: /\.(jpe?g|png|gif|svg)$/i,
      use: [
        {
          loader: 'file-loader',
          options: {
            emitFile: true,
            esModule: false,
            name: 'images/[name]-[sha512:hash:base64:12].[ext]'
          }
        }
      ]
    }
  ]
 },
 plugins: [
    new VueLoaderPlugin()
   ]
}
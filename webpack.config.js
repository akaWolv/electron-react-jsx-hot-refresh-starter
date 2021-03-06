var  webpack = require('webpack');

module.exports = {
  entry: {
  app: ['webpack/hot/dev-server',  './src/js/app.js'],
},
output: {
    path:  './public/built',
    filename:  'bundle.js',
    publicPath:  'http://localhost:8080/built/'
  },
  devServer: {
    contentBase:  './public',
    publicPath:  'http://localhost:8080/built/',
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    }
  },
  module: {
    loaders: [
      { test: /\.js|\.jsx$/, exclude: /node_modules/, loader: "babel", query: {presets:['react','es2015']}},
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.less$/, loader: 'style-loader!css-loader!less-loader'}
    ]
  },
  plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.IgnorePlugin(new RegExp("^(fs|ipc)$"))
  ]
}

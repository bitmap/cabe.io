const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

function resolve(dir) {
  return path.join(__dirname, dir)
}

const mode = process.env.NODE_ENV

module.exports = {
  mode,

  devServer: {
    port: 1337,
    open: 'Google Chrome',
    historyApiFallback: true,
    overlay: true
  },

  module: {
    rules: [{
      test: /\.vue$/,
      use: 'vue-loader'
    },
    {
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader'
      }
    },
    {
      test: /\.scss$/,
      use: [
        'vue-style-loader',
        { loader: 'css-loader', options: { importLoaders: 2 } },
        'postcss-loader',
        'sass-loader',
      ]
    },
    {
      test: /\.otf$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 50000,
        },
      },
    },
    ]
  },

  resolve: {
    alias: {
      vue: mode === 'development' ? 'vue/dist/vue.js' : 'vue/dist/vue.min.js',
      styles: resolve('src/styles/'),
      components: resolve('src/components/')
    }
  },

  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: resolve('src/index.html'),
    }),
    new CopyWebpackPlugin([{
      from: resolve('src/static'),
      to: resolve('dist/static'),
      toType: 'dir'
    }])
  ]
}

const path = require('path');
// 必须有 webpack.HotModuleReplacementPlugin 才能完全启用 HMR,
// 如果 webpack 或 webpack-dev-server 是通过 --hot 选项启动的，
// 那么这个插件会被自动添加, 反之需要手动添加HMR插件, 在plugins节点下创建HMR对象即可
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');



module.exports = {
  mode: 'development',

  entry: './main.js', //指定入口, 相对路径和绝对路径均可
  output: {
    path: path.join(__dirname, "./dist"), //指定出口目录, 必须是绝对路径, 相对路径会报错
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.join(__dirname, 'src'), //托管根路径为SRC
    compress: false, //启动Gzip压缩
    port: 5005, //更换端口号为3000
    hot: true, //启动热模块 插件   需要
    open: true, //开启自动打开
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(), //添加热更新插件
    new HtmlWebpackPlugin({ // 用于帮助我们自动生成HTML文件的
      template: 'src/index.html',
      filename: 'index.html' // 默认值就是index.html, 便于开发人员自己查看

    })
  ],
  module: {
    rules: [{
        test: /\.css$/,
        use: [{
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          }
        ]
      },
      {
        test: /\.less$/,
        use: [{
          loader: "style-loader" // creates style nodes from JS strings
        }, {
          loader: "css-loader" // translates CSS into CommonJS
        }, {
          loader: "less-loader" // compiles Less to CSS
        }]
      },
      { //如果是使用url-loader 要同时安装 url-loader和file-loader
        test: /\.(png|jpg|gif|jepg)$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 8192
          }
        }]
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        use: ['url-loader']
      }
    ]
  }

};
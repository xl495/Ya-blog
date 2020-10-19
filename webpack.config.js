const path = require('path');
let MiniCssExtractPlugin = require('mini-css-extract-plugin'); // 抽离css的插件
module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
          },
          {
            loader: 'resolve-url-loader', //因为scss-loader没有重写url的功能，所以必须安装这个
          },
          {
            loader: 'sass-loader', // 将 Sass 编译成 CSS
            options: { sourceMap: true }, //必须要写
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'main.css', //打包后的css文件
    }),
  ],
};

const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './js/index.js',
  output: {
    path: path.resolve(__dirname, 'public', 'dist'),
    filename: 'index.bundle.js',
    publicPath: '/'
  },
  mode: process.env.WEBPACK_SERVE ? 'development' : 'production',
  plugins: [
    // これがないとStringを返す関数を定義した際にエラーが発生する
    // 関連？: https://github.com/rustwasm/wasm-bindgen/issues/50
    // Stringを使うとwasmのファイルが大きくなるためWebpackが処理できなくなるのが原因かもしれない
    // 設定はこれを参考にした
    // https://github.com/rustwasm/wasm_game_of_life/blob/52bb4987f3582bf215175606f6ccf710279913d3/webpack.config.js
    new CopyWebpackPlugin(['public/index.html'])
  ],
};
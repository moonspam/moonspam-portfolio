const path = require('path');
const webpack = require('webpack');

const sourcePath = './src/';
const outputPath = './dist/';

const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlBeautifyPlugin = require('html-beautify-webpack-plugin');

// 사이트 기본 정보 입력
const siteInfo = {
  author: 'moonspam',
  title: '문포트폴리오',
  description: '문성영 포트폴리오 사이트',
  keywords: '문성영,포트폴리오,사이트,Portfolio,moonspam',
  og: {
    locale: 'ko_KR',
    url: 'http://moonspam.me/',
    type: 'website',
    img: {
      url: 'http://moonspam.me/',
      type: 'image/jpeg',
      width: '1280',
      height: '720',
      alt: 'alternate text',
    },
  },
  html: [
    'index',
  ],
};

// Webpack 플러그인
const plugins = [
  new CleanWebpackPlugin([outputPath]),
  new ExtractTextPlugin('./css/styles.css'),
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false,
    },
  }),
];

// siteInfo.html 값의 개수에 따라 HtmlWebpackPlugin 생성
const htmlList = siteInfo.html.map(file => (
  new HtmlWebpackPlugin({
    template: `./${file}.html`,
    filename: `${file}.html`,
    hash: true,
    inject: 'body',
    chunks: ['app'],
  })
));

// HtmlWebpackPlugin 확장 플러그인
const htmlPlugins = [
  new HtmlBeautifyPlugin({
    config: {
      html: {
        indent_size: 2,
        end_with_newline: true,
        preserve_newlines: true,
        unformatted: ['p', 'i', 'b', 'span'],
      },
    },
    replace: [
      { test: '@@_title', with: siteInfo.title },
      { test: '@@_description', with: siteInfo.description },
      { test: '@@_keywords', with: siteInfo.description },
      { test: '@@_author', with: siteInfo.author },
      { test: '@@_og_locale', with: siteInfo.og.locale },
      { test: '@@_og_url', with: siteInfo.og.url },
      { test: '@@_og_type', with: siteInfo.og.type },
      { test: '@@_og_img_url', with: siteInfo.og.img.url },
      { test: '@@_og_img_type', with: siteInfo.og.img.type },
      { test: '@@_og_img_width', with: siteInfo.og.img.width },
      { test: '@@_og_img_height', with: siteInfo.og.img.height },
      { test: '@@_og_img_alt', with: siteInfo.og.img.alt },
    ],
  }),
];

const config = {
  context: path.resolve(__dirname, sourcePath),
  entry: {
    app: ['./css/style.scss', './js/ui.js'],
  },
  output: {
    filename: './js/[name].bundle.js',
    path: path.resolve(__dirname, outputPath),
  },
  externals: {
    jquery: 'jQuery',
  },
  devServer: {
    open: true,
    contentBase: path.resolve(__dirname, outputPath),
    watchContentBase: true,
    inline: true,
  },
  devtool: process.env.NODE_ENV === 'development' ? 'source-map' : false,
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          use: [{
            loader: 'css-loader',
            options: {
              minimize: true,
            },
          }, {
            loader: 'sass-loader',
          }],
          fallback: 'style-loader',
          publicPath: '../',
        }),
      },
      {
        test: /\.(jpe?g|png|gif)$/,
        exclude: /node_modules/,
        loader: 'file-loader',
        options: {
          name: () => {
            if (process.env.NODE_ENV === 'development') {
              return '[path][name].[ext]';
            }
            return '[hash].[ext]';
          },
          outputPath: './img/',
        },
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['babel-preset-env'],
        },
      },
    ],
  },
  plugins: plugins.concat(htmlList).concat(htmlPlugins),
};

module.exports = config;

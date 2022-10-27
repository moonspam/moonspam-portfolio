const path = require('path');

const sourcePath = './src/';
const outputPath = './dist/';

const VueLoaderPlugin = require('vue-loader/lib/plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlBeautifyPlugin = require('@nurminen/html-beautify-webpack-plugin');
const HtmlMinimizerPlugin = require('html-minimizer-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

// 사이트 기본 정보 입력
const siteInfo = {
  author: 'moonspam',
  title: '문포트폴리오',
  description: '문성영 포트폴리오 사이트',
  keywords: '문성영,포트폴리오,사이트,Portfolio,moonspam',
  og: {
    locale: 'ko_KR',
    url: 'http://moonspam.com/',
    type: 'website',
    img: {
      url: 'http://moonspam.com/',
      type: 'image/jpeg',
      width: '1280',
      height: '720',
      alt: 'Moon Portfolio',
    },
  },
  html: [
    'index',
    '404',
  ],
};

module.exports = (env, argv) => {
  // Webpack 플러그인
  const plugins = [
    new ESLintPlugin(),
    new CleanWebpackPlugin({
      protectWebpackAssets: false,
    }),
    new MiniCssExtractPlugin({
      filename: 'css/style.css',
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, sourcePath, 'favicon.ico'),
          to: path.resolve(__dirname, outputPath, 'favicon.ico'),
        },
      ],
    }),
    new VueLoaderPlugin(),
  ];

  // siteInfo .html 값의 개수에 따라 HtmlWebpackPlugin 생성
  const htmlList = siteInfo.html.map((file) => (
    new HtmlWebpackPlugin({
      template: `./${file}.html`,
      filename: `${file}.html`,
      hash: true,
      inject: 'body',
      chunks: 'all',
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

  console.log('\n********************************************************************************');
  console.log(`🚀 Build Mode: ${argv.mode}`);
  console.log('********************************************************************************\n');

  return {
    context: path.resolve(__dirname, sourcePath),
    entry: {
      app: ['./css/style.scss', './js/ui.js'],
    },
    output: {
      filename: 'js/[name].bundle.js',
      path: path.resolve(__dirname, outputPath),
      publicPath: '/',
    },
    target: ['web', 'es5'],
    resolve: {
      alias: {
        vue$: 'vue/dist/vue.esm.js',
      },
      extensions: ['*', '.js', '.vue', '.json'],
    },
    devServer: {
      static: {
        directory: path.resolve(__dirname, sourcePath),
        watch: true,
      },
      open: true,
    },
    stats: {
      preset: 'errors-only',
      builtAt: true,
      timings: true,
      version: true,
    },
    mode: argv.mode === 'development' ? 'development' : 'production',
    devtool: argv.mode === 'development' ? 'source-map' : false,
    optimization: {
      splitChunks: {
        cacheGroups: {
          commons: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendor',
            chunks: 'all',
          },
        },
      },
      minimize: argv.mode === 'production',
      minimizer: [
        new TerserPlugin({
          extractComments: false,
        }),
        new HtmlMinimizerPlugin(),
      ],
    },
    performance: {
      hints: argv.mode === 'production' ? 'warning' : false,
    },
    module: {
      rules: [
        {
          test: /\.vue$/,
          loader: 'vue-loader',
        },
        {
          test: /\.(sa|sc|c)ss$/,
          use: [
            argv.mode === 'development' ? 'style-loader'
              : {
                loader: MiniCssExtractPlugin.loader,
                options: {
                  publicPath: '/',
                },
              },
            'css-loader',
            {
              loader: 'sass-loader',
              options: {
                // eslint-disable-next-line global-require
                implementation: require('sass'),
              },
            },
          ],
        },
        {
          test: /\.(gif|png|jpe?g)$/,
          include: /img/,
          type: 'asset/resource',
          generator: {
            filename: argv.mode === 'development' ? '[path][name][ext]' : '[path][name][ext]?[hash]',
          },
        },
        {
          test: /\.m?js$/,
          exclude: /node_modules(?!\/axios)/,
          loader: 'babel-loader',
          options: {
            configFile: './.babelrc',
          },
        },
      ],
    },
    plugins: plugins.concat(htmlList).concat(htmlPlugins),
  };
};

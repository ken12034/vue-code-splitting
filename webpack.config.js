const path = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const webpack = require('webpack');

const VueLoaderPlugin = require("vue-loader/lib/plugin");

const ExtractTextPlugin = require("extract-text-webpack-plugin");

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
 
module.exports = {
  mode: "development",
  entry: {
    app: [
      "babel-polyfill",
      './src/index.ts',
    ],
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: './[name].bundle.js',
    chunkFilename: '../dist/js/[name].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.tsx$/,
        enforce: "pre",
        use: [
          {
            loader: "tslint-loader",
            options: { /* Loader options go here */

              configuration: {
                rules: {
                  quotemark: [true, "double"],
                },
              },

            },
          },
        ],
      },
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        exclude: /node_modules/,
        options: {
          appendTsxSuffixTo: [/\.tsx\.vue$/],
          transpileOnly: true,
          experimentalWatchApi: true,
        },
      },
      {
        test: /\.vue$/,
        loader: "vue-loader",
        options: {
          url: false,
          postLoaders: {
            html: "babel-loader",
          },
          publicPath: "./src/",
        },
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
        include: __dirname,
        exclude: file => (
          /node_modules/.test(file) &&
          !/\.vue\.js/.test(file)
        ),
      },
      {
        test:  /.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        use: [
          {
            loader:  "url-loader",
            options: {
              limit: 2048,
              name: "[name].[ext]",
              outputPath:  "../dist/fonts",
            },
          },
        ],
      },

      {
        test: /\.(jpe?g|png|gif)$/i,
        use: [{
          loader: "url-loader",
          options: {
            limit: 2048,
            name: "[name].[ext]",
            outputPath: "../dist/img",
          },
        }],
      },
      {
        test:  /\.(css|sass|scss)$/,
        loader: ExtractTextPlugin.extract({
          use: [
            {
              loader: "css-loader",
              options: {
                modules: true,
                sourceMap: true,
                importLoaders: 1,
                modules: {
                  context: path.resolve(__dirname, 'src'),
                  localIdentName: "[name]__[local]___[hash:base64:5]",
                },
              },
            },
            {
              loader: "postcss-loader",
              options: {
                config: {
                  path: __dirname + "/postcss.config.js",
                },
              },
            },
            {
              loader: "sass-loader",
              options: {
                sourceMap: true,
              },
            },
            "style-loader",
          ],
          fallback: "style-loader",

        }),

      },

    ],
  },
  resolve: {
    modules: [path.resolve(__dirname, "./src"), "node_modules"],
    extensions: [".ts", ".js", ".vue", "scss"],
    alias: {
      "@src": path.resolve(__dirname, "./src"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@layout": path.resolve(__dirname, "./src/layout"),
      "@scss": path.resolve(__dirname, "./src/scss"),
      vue: 'vue/dist/vue.js'
    }
  },
  optimization: {
    splitChunks: {
      chunks: 'all',

    }
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new CleanWebpackPlugin(),
    new VueLoaderPlugin(),
    new ExtractTextPlugin({
      allChunks: true,
      filename: "../dist/css/main.css",
    }),

  ],

};

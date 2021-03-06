// __dirname:代表当前文件夹所在目录的绝对路径  C:\Users\y\Desktop\vueComponent2
const HtmlWeboackPlugin = require("html-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const path = require("path");
// import  from 'http-'

module.exports = {
  // 配置对象

  //入口
  entry: {
    app: path.resolve(__dirname, "src/index.js"),
  },
  // 出口
  output: {
    filename: "static/js/[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: '/' // 引入的打包文件的左侧以 / 开头
  },
  // 模块加载器
  module: {
    rules: [
      //处理es6 转es5
      {
        test: /\.js$/, // 匹配文件
        //exclude: /(node_modules|bower_components)/,
        include: path.resolve(__dirname, "src"),
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              [
                "@babel/preset-env",
                {
                  useBuiltIns: "usage",
                  corejs: 2, // 处理一些新语法的实现
                },
              ],
            ],
            plugins: [
              [
                "component",
                {
                  libraryName: "mint-ui",
                  style: true,
                },
              ],
            ],
          },
        },
      },
      //处理vue
      {
        test: /\.vue$/,
        include: path.resolve(__dirname, "src"),
        loader: "vue-loader",
      },
      // 处理css
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"], // 多个loader从右到左处理
      },
      //处理图片
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: "url-loader",
        options: {
          limit: 10 * 1024,
          name: "static/img/[name].[hash:7].[ext]", // 相对于output.path
        },
      },
    ],
  },
  // 插件
  plugins: [
    new HtmlWeboackPlugin({
      template: "index.html", //以那个页面作为模板页面处理(根目录找)
      filename: "index.html",
    }),
    new VueLoaderPlugin(),
  ],

  // 开发服务器
  devServer: {
    open: true, // 自动打开浏览器
    quiet: true, // 不做太多日志输出
    proxy: {
      "/api": {
        target: "http://localhost:4000",
        pathRewrite: { "^/api": "" },
      },
      changeOrigin: true, // 支持跨域
    },
    historyApiFallback: true  // 任意404的响应都会被替代为index.html
  },
  // 配置开启source-map调试
  devtool: "cheap-module-eval-source-map",
  // 引入模块的解析
  resolve: {
    extensions: [".js", ".vue", ".json"], // 可以省略的后缀名
    alias: {
      // 路径别名(简写方式)
      vue$: "vue/dist/vue.esm.js", // 表示精准匹配
      "@": path.resolve(__dirname, "src"),
    },
  },
};

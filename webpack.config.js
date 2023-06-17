const HtmlWebpackPlugin = require('html-webpack-plugin')//生成HTML插件
const path = require('path')//路径模块
const MiniCssExtractPlugin = require("mini-css-extract-plugin")//抽离css
const WebpackBar = require('webpackbar');


// //设置出口文件
module.exports = {
    resolve:{
        alias:{
            "@":path.resolve(__dirname,"./src"),
        },
    },
    // 出口文件配置
    externals:{
        jQuery:"jQuery",
        lodash:"_",

    },
    // oninput:{
    //     //设置文件路径
    //     path:path.resolve(__dirname,'dist'),
    //     // 清理多余文件
    //     clear :true,
    // },
    // // 配置路径解析规则
    // resolve:{

    // },
    //配置外部依赖项
    //配置webpack-dev-server服务器,设置代理
   
    // 配置 Webpack-dev-server 服务器
    devServer: {
        // 启动服务器自动打开默认浏览器
        open: true,

        // 配置前端请求代理，将匹配到的请求转发到指定地址
        proxy: {
            // 在开发环境下面代理的目标是 http://127.0.0.1:3000
            // 在生产环境下面代理的目标是 http://api.cc0820.top:3000

            "^/api": {
                target:
                    process.env.NODE_ENV === "development"
                        ? "http://127.0.0.1:3000"
                        : process.env.NODE_ENV === "production"
                            ? "http://api.cc0820.top:3000"
                            : "",

                pathRewrite: { "/api": "" },
            },
            "^/api1": {
                target: "http://127.0.0.1:3001",
                pathRewrite: { "/api1": "" },
            },
        },

        // 配置客户端
        client: {
            // 禁用错误提示蒙版
            overlay: false,
        },
    },
    // 配置插件
    plugins:[
        new HtmlWebpackPlugin({
            // 指定生成文件
            template:'./public/index.html',
            title:'1234',

        }),
       new MiniCssExtractPlugin(),
       new WebpackBar()
    ],
    module: {
        rules: [
            // 解析txt文件
            {
                test: /\.txt$/,
                type: 'asset/source',
            },

            // 解析 png|jpe?g|gif 格式图片并输出到images文件夹内
            {
                test: /\.(png|jpe?g|gif)$/i, // 图片的格式
                type: 'asset/resource', // 载入资源
                generator: { // 输出格式
                    filename: './images/[contenthash:8][ext]'
                }
            },

            // 解析css文件
            {
                test: /\.css$/i, // 匹配所有.css文件
                use: [
                    MiniCssExtractPlugin.loader, // 使用MiniCssExtractPlugin.loader提取CSS为独立文件
                    'css-loader', // 处理CSS文件
                    "postcss-loader",
                ],
            },

            // 解析less文件
            {
                test: /\.less$/i, // 匹配所有.css文件
                use: [
                    MiniCssExtractPlugin.loader, // 使用MiniCssExtractPlugin.loader提取CSS为独立文件
                    'css-loader', // 处理CSS文件
                    "postcss-loader",
                  
                ],
            },


            // 导入字体图标/自定义字体
            {
                test: /\.(woff|woff2|eot|ttf|otf|svg)$/i, // 字体的格式
                type: 'asset/resource', // 载入资源
                generator: { // 输出格式
                    filename: './icon/[contenthash:8][ext]'
                }
            },
        ],
    },
}
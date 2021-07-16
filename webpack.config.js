const path = require("path");
const HtmlPlugin = require("html-webpack-plugin"); //Đóng gói file html
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin'); // Phân biệt file viết hoa
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); //Đóng gói file css
//const {BundleAnalyzerPlugin} =require("webpack-bundle-analyzer"); //Sau khi bundle sẽ hiển thị thống kê file (mb)

module.exports = {
    mode: 'development',
    entry:{
        bundle:{
            import:'./src/index.js',
        },
    },
    output:{
        path:path.join(__dirname,'/dist'),
        filename:'[name].[hash:6].js',
    },
    devServer:{
        port:3000,
        inline:true,
        watchContentBase:true,
    },
    module:{
        rules:[
            {
                enforce:'pre',
                test:/\.(js|jsx)$/,
                exclude: /node_modules/,
                use:'eslint-loader',
            },
            {
                test:/\.(js|jsx)$/,
                exclude: /node_modules/,
                use:'babel-loader',
            },
            {
                test:/\.css$/i,
                use:[
                    MiniCssExtractPlugin.loader,
                    "css-loader"
                ]
            }
        ],
    },
    plugins:[
        new HtmlPlugin({
            template:'index.html'
        }),
        new CaseSensitivePathsPlugin(),
        new MiniCssExtractPlugin()
    ]
}
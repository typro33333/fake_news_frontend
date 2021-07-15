const path = require("path");
const HtmlPlugin = require("html-webpack-plugin");
module.exports = {
    entry:"./src/index.js",
    output:{
        path:path.join(__dirname,'/dist'),
        filename:'index_bundle.js'
    },
    devServer:{
        port:3000,
        inline:true,
        watchContentBase:true,
    },
    module:{
        rules:[
            {
                test:/\.(js|jsx)$/,
                use:'babel-loader',
                exclude:'/node_modules/'
            },
            {
                test:/\.css$/i,
                use:[
                    "style-loader",
                    "css-loader"
                ]
            }
        ],
    },
    plugins:[
        new HtmlPlugin({
            template:'index.html'
        })
    ]
}
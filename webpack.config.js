const HtmlPlugin = require('html-webpack-plugin')
const copyPlugin = require('copy-webpack-plugin')
const path = require('path')
module.exports = {
    // 시작점
    entry:'./js/main.js',

    // 결과물을 반환하는 path 설정  {} -> 객체 설정
    output: {
/*         path:path.resolve(__dirname,'dist'),
        filename:'main.js', */
        clean:true
    },
    //module
    module:{
        rules:[
            {
                // scss, css
                test:/\.s?css$/,
                use:[
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test:/\.js$/,
                exclude:/node_modules/,
                use:['babel-loader']
            }
        ]
    },
    plugins:[
        new HtmlPlugin({
            template:'./index.html'
        }),
        new copyPlugin(
            {patterns:[
                {from:'static'}
            ]
            
        })
    ]
    //plugins
}
const path = require('path')
const htmlPlugin = require('html-webpack-plugin')
const copyPlugin = require('copy-webpack-plugin')
module.exports = {
    // 시작점을 잡아야 하는 애
    entry:'./js/main.js',

    // 결과물을 반환하는 패스 설정(디렉토리)
    output:{
                //두개는 안써도 dist에 main.js가 default 값
      /*path:path.resolve(__dirname,'dist'), 

        filename:'main.js' */
        clean:true
    },

    // module 설정
    module:{
        rules:[
            {
                //scss, css
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
        new htmlPlugin({
            template:'./index.html'
        }),
        new copyPlugin(
            {patterns:[
            {from:'static'}
        ]}
    )
    ]

    // plugins
}
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtract = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");
 
module.exports = {
 
    mode: 'development',

    output: {
        clean: true
    },

    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: 'html-loader',
                options: {
                    sources: false,
                    minimize:false,
                    
                },
            },
            {
                test: /\.css$/i,//este codigo sirve para usar las dependencias instaladas CSS
                exclude: /styles.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /styles.css$/, //busca el archivo styles.css
                use: [MiniCssExtract.loader, 'css-loader']
            },
            {
                test: /\.(png|jpe?g|gif)$/,
                loader: 'file-loader'
            }
        ],
    },


    plugins: [
        new HtmlWebPackPlugin({
            title: 'Hola',
             template: './src/index.html',
             filename: './index.html',
          
        }),

        new MiniCssExtract({
            filename: '[name].css',
            ignoreOrder: false,
        }),

        new CopyPlugin({//copia archivos
            patterns:[
                {from: 'src/assets/', to: 'assets/'}//desde y donde
            ]
        })
    ]
 
 
}
const { merge } = require('webpack-merge')

const commonConfig = require('./webpack.common')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const packageJson = require('../package.json')


const devConfig = {
    mode: 'development',
    devServer: {
        port: 8083,
        historyApiFallback: {
            index: '/index.html'
        }
    },
    output: {
        publicPath: 'http://localhost:8083/'
    },
    plugins: [
    new ModuleFederationPlugin({
        name: 'dashboard',
        filename: 'remoteEntry.js',
        exposes: {
            './DashBoardApp': './src/bootstrap.js'
        },
        shared: packageJson.dependencies
    })
]
}



module.exports = merge(commonConfig, devConfig)
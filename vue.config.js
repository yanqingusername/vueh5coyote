const { postcss } = require('./src/config/pxtorem')
module.exports = {
    outputDir:"dist",
    css: {
        loaderOptions: {
            postcss: {
                plugins: [
                    postcss
                ]
            }
        }
    },
    lintOnSave: false,
    devServer: {
        proxy: {
            '/storemanage': {
                // target: 'http://ygldev.coyotebio-lab.com',
                target: 'http://ygldev.coyotebio-lab.com:8040',
                changeOrigin: true,
                pathRewrite:{
                    '^/storemanage': '/storemanage'
                }
            },
        }
    }
}
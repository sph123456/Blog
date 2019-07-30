module.exports = {
    devServer: {
        proxy: {
            '/api': {
                port:8081,
                //要访问的跨域的域名
                target: 'http://127.0.0.1:8081',
                ws: true,
                changOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
}
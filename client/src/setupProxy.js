const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = (app) => {
    app.use(
      createProxyMiddleware(
        ['/auth/naver'],
        {
          target: process.env.REACT_APP_SERVER_API_END_POINT,
          changeOrigin: true
        }
      )
    );
}
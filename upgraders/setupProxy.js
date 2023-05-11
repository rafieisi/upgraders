const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.post(
    '/graphql',
    createProxyMiddleware({
      target: 'http://127.0.0.1:8080/graphql',
      changeOrigin: true,
    })
  );
};
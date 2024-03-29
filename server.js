const next = require('next');
const express = require('express');
const dev = process.env.NODE_ENV !== 'production';
const app = next({dev});
const handle = app.getRequestHandler();
const loaders = require('./api/loaders');

app.prepare().then(() => {
  const server = express();
  loaders({expressApp: server});

  server.get('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(process.env.PORT || 3000, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${process.env.PORT}`);
  });
});

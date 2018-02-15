/*!
 * http.js - HTTP for pluginName
 * Copyright (c) 2018, Nodari Chkuaselidze (MIT License).
 */

'use strict';
const {Server} = require('bweb');

/**
 * HTTP server
 */
class PluginNameHTTP extends Server {
  constructor(options) {
    super(options);

    this.logger = this.options.logger.context('plugin-http');

    this.init();
  }

  init() {
    this.on('request', (req, res) => {
      this.logger.debug('Request for method=%s path=%s (%s).',
        req.method, req.pathname, req.socket.remoteAddress);
    });

    this.initRouter();
  }

  initRouter() {
    this.use(this.router());

    this.get('/hello', async (req, res) => {
      res.json(200, {
        pluginPurpose: 'example'
      });
    });
  }
}

/*
 * Expose
 */

module.exports = PluginNameHTTP;

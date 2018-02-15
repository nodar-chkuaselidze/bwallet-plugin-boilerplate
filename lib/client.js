/*!
 * client.js - Client for plugin
 * Copyright (c) 2018, Nodari Chkuaselidze (MIT License).
 */

'use strict';

const {WalletClient} = require('bclient');

// You can extend client from bcurl.Client
//
// or from {NodeClient, WalletClient} of `bclient`
// if you want to extend Wallet or Client Node capabilities.
class PluginNameClient extends WalletClient {
  constructor(options) {
    super(options);

    this.path = '/pluginName';
  }

  /**
   * Get Hello
   * @async
   * @returns {Promise}
   */

  getHello() {
    return this.get('/hello');
  }
}

/*
 * Expose
 */

module.exports = PluginNameClient;

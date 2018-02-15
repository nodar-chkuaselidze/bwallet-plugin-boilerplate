/*!
 * pluginname.js - Main Plugin for PluginName
 * Copyright (c) 2018, Nodari Chkuaselidze (MIT License).
 */

'use strict';

const assert = require('assert');
const EventEmitter = require('events');
const HTTP = require('./http');

/**
 * Plugin
 * @extends EventEmitter
 */
class PluginName extends EventEmitter {
  constructor(options) {
    super();
    assert(options, 'PluginName requires options');
    assert(options.node, 'PluginName requires node');

    this.options = options;
    this.node = options.node;
    this.logger = options.node.logger.context('pluginName');
    this.http = new HTTP({
      logger: this.logger
    });

    this.init();
  }

  static init(node) {
    return new this({ node });
  }

  init() {
    this.http.on('error', err => this.emit('error', err));
  }

  async open() {
    if (this.node.http)
      this.http.attach('/pluginName', this.node.http);
  }

  async close() {
  }
}

PluginName.id = 'pluginName';

/*
 * Expose
 */

module.exports = PluginName;

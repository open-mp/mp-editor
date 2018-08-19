'use strict';

const Controller = require('egg').Controller;

class MarketController extends Controller {
  async index() {
    this.ctx.body = 'hi, egg';
  }
}

module.exports = MarketController;

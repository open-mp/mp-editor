
const Controller = require('egg').Controller;

class EditorController extends Controller {
  async mp() {
    await this.ctx.render('editor/mp.html');
  }
}

module.exports = EditorController;

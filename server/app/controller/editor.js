
const Controller = require('egg').Controller;

class EditorController extends Controller {
  async mpHtml() {
    await this.ctx.render('editor/mp.html',{});
  }
}

module.exports = EditorController;

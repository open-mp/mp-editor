const Controller = require('egg').Controller;

class UserController extends Controller {

    async listHtml() {
        await this.ctx.render('mp/list.html',{
        });
    }
    async detailHtml() {
        let {bundleId, name, description, uri, type} = this.ctx.request.body;
    }
}

module.exports = UserController;

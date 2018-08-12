const Controller = require('egg').Controller;

class UserController extends Controller {

    async login() {
        let {bundleId, name, description, uri, type} = this.ctx.request.body;
    }

}

module.exports = UserController;

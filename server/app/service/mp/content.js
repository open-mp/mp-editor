const Service = require('egg').Service;

class UserService extends Service {
    async getMpContentList(mpId) {
        let mpContentList = DynamicContents.filter(content => {
            return content.mpId == mpId;
        });
        return mpContentList;
    }

    async getContentDetail(contentId) {
        let content = DynamicContents.find(content => {
            return content.id == contentId;
        });
        return content;
    }

    async saveContentDetail(contentId, newContent) {
        let content = DynamicContents.find(content=>{
            return contentId == content.id;
        })
        content.instanceList = newContent;
    }
}

module.exports = UserService;


// 动态页内容列表
let DynamicContents = [{
    id: 1,
    mpId: 1, // 关联的动态页id
    instanceList: [{
        "title": "限时折扣专题",
        "color": "",
        "description": "",
        "coordinate": {"groupId": "tsxuehu", "artifactId": "config", "version": "1.0.0"}
    }, {
        "color": "#f9f9f9",
        "content": "<p>限时折扣专题</p>",
        "fullscreen": 0,
        "coordinate": {"groupId": "tsxuehu", "artifactId": "richtext", "version": "1.0.0"}
    }, {
        "color": "#e5e5e5",
        "hasPadding": false,
        "lineType": "solid",
        "coordinate": {"groupId": "tsxuehu", "artifactId": "line", "version": "1.0.0"}
    }]
}, {
    id: 2,
    mpId: 1, // 关联的动态页id
    instanceList: [{
        "title": "中秋活动",
        "color": "",
        "description": "",
        "coordinate": {"groupId": "tsxuehu", "artifactId": "config", "version": "1.0.0"}
    }, {
        "color": "#f9f9f9",
        "content": "<p>中秋活动</p>",
        "fullscreen": 0,
        "coordinate": {"groupId": "tsxuehu", "artifactId": "richtext", "version": "1.0.0"}
    }, {
        "color": "#e5e5e5",
        "hasPadding": false,
        "lineType": "solid",
        "coordinate": {"groupId": "tsxuehu", "artifactId": "line", "version": "1.0.0"}
    }]
}];
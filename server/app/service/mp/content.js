const Service = require('egg').Service;
class UserService extends Service {
    async getMpDynamicPageContentList(pageId) {
        let mpContentList = DynamicContents.filter(content => {
            return content.pageId == pageId;
        });
      return mpContentList;
    }

    async getContentDetail(contentId) {
        let content = DynamicContents.find(content => {
            return content.id == contentId;
        })
        return content;
    }
}
  
module.exports = UserService;
  

// 动态页内容列表
const DynamicContents = [{
    id: 1,
    pageId: 2, // 关联的动态页id
    name: '限时折扣专题',
    description: '',
    instanceList: [{ "title": "限时折扣专题", "color": "", "description": "", "bundleId": { "groupId": "tsxuehu", "artifactId": "config", "version": "1.0.0", "classifier": "" } }, { "color": "#f9f9f9", "content": "<p>限时折扣专题</p>", "fullscreen": 0, "bundleId": { "groupId": "tsxuehu", "artifactId": "richtext", "version": "1.0.0", "classifier": "" } }, { "color": "#e5e5e5", "hasPadding": false, "lineType": "solid", "bundleId": { "groupId": "tsxuehu", "artifactId": "line", "version": "1.0.0", "classifier": "" } }]
}, {
    id: 2,
    pageId: 2, // 关联的动态页id
    name: '中秋活动',
    description: '',
    instanceList: [{ "title": "中秋活动", "color": "", "description": "", "bundleId": { "groupId": "tsxuehu", "artifactId": "config", "version": "1.0.0", "classifier": "" } }, { "color": "#f9f9f9", "content": "<p>中秋活动</p>", "fullscreen": 0, "bundleId": { "groupId": "tsxuehu", "artifactId": "richtext", "version": "1.0.0", "classifier": "" } }, { "color": "#e5e5e5", "hasPadding": false, "lineType": "solid", "bundleId": { "groupId": "tsxuehu", "artifactId": "line", "version": "1.0.0", "classifier": "" } }]
}];
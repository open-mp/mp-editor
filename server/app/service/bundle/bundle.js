const Service = require('egg').Service;
const _ = require('lodash')

class BundleService extends Service {
    async getBundleList() {
        return BundleList;
    }
}

module.exports = BundleService;

let BundleList = [
    {
        id: 1,
        name: '页面配置',
        bundleId: {
            groupId: 'tsxuehu',
            artifactId: 'config',
            version: '1.0.0',
            classifier: ''
        }
    },
    {
        id: 2,
        name: '图片广告',
        bundleId: {
            groupId: 'tsxuehu',
            artifactId: 'image-ad',
            version: '1.0.0',
            classifier: ''
        }
    },
    {
        id: 3,
        name: '富文本',
        bundleId: {
            groupId: 'tsxuehu',
            artifactId: 'richtext',
            version: '1.0.0',
            classifier: ''
        }
    },
    {
        id: 4,
        name: '分隔符',
        bundleId: {
            groupId: 'tsxuehu',
            artifactId: 'line',
            version: '1.0.0',
            classifier: ''
        }
    },
    {
        id: 5,
        name: '空白行',
        bundleId: {
            groupId: 'tsxuehu',
            artifactId: 'whitespace',
            version: '1.0.0',
            classifier: ''
        }
    },
    {
        id: 6,
        name: '商品详情',
        bundleId: {
            groupId: 'tsxuehu',
            artifactId: 'goods-detail',
            version: '1.0.0',
            classifier: ''
        }
    },
    {
        id: 7,
        name: '商品动作',
        bundleId: {
            groupId: 'tsxuehu',
            artifactId: 'goods-action',
            version: '1.0.0',
            classifier: ''
        }
    }
];

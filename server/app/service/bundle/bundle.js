const Service = require('egg').Service;
const _ = require('lodash')

class BundleService extends Service {
    async getBundleList() {
        return BundleList;
    }

    async getBundle(bundleId) {
        let b = BundleList.find(bundle => {
            return bundle.id == bundleId;
        });
        return b;
    }
}

module.exports = BundleService;

let BundleList = [
    {
        id: 1,
        name: '页面配置',
        coordinate: {
            groupId: 'tsxuehu',
            artifactId: 'config',
            version: '1.0.0'
        }
    },
    {
        id: 2,
        name: '图片广告',
        coordinate: {
            groupId: 'tsxuehu',
            artifactId: 'image-ad',
            version: '1.0.0'
        }
    },
    {
        id: 3,
        name: '富文本',
        coordinate: {
            groupId: 'tsxuehu',
            artifactId: 'richtext',
            version: '1.0.0'
        }
    },
    {
        id: 4,
        name: '分隔符',
        coordinate: {
            groupId: 'tsxuehu',
            artifactId: 'line',
            version: '1.0.0'
        }
    },
    {
        id: 5,
        name: '空白行',
        coordinate: {
            groupId: 'tsxuehu',
            artifactId: 'whitespace',
            version: '1.0.0'
        }
    },
    {
        id: 6,
        name: '商品详情',
        coordinate: {
            groupId: 'tsxuehu',
            artifactId: 'goods-detail',
            version: '1.0.0'
        }
    },
    {
        id: 7,
        name: '商品动作',
        coordinate: {
            groupId: 'tsxuehu',
            artifactId: 'goods-action',
            version: '1.0.0'
        }
    }
];

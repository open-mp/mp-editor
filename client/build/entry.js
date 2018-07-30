const glob = require("glob");
const path = require('path');

/**
 * 页面存放在src/pages目录中，页面入口文件为 entry.
 * @param {*} globs
 */
function getEntries(config) {
  let patterns = [];
  console.log('patterns: ', patterns);
  if (!patterns || patterns.length === 0) {
    // 默认打包entries目录下的所有入口
    patterns = ['**'];
  }
  if (!Array.isArray(patterns)) {
    patterns = [patterns];
  }

  let pageEntryList = [];
  patterns.forEach(pattern => {
    let fileList = glob.sync(`src/pages/${pattern}/main.js`);
    fileList.forEach(filePath => {
      pageEntryList.push(filePath);
    });
  });
  console.log(`打包文件：\n  ${pageEntryList.join(', \n  ')}`);
  // 返回内容 文件名 -> 文件路径
  let entries = {};
  pageEntryList.forEach(page => {
    let dir = path.dirname(page);
    let relativePath = path.relative('src/pages/', dir);
    let entryName = relativePath;//relativePath.replace(/[\/\\]/g, '-')
    entries[entryName] = path.resolve('.', page);
  });
  return entries;
}

module.exports = getEntries;


const path = require('path')
module.exports = function (config) {
    return {
        extensions: ['.jsx', '.js'],
        alias: {
            src: path.resolve(__dirname, '../src'),
        }
    };
};

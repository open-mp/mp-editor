import "regenerator-runtime/runtime"
import Design from './Design';
import stripUUID from './stripUUID';
import './index.pcss'

Design.stripUUID = stripUUID;

export default Design;

let define = window.define;
let require = window.require;
require.config({
    baseUrl: "/another/path",
    paths: {
        "some": "some/v1.0"
    },
    waitSeconds: 15
});
define('react', [], function () {
    return 'hi react'
});
require(['react'], (react) => {
    console.log(react)

});

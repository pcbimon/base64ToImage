"use strict";
exports.__esModule = true;
exports.hello = void 0;
var fs = require("fs");
var world = 'world';
function hello(world) {
    if (world === void 0) { world = 'world'; }
    return "Hello ".concat(world, "! ");
}
exports.hello = hello;
console.log(hello());
var content = fs.readFileSync('content.txt', 'utf8');
var base64Data = content.replace(/^data:image\/jpeg;base64,/, "");
fs.writeFile("out.jpeg", base64Data, 'base64', function (err) {
    if (err) {
        console.log(err);
    }
});

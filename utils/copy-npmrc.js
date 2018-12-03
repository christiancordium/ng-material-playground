const fs = require("fs");
const path = require("path");
const ncp = require("ncp").ncp;
// No limit, because why not?
ncp.limit = 0;

var cwd = "./";

var src = "src",
    dist = "dist";

// fs.mkdir('./dist');

// ncp(path.join(cwd, src), path.join(cwd, dist), function (err) {
//     if (err) {
//         return console.error(err);
//     }
// });

let npmrc = fs.readFileSync('../../.npmrc').toString();
fs.writeFileSync('elements/.npmrc', npmrc);

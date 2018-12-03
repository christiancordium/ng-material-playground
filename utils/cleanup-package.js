const fs = require('fs');
const packageJson = JSON.parse(fs.readFileSync('./package.json').toString());
delete packageJson.devDependencies;
delete packageJson.dependencies;
delete packageJson.scripts;
delete packageJson.ngPackage;
var src = "src",
    dist = "dist";

//fs.mkdir('./dist');
fs.writeFileSync('./elements/package.json', JSON.stringify(packageJson, null, 2));
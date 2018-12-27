"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var clc = require("cli-color");
var ImageChecker_1 = require("./checker/ImageChecker");
var argv = require("yargs")
    .usage("Usage: $0 <path to image>")
    .demandCommand(1).argv;
var pathToImage = argv._[0];
var errorStyle = clc.black.bgRed;
var normalStyle = clc.green;
var successStyle = clc.black.bgGreen;
var warningStyle = clc.black.bgYellow;
console.log(normalStyle("Checking image at '" + pathToImage + "' ..."));
try {
    var result = ImageChecker_1.ImageChecker.checkImageAtPath(pathToImage);
    if (result.isOk) {
        console.log(successStyle(result));
    }
    else {
        console.warn(warningStyle(result));
    }
}
catch (error) {
    console.error(errorStyle("[error]", error));
}
//# sourceMappingURL=main.js.map
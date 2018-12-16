import * as clc from "cli-color";

import { ImageChecker } from "./checker/ImageChecker";

const argv = require("yargs")
    .usage("Usage: $0 <path to image>")
    .demandCommand(1).argv;

const pathToImage = argv._[0];

const errorStyle = clc.black.bgRed;
const normalStyle = clc.green;
const successStyle = clc.black.bgGreen;
const warningStyle = clc.black.bgYellow;

console.log(normalStyle(`Checking image at '${pathToImage}' ...`));

try {
    const result = ImageChecker.checkImageAtPath(pathToImage);

    if (result.isOk) {
        console.log(successStyle(result));
    } else {
        console.warn(warningStyle(result));
    }
} catch (error) {
    console.error(errorStyle("[error]", error));
}

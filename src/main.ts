import { ImageChecker } from "./checker/ImageChecker";

const argv = require("yargs")
    .usage("Usage: $0 <path to image>")
    .demandCommand(1).argv;

const pathToImage = argv._[0];

console.log(`Checking image at '${pathToImage}' ...`);

try {
    const result = ImageChecker.checkImageAtPath(pathToImage);

    if (result.isOk) {
        console.log(result);
    } else {
        console.warn(result);
    }
} catch (error) {
    console.error("[error]", error);
}

import { ImageCheckResult } from "./model/ImageCheckResult";

export namespace ImageChecker {
    export function checkImageAtPath(path: string): ImageCheckResult {
        // TODO xxx
        const isOk = !path.includes("bad");

        return new ImageCheckResult(path, isOk);
    }
}

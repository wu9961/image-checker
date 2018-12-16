// Use image-checker so get code coverage
import { ImageChecker } from "../src/image-checker";
import { TestImages } from "../testUtils/TestImages";

describe("ImageChecker test", () => {
    it("works if true is truthy", () => {
        expect(true).toBeTruthy();
    });

    it("ImageChecker passes a good image", () => {
        const pathToImage = TestImages.PATH_TO_GOOD_IMAGE;

        const result = ImageChecker.checkImageAtPath(pathToImage);

        expect(result.imagePath).toEqual(pathToImage);

        expect(result.isOk).toEqual(true);

        expect(result.toString()).toEqual("[ok]");
    });

    it("ImageChecker detects an image with blur", () => {
        const pathToImage = TestImages.PATH_TO_BLURRED_IMAGE;

        const result = ImageChecker.checkImageAtPath(pathToImage);

        expect(result.imagePath).toEqual(pathToImage);

        expect(result.isOk).toEqual(false);

        expect(result.toString()).toEqual("[not ok]");
    });
});

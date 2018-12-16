export class ImageCheckResult {
    constructor(readonly imagePath: string, readonly isOk: boolean = true) {}

    toString(): string {
        return this.isOk ? "[ok]" : "[not ok]";
    }
}

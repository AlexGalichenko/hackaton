const {After, Status} = require("cucumber");
const {browser} = require("protractor");

After(async function(testCase) {
    if (testCase.result.status === Status.FAILED) {
        const screenShot = await browser.takeScreenshot()
        const decodedImage = new Buffer.from(screenShot, `base64`);
        return this.attach(decodedImage, `image/png`);
    }
});

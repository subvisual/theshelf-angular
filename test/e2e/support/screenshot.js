var fs = require('fs');
var path = require('path');

var reportDir = path.resolve(__dirname + '/../report/');
var screenshotsDir = path.resolve(reportDir + '/screenshots/');

/**
 * Take a screenshot of the browser
 * @example
 * // call it inside an example spec
 * // where you want to take the screenshot
 * screenshot.call(this);
 */
function screenshot() {
  var filename = this.test.title.replace(new RegExp(' ', 'g'), '-');

  browser.takeScreenshot().then(function (png) {
    if (!fs.existsSync(reportDir)) {
      fs.mkdirSync(reportDir);
    }
    if (!fs.existsSync(screenshotsDir)) {
      fs.mkdirSync(screenshotsDir);
    }
    var stream = fs.createWriteStream(screenshotsDir + '/' + filename + '.png');

    stream.write(new Buffer(png, 'base64'));
    stream.end();
  });
}

/** Takes a screenshot of the browser */
module.exports = screenshot;

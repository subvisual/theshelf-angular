var fs = require('fs');
var path = require('path');

var reportDir = path.resolve(__dirname + '/../report/');
var consoleLogsDir = path.resolve(reportDir + '/logs/');

var getDateStr = function () {
  var d = (new Date() + '').replace(new RegExp(':', 'g'), '-').split(' ');
  // "2013-Sep-03-21:58:03"
  return [d[3], d[1], d[2], d[4]].join('-');
};

var errorCallback = function (err) {
  console.log(err);
};

var timestampToDate = function (unix_timestamp) {
  var date = new Date(unix_timestamp);
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();

  var timeValues = [hours, minutes, seconds];
  timeValues.forEach(function (val) {
    if (val.length < 2) {
      val = '0' + val;
    }
  });
  return hours + ':' + minutes + ':' + seconds;
};

/**
 * Captures the browser log
 * @example
 * // call it inside an example spec
 * // after the event which outputs the logs you want to capture
 * captureBrowserLog.call(this);
 */
function captureBrowserLog() {
  var specName = this.test.title.replace(new RegExp(' ', 'g'), '-');

  var baseFileName = specName + '-' + getDateStr();

  if (!fs.existsSync(reportDir)) {
      fs.mkdirSync(reportDir);
  }

  var logs = browser.driver.manage().logs(),
      logType = 'browser';

  logs.getAvailableLogTypes().then(function (logTypes) {
    if (logTypes.indexOf(logType) > -1) {
      var logFileName = path.resolve(consoleLogsDir + '/' + baseFileName + '.txt');
      browser.driver.manage().logs().get(logType)
        .then(function (logsEntries) {
          if (!fs.existsSync(consoleLogsDir)) {
            fs.mkdirSync(consoleLogsDir);
          }

          var len = logsEntries.length;
          if (len) {
            console.log('Writing ' + len + ' log entries to file ' + logFileName);
            for (var i = 0; i < len; ++i) {
              var logEntry = logsEntries[i];
              var msg = timestampToDate(logEntry.timestamp) + ' ' + logEntry.type + ' ' + logEntry.message;
              fs.appendFileSync(logFileName, msg + '\r\n', {encoding: 'utf8'}, errorCallback);
            }
          }
        }, errorCallback);
    }
  });
};

/** Captures the browser log */
module.exports = captureBrowserLog;

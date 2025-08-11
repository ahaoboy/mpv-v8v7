var run = require("./run")

var n = 100000
var testLog = []

function log(s) {
  testLog.push(s)
  mp.osd_message(testLog.join("\n"), n);
}
function startTest() {
  run.v8v7(log)
  var d = mp.get_script_file().split("/").slice(0, -1).join("/")
  var path = ["file://", d, "/v8v7-", +new Date(), ".log"].join('')
  mp.utils.write_file(path, testLog.join('\n'))
}

mp.osd_message("Test is starting...", n);
mp.set_property_native('pause', true);

setTimeout(startTest, 1000)

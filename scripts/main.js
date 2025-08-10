var run = require("./run")



var n = 100000
var testLog = []

function log(s) {
  testLog.push(s)
  mp.osd_message(testLog.join("\n"), n);
}
function startTest() {
  run.v8v7(log)
  testLog.push("Test has completed.")
  mp.osd_message(testLog.join("\n"), n);

}

mp.osd_message("Test is starting...", n);
mp.set_property_native('pause', true);

setTimeout(startTest, 1000)

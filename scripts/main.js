var run = require("./run")

var testLog = []
function log(s) {
  testLog.push(s)
  mp.osd_message(testLog.join("\n"), 100000);
}

mp.set_property_native('pause', true);

function startTest() {
  a.v8v7(log)
}

setTimeout(startTest, 1000)

var run = require("./run")
var n = 100000
var testLog = []
var runs = +(mp.utils.getenv("V8V7_RUNS") || "1")
var runId = 1;

function log(s) {
  testLog.push(s)
  var s = testLog.join("\n")
  mp.osd_message(s, n);
}

function startTest() {
  for (var i = 0; i < runs; i++) {
    log("Bench: " + runId + "/" + runs)
    run.v8v7(log)
    var d = mp.get_script_file().split("/").slice(0, -1).join("/")
    var path = ["file://", d, "/v8v7-", +new Date(), ".log"].join('')
    var s = testLog.slice(1).join('\n')
    mp.utils.write_file(path, s)
    print(s)
    testLog = []
    runId++
  }

  runId = 1
  testLog = []
}

mp.osd_message("Test is starting...", n);
mp.set_property_native('pause', true);

setTimeout(startTest, 1000)

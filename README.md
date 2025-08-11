# mpv-v8v7

<img width="964" height="587" alt="image" src="https://github.com/user-attachments/assets/3240702c-9b94-4f8a-9763-16c49ec72b28" />

[mpv-v8v7](https://github.com/ahaoboy/mpv-v8v7) is a script for running **v8-v7** benchmark tests inside the [mpv player](https://mpv.io/).
The original benchmark code comes from [mozilla/arewefastyet](https://github.com/mozilla/arewefastyet/tree/master/benchmarks/v8-v7) and is bundled and converted into a CommonJS format compatible with mpv using [ahaoboy/js-engine-benchmark](https://github.com/ahaoboy/js-engine-benchmark).

## How it Works
1. When mpv starts, the script will pause the video.
2. It runs the benchmark test.
3. The test results are displayed on the mpv screen via OSD (On-Screen Display).
4. After the test finishes, the results are saved to a log file in the following path: `scripts/mpv-v8v7-<timestamp>.log`

## Requirements
- mpv with JavaScript scripting enabled.
- `mpv.conf` and `scripts` folder accessible for placing the script.

## Installation

Download mpv-osc.zip or portable_config.zip from [mpv-build](https://mpv-easy.github.io/mpv-build/#mpv-build=%22%7B%5C%22state%5C%22%3A%7B%5C%22selectedRowKeys%5C%22%3A%5B%5C%22mpv-v8v7%5C%22%5D%2C%5C%22externalList%5C%22%3A%5B%5D%2C%5C%22ui%5C%22%3A%5C%22osc%5C%22%2C%5C%22platform%5C%22%3A%5C%22mpv-v3%5C%22%7D%7D%22)


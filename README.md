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

## bench mpv-x86_64-v3

### https://github.com/zhongfly/mpv-winbuild

<img width="960" height="540" alt="image" src="https://github.com/user-attachments/assets/32e37ce6-cc15-4c86-8964-afd587aae2eb" />

### https://github.com/shinchiro/mpv-winbuild-cmake

<img width="960" height="540" alt="image" src="https://github.com/user-attachments/assets/4c4c6988-c8d9-4906-b49c-80c059123706" />

### https://github.com/Andarwinux/mpv-winbuild

<img width="960" height="540" alt="image" src="https://github.com/user-attachments/assets/42aba3b4-d5d9-414a-8c34-b5ecef7c2b66" />

### https://nightly.link/mpv-player/mpv/workflows/build/master mpv-x86_64-pc-windows-msvc

<img width="960" height="540" alt="image" src="https://github.com/user-attachments/assets/d4f1c769-7385-4869-a324-835c33b237fd" />

### https://nightly.link/mpv-player/mpv/workflows/build/master mpv-x86_64-w64-mingw32

<img width="960" height="540" alt="image" src="https://github.com/user-attachments/assets/a4b543db-f0a3-450f-9a8a-0d4d897b9c4b" />

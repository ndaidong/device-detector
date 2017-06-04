device-detector
========

Simple tool for detecting device info and bots.

[![NPM](https://badge.fury.io/js/device-detector.svg)](https://badge.fury.io/js/device-detector)
[![Build Status](https://travis-ci.org/ndaidong/device-detector.svg?branch=master)](https://travis-ci.org/ndaidong/device-detector)
[![codecov](https://codecov.io/gh/ndaidong/device-detector/branch/master/graph/badge.svg)](https://codecov.io/gh/ndaidong/device-detector)
[![Dependency Status](https://gemnasium.com/badges/github.com/ndaidong/device-detector.svg)](https://gemnasium.com/github.com/ndaidong/device-detector)
[![NSP Status](https://nodesecurity.io/orgs/techpush/projects/b9b9775a-ee09-4491-afe1-028f58e0b2fd/badge)](https://nodesecurity.io/orgs/techpush/projects/b9b9775a-ee09-4491-afe1-028f58e0b2fd)


## Setup

- Node.js

  ```
  npm install device-detector
  ```

- CDN

  - [DeviceDetector.js](https://cdn.rawgit.com/ndaidong/device-detector/master/dist/DeviceDetector.js)
  - [DeviceDetector.min.js](https://cdn.rawgit.com/ndaidong/device-detector/master/dist/DeviceDetector.min.js)
  - [DeviceDetector.min.map](https://cdn.rawgit.com/ndaidong/device-detector/master/dist/DeviceDetector.min.map)

- Also supports ES6 Module, CommonJS, AMD and UMD style.


## Usage

DeviceDetector provides just one method named `parse()`.

```
DeviceDetector.parse([userAgent]);
```

The only parameter "userAgent" is optional in web browser, but required in Node.js environment.

Example:

```
var ua = 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)';
var deviceInfo = DeviceDetector.parse(ua);
```

deviceInfo is an object looks like this:

```
  {
    type: 'Bot',
    browser: '',
    engine: 'Googlebot',
    version: '2.1',
    os: ''
  }

```


## Test

```
git clone https://github.com/ndaidong/device-detector.git
cd device-detector
npm install
npm test
```

# License

The MIT License (MIT)

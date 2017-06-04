device-detector
========

Simple tool for detecting device info in Node.js and web browsers. Support almost popular browsers and bots.

[![NPM](https://badge.fury.io/js/device-detector.svg)](https://badge.fury.io/js/device-detector)
[![Build Status](https://travis-ci.org/ndaidong/device-detector.svg?branch=master)](https://travis-ci.org/ndaidong/device-detector)
[![codecov](https://codecov.io/gh/ndaidong/device-detector/branch/master/graph/badge.svg)](https://codecov.io/gh/ndaidong/device-detector)
[![Dependency Status](https://gemnasium.com/badges/github.com/ndaidong/device-detector.svg)](https://gemnasium.com/github.com/ndaidong/device-detector)
[![NSP Status](https://nodesecurity.io/orgs/techpush/projects/b9b9775a-ee09-4491-afe1-028f58e0b2fd/badge)](https://nodesecurity.io/orgs/techpush/projects/b9b9775a-ee09-4491-afe1-028f58e0b2fd)


## Contents

* [Setup](#setup)
* [Usage](#usage)
* [Test](#test)


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

For example:

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


Another example, you can see how it will be used with [ExpressJS](http://expressjs.com/) and [morgan](https://github.com/expressjs/morgan) to show shorter logs:

```
var express = require('express');
var morgan = require('morgan');
var DeviceDetector = require('device-detector');

var app = express();

morgan.token('navigator', function(req, res){
  var ua = req.headers['user-agent'];
  var d = DeviceDetector.parse(ua);
  if(d){
    if(d.type === 'Bot'){
      return d.engine + ' ' + d.version;
    }
    return (d.browser + ' ' + d.version) + ', ' + (d.os + ' ' + d.type);
  }
  return 'Unknown device';
});

app.use(morgan(':method :url :status - :res[content-length] bytes :response-time ms - :navigator - [:date[web]]'));

```

Logging result:
```
GET /bookings 200 - 23324 bytes 1380.019 ms - Chrome 45.0.2454.93, Linux Desktop - [Wed, 23 Sep 2015 12:54:11 GMT]
GET /notifications 200 - 1757 bytes 29.730 ms - Chrome 45.0.2454.93, Linux Desktop - [Wed, 23 Sep 2015 12:54:12 GMT]
GET /profile 200 - 33805 bytes 619.092 ms - Chrome 45.0.2454.93, Linux Desktop - [Wed, 23 Sep 2015 12:54:20 GMT]
...
```

In the browsers, this method automatically executes and its result - current browser info - is being set to DeviceDetector.info property.

Also, if you don't pass "userAgent" parameter while calling "parse" method, it will return DeviceDetector.info instead of parsing again.


## Test

```
git clone https://github.com/ndaidong/device-detector.git
cd device-detector
npm install
npm test
```

# License

The MIT License (MIT)

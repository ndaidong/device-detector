# NOTE:

This project is usable but no longer being developed; Please consider to use [faisalman/ua-parser-js](https://github.com/faisalman/ua-parser-js) instead. Thanks.


device-detector
========

Simple tool for detecting device info in Node.js and web browsers. Support almost popular browsers and bots.

[![NPM](https://badge.fury.io/js/device-detector.svg)](https://badge.fury.io/js/device-detector)
![Travis](https://travis-ci.org/ndaidong/device-detector.svg?branch=master)
[![Coverage Status](https://coveralls.io/repos/github/ndaidong/device-detector/badge.svg?branch=master)](https://coveralls.io/github/ndaidong/device-detector?branch=master)
![devDependency Status](https://david-dm.org/ndaidong/device-detector.svg)

# Contents

* [Setup](#setup)
* [Usage](#usage)
* [Test](#test)


# Setup

### In Node.js:

```
npm install device-detector
```

And then:

```
    var DeviceDetector = require('device-detector');
```

### In the browsers


Assuming there is a file device-detector.min.js located at "/public/js/lib/", the following ways can be used to include DeviceDetector:

##### Using SystemJS

```
    System.config({
        baseURL: '/public/js/lib',
        map: {
            DeviceDetector: 'device-detector.min'
        }
    });

    System.import('DeviceDetector').then(function(DeviceDetector){
        console.log(DeviceDetector.info);
    });

```

##### Using RequireJS

```
    require.config({
        baseUrl: '/public/js/lib',
        paths: {
            DeviceDetector: 'device-detector.min'
        }
    });

    requirejs('DeviceDetector', function(DeviceDetector){
        console.log(DeviceDetector.info);
    });

```


##### Using traditional script tag

```
<script type="text/javascript" src="/public/js/lib/device-detector.min.js"></script>
<script type="text/javascript">
console.log(DeviceDetector.info);
</script>
```


# Usage

DeviceDetector provides just one method named "parse".

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


# Test

```
git clone https://github.com/ndaidong/device-detector.git
cd device-detector
npm install
npm test
```

# License

The MIT License (MIT)

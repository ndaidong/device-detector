device-detector
========

Simple tool for detecting device info in Node.js and web browsers. Support almost popular browsers and bots.

# Contents

* [Setup](#setup)
* [Usage](#usage)
* [Test](#test-with-mocha)


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
var ua = 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:40.0) Gecko/20100101 Firefox/40.1';
var deviceInfo = DeviceDetector.parse(ua);
```

deviceInfo is an object looks like this:

```
  {
    type: 'Desktop',
    browser: 'Firefox',
    engine: 'Gecko',
    version: '40.1',
    os: 'Windows NT'
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


# Test with Mocha

```
git clone https://github.com/techpush/device-detector.git
cd device-detector
npm install
mocha
```

Make sure [Mocha](https://mochajs.org/) is already and check the specs under /test folder.

![DeviceDetector test with Mocha](http://i.imgur.com/dzQ3tg6.png)

# License

Apache License


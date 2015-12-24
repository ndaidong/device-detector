/**
 * Testing
 * @ndaidong
 */
/* global describe it */

'use strict';

var path = require('path');
var chai = require('chai');

chai.should();
var expect = chai.expect;

var rootDir = '../../src/';

var DeviceDetector = require(path.join(rootDir, 'device-detector'));

var props = ['type', 'browser', 'engine', 'version', 'os'];

describe('Standard browsers', () => {

  let data = [
    {
      ua: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.93 Safari/537.36',
      ex: {
        type: 'Desktop',
        browser: 'Chrome',
        engine: 'Webkit',
        version: '45.0.2454.93',
        os: 'Linux'
      }
    },
    {
      ua: 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:40.0) Gecko/20100101 Firefox/40.1',
      ex: {
        type: 'Desktop',
        browser: 'Firefox',
        engine: 'Gecko',
        version: '40.1',
        os: 'Windows NT'
      }
    },
    {
      ua: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_3) AppleWebKit/537.75.14 (KHTML, like Gecko) Version/7.0.3 Safari/7046A194A',
      ex: {
        type: 'Desktop',
        browser: 'Safari',
        engine: 'Webkit',
        version: '7.0.3',
        os: 'Mac'
      }
    },
    {
      ua: 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/40.0.2214.89 Vivaldi/1.0.94.2 Safari/537.36',
      ex: {
        type: 'Desktop',
        browser: 'Vivaldi',
        engine: 'Webkit',
        version: '1.0.94.2',
        os: 'Windows NT'
      }
    },
    {
      ua: 'Opera/9.80 (X11; Linux i686; Ubuntu/14.10) Presto/2.12.388 Version/12.16',
      ex: {
        type: 'Desktop',
        browser: 'Opera',
        engine: 'Presto',
        version: '9.80',
        os: 'Linux'
      }
    },
    {
      ua: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.135 Safari/537.36 Edge/12.246',
      ex: {
        type: 'Desktop',
        browser: 'Edge',
        engine: 'Webkit',
        version: '12.246',
        os: 'Windows NT'
      }
    },
    {
      ua: 'Mozilla/5.0 (X11; Linux) KHTML/4.9.1 (like Gecko) Konqueror/4.9',
      ex: {
        type: 'Desktop',
        browser: 'Konqueror',
        engine: 'Gecko',
        version: '4.9',
        os: 'Linux'
      }
    },
    {
      ua: 'Mozilla/5.0 (Windows; U; Win 9x 4.90; SG; rv:1.9.2.4) Gecko/20101104 Netscape/9.1.0285',
      ex: {
        type: 'Desktop',
        browser: 'Netscape',
        engine: 'Gecko',
        version: '9.1.0285',
        os: 'Windows'
      }
    },
    {
      ua: 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:2.0b4pre) Gecko/20100815 Minefield/4.0b4pre',
      ex: {
        type: 'Desktop',
        browser: 'Minefield',
        engine: 'Gecko',
        version: '4.0b4pre',
        os: 'Windows NT'
      }
    },
    {
      ua: 'Mozilla/5.0 (Macintosh; U; Intel Mac OS X; en-US) AppleWebKit/528.16 (KHTML, like Gecko, Safari/528.16) OmniWeb/v622.8.0.112941',
      ex: {
        type: 'Desktop',
        browser: 'OmniWeb',
        engine: 'Webkit',
        version: 'v622.8.0.112941',
        os: 'Mac'
      }
    },
    {
      ua: 'Mozilla/5.0 (Windows; U; Windows NT 6.0; en-US) AppleWebKit/533.1 (KHTML, like Gecko) Maxthon/3.0.8.2 Safari/533.1',
      ex: {
        type: 'Desktop',
        browser: 'Maxthon',
        engine: 'Webkit',
        version: '3.0.8.2',
        os: 'Windows NT'
      }
    },
    {
      ua: 'Mozilla/5.0 (X11; U; Linux i686; fr-fr) AppleWebKit/525.1+ (KHTML, like Gecko, Safari/525.1+) midori/1.19',
      ex: {
        type: 'Desktop',
        browser: 'Midori',
        engine: 'Webkit',
        version: '1.19',
        os: 'Linux'
      }
    }
  ];

  data.forEach((device) => {

    let useragent = device.ua;
    let expectation = device.ex;

    describe(' / Test for "' + useragent + '"', () => {

      let result = DeviceDetector.parse(useragent);

      it(' should return an object', (done) => {
        result.should.be.a('object');
        done();
      });

      it(' should have properties: ' + props.join(', '), (done) => {
        props.forEach((key) => {
          result.should.have.property(key);
        });
        done();
      });

      props.forEach((k) => {
        it(' - ' + k + ' should be "' + expectation[k] + '"', (done) => {
          expect(result[k]).to.equal(expectation[k]);
          done();
        });
      });
    });
  });
});

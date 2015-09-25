/**
 * Testing
 * @ndaidong
 */
/* global describe it */

import path from 'path';
import chai from 'chai';

chai.should();
var expect = chai.expect;

var rootDir = '../../src/';

var DeviceDetector = require(path.join(rootDir, 'device-detector'));

var props = ['type', 'browser', 'engine', 'version', 'os'];

describe('Mobile browsers', () => {

  let data = [
    {
      ua: 'Opera/9.80 (J2ME/MIDP; Opera Mini/9.80 (S60; SymbOS; Opera Mobi/23.348; U; en) Presto/2.5.25 Version/10.54',
      ex: {
        type: 'Mobile',
        browser: 'Opera Mini',
        engine: 'Presto',
        version: '9.80',
        os: 'SymbianOS'
      }
    },
    {
      ua: 'Opera/9.80 (Android; Opera Mini/7.6.35766/35.5706; U; en) Presto/2.8.119 Version/11.10',
      ex: {
        type: 'Mobile',
        browser: 'Opera Mini',
        engine: 'Presto',
        version: '7.6.35766',
        os: 'Android'
      }
    },
    {
      ua: 'Mozilla/5.0 (compatible; MSIE 9.0; Windows Phone OS 7.5; Trident/5.0; IEMobile/9.0)',
      ex: {
        type: 'Mobile',
        browser: 'IEMobile',
        engine: 'Trident',
        version: '9.0',
        os: 'WindowsPhone'
      }
    },
    {
      ua: 'Mozilla/5.0 (Linux; U; Android 4.0.3; ko-kr; LG-L160L Build/IML74K) AppleWebkit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30',
      ex: {
        type: 'Mobile',
        browser: 'Safari',
        engine: 'Webkit',
        version: '4.0',
        os: 'Android'
      }
    },
    {
      ua: 'Mozilla/5.0 (BlackBerry; U; BlackBerry 9900; en) AppleWebKit/534.11+ (KHTML, like Gecko) Version/7.1.0.346 Mobile Safari/534.11+',
      ex: {
        type: 'Mobile',
        browser: 'Safari',
        engine: 'Webkit',
        version: '7.1.0.346',
        os: 'BlackBerry'
      }
    }
  ]

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

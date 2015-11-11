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

describe('Bots and Crawlers', () => {

  let data = [
    {
      ua: 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)',
      ex: {
        type: 'Bot',
        browser: '',
        engine: 'Googlebot',
        version: '2.1',
        os: ''
      }
    },
    {
      ua: 'Feedfetcher-Google; (+http://www.google.com/feedfetcher.html; feed-id=8639390370582375869)',
      ex: {
        type: 'Util',
        browser: '',
        engine: 'Feedfetcher-Google',
        version: '',
        os: ''
      }
    },
    {
      ua: 'Mozilla/5.0 (compatible; bingbot/2.0; +http://www.bing.com/bingbot.htm)',
      ex: {
        type: 'Bot',
        browser: '',
        engine: 'Bingbot',
        version: '2.0',
        os: ''
      }
    },
    {
      ua: 'Mozilla/5.0 (compatible; Baiduspider/2.0; +http://www.baidu.com/search/spider.html)',
      ex: {
        type: 'Bot',
        browser: '',
        engine: 'BaiduSpider',
        version: '2.0',
        os: ''
      }
    },
    {
      ua: 'Mozilla/5.0 (compatible; YandexBot/3.0; +http://yandex.com/bots)',
      ex: {
        type: 'Bot',
        browser: '',
        engine: 'YandexBot',
        version: '3.0',
        os: ''
      }
    },
    {
      ua: 'Mozilla/5.0 (compatible; Yahoo! Slurp; http://help.yahoo.com/help/us/ysearch/slurp)',
      ex: {
        type: 'Bot',
        browser: '',
        engine: 'Yahoo! Slurp',
        version: '',
        os: ''
      }
    },
    {
      ua: 'YahooSeeker/1.2 (compatible; Mozilla 4.0; MSIE 5.5; yahooseeker at yahoo-inc dot com ; http://help.yahoo.com/help/us/shop/merchant/)',
      ex: {
        type: 'Bot',
        browser: '',
        engine: 'YahooSeeker',
        version: '1.2',
        os: ''
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

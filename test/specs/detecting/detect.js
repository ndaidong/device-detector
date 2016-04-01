/**
 * Testing
 * @ndaidong
 */

/* eslint no-undefined: 0*/
/* eslint no-array-constructor: 0*/
/* eslint no-new-func: 0*/
/* eslint no-console: 0*/
/* eslint max-len: 0*/

'use strict';

import path from 'path';
import bella from 'bellajs';
import test from 'tape';

var rootDir = '../../../src/';

var DeviceDetector = require(path.join(rootDir, 'device-detector'));

import { mobiles, desktops, bots } from '../samples';

const PROPS = [
  'type',
  'browser',
  'engine',
  'version',
  'os'
];

var hasRequiredKeys = (o) => {
  return PROPS.every((k) => {
    return bella.hasProperty(o, k);
  });
};

var testOne = (device) => {

  let useragent = device.ua;
  let expectation = device.ex;
  test(`Testing with .parse(${useragent})`, { timeout: 1000 }, (t) => {

    let result = DeviceDetector.parse(useragent);

    t.comment('(Call returned result is R, so:)');
    t.ok(bella.isObject(result), 'R must be an object.');
    t.ok(hasRequiredKeys(result), 'R must have all required keys.');

    for (let k in expectation) {
      if (bella.hasProperty(expectation, k)) {
        let expect = expectation[k];
        t.equal(result[k], expect, `R.${k} must be ${expect}`);
      }
    }

    t.end();
  });

};

mobiles.map(testOne);
desktops.map(testOne);
bots.map(testOne);

/**
 * Testing
 * @ndaidong
 */

import test from 'tape';

import {
  isObject,
  hasProperty
} from 'bellajs';

import {
  parse as es6
} from '../../../src/main';

import {
  parse as full
} from '../../../dist/DeviceDetector.js';

import {
  parse as min
} from '../../../dist/DeviceDetector.min.js';

import {
  mobiles, desktops, bots
} from '../samples';

const PROPS = [
  'type',
  'browser',
  'engine',
  'version',
  'os'
];

var hasRequiredKeys = (o) => {
  return PROPS.every((k) => {
    return hasProperty(o, k);
  });
};

var variantTest = (parse) => {

  let testOne = (device) => {

    let useragent = device.ua;
    let expectation = device.ex;
    test(`Testing with .parse(${useragent})`, (t) => {

      let result = parse(useragent);

      t.comment('(Call returned result is R, so:)');
      t.ok(isObject(result), 'R must be an object.');
      t.ok(hasRequiredKeys(result), 'R must have all required keys.');

      for (let k in expectation) {
        if (hasProperty(expectation, k)) {
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
};

[es6, full, min].map(variantTest);

var _                 = require('lodash');
var siu               = require('siu');
var common            = require('../common');
var assertNotArray    = require('../../utils/assertNotArray');

function start(config, current, record) {
  var reducerName = 'createStart';
  assertNotArray(config, reducerName, record);

  record = common(config, current, record, reducerName);

  // mark record as unsaved and busy
  _.merge( record, record, {busy: true}, {pendingCreate: true});

  return siu.a.merge(current, record, config.key);
}

module.exports = start;

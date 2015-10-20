var _                 = require('lodash');
var common            = require('../common');
var siu               = require('siu');

function start(config, current, record) {
  var reducerName = 'updateStart';

  record = common(config, current, record, reducerName);

  // mark record as unsaved and busy
  _.merge( record, record, {busy: true}, {pendingUpdate: true});

  // replace record
  return siu.a.merge(current, record, config.key);
}

module.exports = start;

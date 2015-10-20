var _                 = require('lodash');
var common            = require('../common');

function start(config, current, record) {
  var reducerName = 'deleteStart';

  record = common(config, current, record, reducerName);

  var deleteId = record[config.key];

  return current.map(function(existingRecord) {
    if (existingRecord[config.key] == deleteId) {
        // mark record as unsaved and busy
      _.merge( existingRecord, existingRecord, {deleted: true}, {busy: true});
      return existingRecord;
    }

    return existingRecord;
  });
}

module.exports = start;

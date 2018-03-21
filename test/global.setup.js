'use strict';
const _ = require('lodash');
const lib = require('../lib');

const director = lib.bosh.director;
let boshConfigCacheDetails = {};
let deploymentIpsCacheDetails = {};
director.ready.then(() => {
  boshConfigCacheDetails = _.cloneDeep(director.boshConfigCache);
  deploymentIpsCacheDetails = _.cloneDeep(director.deploymentIpsCache);
});
function processUnhandledRejection(reason, p) {
  console.log('ignoring this error... ');
}
process.on('unhandledRejection', processUnhandledRejection);
beforeEach(function () {
  director.boshConfigCache = _.cloneDeep(boshConfigCacheDetails);
  director.deploymentIpsCache = _.cloneDeep(deploymentIpsCacheDetails);
});

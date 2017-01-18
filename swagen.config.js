const swagenConfig = require('./swagen.config.json');

/**
 * Quite often, you will require a utility library like lodash when writing your code below.
 * If so, uncomment the following line and ensure that the lodash package is installed.
 */
const _ = require('lodash');

/**
 * Update the swagen config with any dynamic code you require.
 * Example (to prefix all service names with 'Svc')
 */
// swagenConfig.api.transforms.serviceName = function(name, details) {
//    return 'Svc' + _.upperFirst(_.camelCase(name));
// };

swagenConfig['http://petstore.swagger.io/v2/swagger.json'].transforms.modelName = function(name, details) {
    return _.upperFirst(_.camelCase(name)) + 'Model';
};

module.exports = swagenConfig;
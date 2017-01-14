/**
 * Loading the swagen-core package to use the CodeBuilder class.
 * This step is optional, as the output can be manually generated, but the CodeBuilder class makes it easy.
 */
const swagenCore = require('swagen-core');

/**
 * Loading the lodash package to use for this sample.
 * This step is optional and depends on the requirements of your generator.
 */
const _ = require('lodash');

/**
 * Modes supported by this generator. Local generators can support multiple modes, just like packaged generators.
 * For simplicity, this sample only uses a single mode.
 */
const modes = [
    {
        name: 'readme',
        description: 'Generates a readme.md file from the swagger metadata',
        language: 'markdown',
        extension: 'md'
    }
];

/**
 * Use the swagen-core CodeBuilder class to construct the code.
 * CodeBuilder is a simple string builder class that supports code-specific concepts like indentation.
 * @param {Definition} definition - The parsed structure of the Swagger.
 * @param {Profile} profile - Generation profile.
 */
function generate(definition, profile) {
    let cb = new swagenCore.CodeBuilder();
    cb.line(`# ${definition.metadata.title}`);
    cb.line(`${definition.metadata.description}`);
    cb.blank();
    cb.line(`Base URL: ${definition.metadata.baseUrl}`);
    cb.blank();
    cb.line(`## Details`);
    let serviceKeys = _.keys(definition.services).sort();
    cb.line(`* Number of services: ${serviceKeys.length}`);
    for (let i = 0; i < serviceKeys.length; i++) {
        cb.line(`    * ${serviceKeys[i]}`);
    }
    let modelKeys = _.keys(definition.models).sort();
    cb.line(`* Number of models: ${modelKeys.length}`);
    for (let i = 0; i < modelKeys.length; i++) {
        cb.line(`    * ${modelKeys[i]}`)
    }
    return cb.toCode();
}

function validateProfile(profile) {
    return true;
}

module.exports = {
    modes,
    generate,
    validateProfile
};

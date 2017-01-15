/**
 * This is a sample local Swagen generator. A local generator is not installed as a NPM package, but
 * can be part of a Node project. This allows your project to have a custom generator without needing
 * to publish a separate generator to the NPM repository.
 *
 * A local generator is structurally similar to a packaged generator. It exports the same structure.
 * The difference is in how the generator is specified in the Swagen configuration file.
 * Similar to the require keyword, if you use a relative path for the generator name, Swagen will
 * assume it is a local generator and handle it accordingly.
 *
 * See the swagen.config.json file (petstore-local-generator entry) for an example.
 *
 * This sample generator generates a Markdown file (.md) describing the web service.
 */

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
 * Modes supported by this generator. Local generators can support multiple modes, just like packaged
 * generators. However, this has no practical value and it is easier to simply have a single mode per
 * local generator.
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

/**
 * Validates the generation profile specified in the configuration.
 * In this sample, there is nothing to validate.
 * @param {Profile} profile - Generation profile
 */
function validateProfile(profile) {
    return true;
}

module.exports = {
    modes,
    generate,
    validateProfile
};

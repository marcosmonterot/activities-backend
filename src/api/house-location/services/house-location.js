'use strict';

/**
 * house-location service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::house-location.house-location');

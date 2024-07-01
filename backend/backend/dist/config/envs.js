"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.envs = void 0;
require("dotenv/config");
const joi = require("joi");
const envsScheme = joi.object({
    PORT: joi.number().required(),
    JWT_SECRET: joi.string().required(),
    URL_SUNAT: joi.string().required(),
    MONGO_URI: joi.string().required()
})
    .unknown(true);
const { error, value } = envsScheme.validate(process.env);
if (error) {
    throw new Error(`Config validation error : ${error.message}`);
}
const envVars = value;
exports.envs = {
    port: envVars.PORT,
    jwt_secret: envVars.JWT_SECRET,
    url_sunat: envVars.URL_SUNAT,
    mongo_url: envVars.MONGO_URI
};
//# sourceMappingURL=envs.js.map
import 'dotenv/config'
import * as joi from 'joi'


interface EnvVars {
    PORT : number,
    JWT_SECRET: string
}

const envsScheme = joi.object({
    PORT: joi.number().required(),
    JWT_SECRET: joi.string().required()
})
.unknown(true)

const {error, value} = envsScheme.validate(process.env);

if(error){
    throw new Error(`Config validation error : ${error.message}`);
    
}


const envVars : EnvVars = value;
export const envs = {
  port : envVars.PORT,
  jwt_secret: envVars.JWT_SECRET
}
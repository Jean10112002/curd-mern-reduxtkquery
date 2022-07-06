import Joi from 'joi'
export const schemaLibro=Joi.object({
    titulo:Joi.string().required(),
    author:Joi.string().required(),
    descripcion:Joi.string().required()

})
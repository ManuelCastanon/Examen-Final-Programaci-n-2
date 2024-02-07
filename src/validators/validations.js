import Joi from "joi"

export const validarLibro = libro => {

    const libroSchema = Joi.object({
        codigo: Joi.number().integer().required(),
        titulo: Joi.string().required(),
        autor: Joi.string().required(),
        estado: Joi.string().valid("disponible","alquilado","no-apto")
    })

    const { error } = libroSchema.validate(libro);
    if (error) {
        return { result: false, error }
    }
    return { result: true }
}

export const validarCodigo = codigo => {

    const codigoSchema = Joi.number().integer().required()

    const { error } = codigoSchema.validate(codigo);
    if (error) {
        return { result: false, error }
    }
    return { result: true }
}
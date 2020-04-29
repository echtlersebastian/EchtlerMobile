const Joi = require("joi");
const mongoose = require("mongoose");
Joi.objectId = require('joi-objectid')(Joi);

const validations = {
    create: data =>
        Joi.validate(data, {
            vorname: Joi.string().required(),
            nachname: Joi.string().required(),
            geburtsdatum: Joi.string().required(),
            straße: Joi.string().required(),
            plz: Joi.string().required(),
            ort: Joi.string().required(),
            telefon: Joi.string().required(),
            email: Joi.string().required(),
            startDate: Joi.date().required(),
            endDate: Joi.date().required(),
        }),
    check: data =>
        Joi.validate(data, {
            startDate: Joi.date().required(),
            endDate: Joi.date().required(),
        }),
    busy: data =>
        Joi.validate(data, {
            startDate: Joi.date().required(),
            endDate: Joi.date().required(),
        }),
    available: data =>
        Joi.validate(data, {
            startDate: Joi.date().required(),
            endDate: Joi.date().required(),
        }),
};

module.exports = validations;
const Joi = require("joi");

const newFilmValidation = Joi.object({
    name: Joi.string()
            .trim()
            .min(1)
            .required(),
    description: Joi.string()
            .trim().
            max(200).
            required(),
    rating: Joi.number()
            .integer()
            .required(),
    trajanje: Joi.string()
            .trim()
            .required(),
});

const updateFilmValidation = Joi.object({
    description: Joi.string()
            .trim()
            .min(1)
            .required(),
    rating: Joi.number()
            .integer()
});

const newUserValidation = Joi.object({
    name: Joi.string()
            .trim()
            .min(1)
            .required(),
    username: Joi.string()
            .min(1)
            .required(),
    lastname: Joi.string()
            .trim()
            .min(1)
            .required(),
    email: Joi.string()
            .email()
            .required(),
    password: Joi.string()
            .trim()
            .min(3)
            .max(20)
            .required(),
});

const updateUserValidation = Joi.object({
    id: Joi.number()    
            .required,
    username: Joi.string()
            .min(1),
    email: Joi.string()
            .email(),
    password: Joi.string()
            .trim()
            .alphanum()
            .min(3)
            .max(20),
})

const newZanrValidation = Joi.object({
    tipZanra: Joi.string()
            .valid('Akcija','Komedija','Triler','Naucna fantastika')
            .min(1)
            .required(),
    FilmId: Joi.number()
            .integer()
            .required()
});

const updateZanrValidation = Joi.object({   
    tipZanra: Joi.string()
            .valid('Akcija','Komedija','Triler','Naucna fantastika')
            .min(1)
            .required(),
    FilmId: Joi.number()
            .integer()
            .required()
});

const newRoleValidation = Joi.object({
    roleType: Joi.string()
            .valid('admin','korisnik','moderator')
            .required(),
    UserId: Joi.number()
            .integer()
            .required()
});

const updateRoleValidation = Joi.object({
    roleType: Joi.string()
            .valid('admin','korisnik','moderator')
            .required(),
    UserId: Joi.number()
            .integer()
            .required()
});


const loginUserValidation = Joi.object({
    username: Joi.string()
            .min(1)
            .required(),
    password: Joi.string()
            .trim()
            .alphanum()
            .min(3)
            .max(20)
            .required(),
});



module.exports = { 
    newFilmValidation, 
    updateFilmValidation, 
    newUserValidation, 
    updateUserValidation, 
    newZanrValidation,
    updateZanrValidation,
    newRoleValidation,
    updateRoleValidation,
    loginUserValidation
};
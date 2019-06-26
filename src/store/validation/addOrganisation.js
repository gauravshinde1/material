import isEmpty from "./is-empty";
import validator from 'validator';

export const organisationValidate = data =>{
    let errors = {};

    data.name = !isEmpty(data.name) ? data.name : "";
    data.email = !isEmpty(data.email) ? data.email : "";


    // Email Address
    if (!validator.isEmail(data.email)){
        errors.email = "Email Is Invalid *";
    }

    if (validator.isEmpty(data.email)){
        errors.email = "Email Is Required *";
    }

    // first name validation

    if (!validator.isLength(data.name, { min: 2, max: 30})){
        errors.name = "Organisation minimum must be 2 to 30 char";
    }

    if (validator.isEmpty(data.name)){
        errors.name = "Organisation Name Is Required *";
    }

    return{
        errors,
        isValid: isEmpty(errors)
    };
}
import REG_EXP from './const'

const rules = {
    required: value => ({
        errors: ['field should not be empty'],
        value,
        isValid: value ? true : false
    }),

    email: value => ({
        errors: ['not correct email'],
        value,
        isValid: REG_EXP.EMAIL
            .test(value) ? true : false
    }),

    isNumber: value => ({
        errors: ['NaN'],
        value,
        isValid: REG_EXP.NUMBER
            .test(value) ? true : false
    }),

    isPhoneNumber: value => ({
        errors: ['incorrect number'],
        value,
        isValid: REG_EXP.PHONE_NUMBER
            .test(value) ? true : false
    }),

    isPasswordStrength: value => ({
        errors: ['the password is not reliable'],
        value,
        isValid: REG_EXP.CHECK_PASSWORD
            .test(value) ? true : false
    })
}

export default rules
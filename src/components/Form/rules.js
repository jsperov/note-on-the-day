const rules = {
    required: value => ({
        errors: ['field should not be empty'],
        value,
        isValid: value ? true : false
    }),

    email: value => ({
        errors: ['not correct email'],
        value,
        isValid: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
            .test(value) ? true : false
    }),

    isNumber: value => ({
        errors: ['NaN'],
        value,
        isValid: /^\d+$/
            .test(value) ? true : false
    }),

    isPasswordStrength: value => ({
        errors: ['the password is not reliable'],
        value,
        isValid: /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/
            .test(value) ? true : false
    })
}

export default rules
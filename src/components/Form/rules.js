import REG_EXP from './const'

const rules = {
  required: value => ({
    error: 'field should not be empty',
    value,
    isValid: value ? true : false
  }),

  email: value => ({
    error: 'not correct email',
    value,
    isValid: REG_EXP.EMAIL.test(value) ? true : false
  }),

  isNumber: value => ({
    error: 'NaN',
    value,
    isValid: REG_EXP.NUMBER.test(value) ? true : false
  }),

  isPhoneNumber: value => ({
    error: 'incorrect number',
    value,
    isValid: REG_EXP.PHONE_NUMBER.test(value) ? true : false
  }),

  isPasswordStrength: value => ({
    error: 'the password is not reliable',
    value,
    isValid: REG_EXP.CHECK_PASSWORD.test(value) ? true : false
  }),

  isPIN: value => ({
    error: 'incorrect PIN code',
    value,
    isValid: REG_EXP.PIN_CODE.test(value) ? true : false
  })
}

export default rules

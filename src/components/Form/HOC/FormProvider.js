import React from 'react'

import { FormContext } from './FormContext'

const FormProvider = (Field) => {
  return class _FormProvider extends React.Component {
    render() {
      return (
        <FormContext.Consumer>
          {({ updateFormValues }) => <Field updateFormValues={updateFormValues}/>}
        </FormContext.Consumer>
      )
    }
  }
}

export { FormProvider }
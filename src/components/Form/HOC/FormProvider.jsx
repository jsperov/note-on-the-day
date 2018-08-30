import React from 'react';

import { FormContext } from '../FormContext';

const FormProvider = (Field) => {
  const Provider = () => (
    <FormContext.Consumer>
      {({ updateFormValues }) => <Field updateFormValues={updateFormValues} />}
    </FormContext.Consumer>
  );

  return Provider;
};

export { FormProvider };

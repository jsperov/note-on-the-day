import React from 'react';
import { Button, Checkbox, Input } from 'antd';
import 'antd/dist/antd.css';

import { Form } from '../Form';
import { WithField } from '../Form/HOC/WithField';

export const Login = () => (
  <div id="form-box">
    <h1>Вход</h1>
    <Form className="field-block">
      <div className="field__element-wrap">
        <Form.Field
          validate={['required', 'isNumber']}
          name="login"
          placeholder="Введите имя"
          component={WithField(Input)}
        />
      </div>
      <div className="field__element-wrap">
        <Form.Field
          validate={['isPasswordStrength']}
          name="password"
          placeholder="Введите пароль"
          component={WithField(Input)}
        />
      </div>
      <div className="field__element-wrap">
        <Form.Field
          name="remember"
          label="Запомнить меня"
          component={Checkbox}
        />
      </div>
      <div className="field__element-wrap">
        <Button type="submit">Войти</Button>
      </div>
    </Form>
  </div>
);

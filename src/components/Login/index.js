import React from 'react'
import { Button, Checkbox, Input } from 'semantic-ui-react'
import { Form } from '../Form'
import 'semantic-ui-css/semantic.min.css'

export default class Login extends React.Component {
  render() {
    return (
      <div id="form-box">
        <h1>Вход</h1>
        <Form className="field-block">
          <div className="field__element-wrap">
            <Form.Field validate={['required', 'isNumber']} name="login" placeholder="Введите имя" component={Input} />
          </div>
          <div className="field__element-wrap">
            <Form.Field
              validate={['isPasswordStrength']}
              name="password"
              placeholder="Введите пароль"
              component={Input}
            />
          </div>
          <div className="field__element-wrap">
            <Form.Field name="remember" label="Запомнить меня" component={Checkbox} />
          </div>
          <div className="field__element-wrap">
            <Button type="submit">Войти</Button>
          </div>
        </Form>
      </div>
    )
  }
}

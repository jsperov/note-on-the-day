import React from 'react'
import { Button, Checkbox, Input, Dropdown } from 'semantic-ui-react'
import { Form } from '../Form'
import WrapField from '../Form/HOC/WrapField'

import './styles/registration.css'

const USER_LEVEL = [
  {
    value: 'junior',
    text: 'junior'
  },
  {
    value: 'middle',
    text: 'middle'
  },
  {
    value: 'senior',
    text: 'senior'
  }
]

export default class Registration extends React.Component {
  sendData() {
    // TODO
  }

  render() {
    return (
      <div id="form-box">
        <h1>Регистрация</h1>
        <div className="field-block">
          <Form id="f-registration">
            <div className="field__element-wrap">
              <Form.Field
                validate={['required', 'isNumber']}
                name="login"
                placeholder="Введите имя"
                component={WrapField(Input)}
              />
            </div>
            <div className="field__element-wrap">
              <Form.Field
                validate={['required', 'email']}
                name="email"
                component={WrapField(Input)}
              />
            </div>
            <div className="field__element-wrap">
              <Form.Field
                validate={['isPasswordStrength']}
                name="password"
                placeholder="Введите пароль"
                component={WrapField(Input)}
              />
            </div>
            <div className="field__element-wrap">
              <Form.Field
                validate={['isPasswordStrength']}
                name="password"
                placeholder="Введите пароль еще раз"
                component={WrapField(Input)}
              />
            </div>
            <div className="field__element-wrap">
              <Form.Field
                options={USER_LEVEL}
                name="user"
                placeholder="senior"
                selection
                search
                validate={['required']}
                component={WrapField(Dropdown)}
              />
            </div>
            <div className="field__element-wrap">
              <Form.Field
                name="agreement"
                label="Я подписываюсь на все"
                component={WrapField(Checkbox)}
              />
            </div>
            <div className="field__element-wrap">
              <Button onClick={this.sendData} type="submit">
                Зарегистрироваться
              </Button>
            </div>
          </Form>
        </div>
      </div>
    )
  }
}

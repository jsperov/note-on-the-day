import React from 'react'
import { Button, Checkbox, Input, Dropdown } from 'semantic-ui-react'
import './styles/registration.css'
import { Form } from '../Form'

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
                component={Input}
              />
            </div>
            <div className="field__element-wrap">
              <Form.Field
                validate={['required', 'email']}
                name="email"
                component={Input}
              />
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
              <Form.Field
                validate={['isPasswordStrength']}
                name="password"
                placeholder="Введите пароль еще раз"
                component={Input}
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
                component={Dropdown}
              />
            </div>
            <div className="field__element-wrap">
              <Form.Field
                name="agreement"
                label="Я подписываюсь на все"
                component={Checkbox}
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

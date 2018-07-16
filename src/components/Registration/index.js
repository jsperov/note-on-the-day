import React from 'react'
import { Button, Checkbox, Input } from 'antd'
import { Form } from '../Form'
import WrapField from '../Form/HOC/WrapField'

import 'antd/dist/antd.css'
import './styles/registration.css'

export default class Registration extends React.Component {
  sendData() {
    // TODO
  }

  render() {
    return (
      <div id="form-box">
        <h1>Регистрация</h1>
        <div className="field-block">
          <Form 
            id="f-registration"
            onSave={this.sendData}
          >
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
                name="agreement"
                label="Я подписываюсь на все"
                validate={['required']}
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

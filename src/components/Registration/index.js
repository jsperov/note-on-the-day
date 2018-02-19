import React from 'react'
import propTypes from 'prop-types'
import { Button, Checkbox, Icon, Input } from 'semantic-ui-react'
import './styles/registration.css'
import { Form } from '../Form'

export default class Registration extends React.Component {
    sendData(event) {
        // TODO
    }

    render() {
        return (
            <div id="form-box">
                <h1>Регистрация</h1>
                <div className="field-block">
                    <Form>
                        <div className="field__element-wrap">
                            <Form.Field 
                                validate={ ['required', 'isNumber'] } 
                                name="login" 
                                placeholder='Введите имя'
                                component={ Input }
                            />
                        </div>
                        <div className="field__element-wrap">
                            <Form.Field 
                                validate={ ['required', 'email'] }
                                name="email"
                                component={ Input }
                            />
                        </div>
                        <div className="field__element-wrap">
                            <Form.Field
                                validate={ (['isPasswordStrength']) }
                                name="password"
                                placeholder='Введите пароль'
                                component={ Input }
                            />
                        </div>
                        <div className="field__element-wrap">
                        <Form.Field
                                validate={ (['isPasswordStrength']) }
                                name="password"
                                placeholder='Введите пароль еще раз'
                                component={ Input }
                            />
                        </div>
                        <div className="field__element-wrap">
                            <Checkbox label={ <label>Я подписываюсь на все</label> } />
                        </div>
                        <div className="field__element-wrap">
                            <Button onClick={ this.sendData } type="submit">
                                Зарегистрироваться
                            </Button>
                        </div>
                    </Form>
                </div>
            </div>
        )
    }
}
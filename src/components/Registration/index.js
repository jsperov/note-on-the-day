import React from 'react'
import propTypes from 'prop-types'
import { Button, Checkbox, Icon, Input } from 'semantic-ui-react'
import './styles/registration.css'
import { Form } from '../Form'

export default class Registration extends React.Component {
    sendData(event) {
        event.preventDefault()
    }

    render() {
        return (
            <div id="form-box">
                <h1>Регистрация</h1>
                <div className="field-block">
                    <Form>
                        <div className="field__element-wrap">
                            <Form.Field validate={ ['required', 'isNumber'] } name="login"> 
                                <Input className="js__input-error" placeholder={ this.context.test } />
                            </Form.Field>
                        </div>
                        <div className="field__element-wrap">
                            <Form.Field validate={ ['required', 'email'] } name="email">
                                <Input iconPosition='left' placeholder='Email'>
                                    <Icon name='at' />
                                    <input />
                                </Input>
                            </Form.Field>
                        </div>
                        <div className="field__element-wrap">
                            <Form.Field validate={ (['isPasswordStrength']) } name="password">
                                <Input type="password" placeholder='Введите пароль' />
                            </Form.Field>
                        </div>
                        <div className="field__element-wrap">
                            <Input type="password" placeholder='Введите пароль еще раз' />
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
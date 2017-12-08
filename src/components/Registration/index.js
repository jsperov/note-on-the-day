import React from 'react'
import propTypes from 'prop-types'
import { Button, Checkbox, Icon, Input } from 'semantic-ui-react'
import './styles/registration.css'
import { Field, Form } from '../Form'

export default class Registration extends React.Component {
    sendData(event) {
        event.preventDefault()
        console.log('send')
    }

    render() {
        return (
            <div id="form-box">
                <h1>Регистрация</h1>
                <div className="field-block">
                    <Form>
                        <div className="field__element-wrap">
                            <Field validate={ ['required'] }> 
                                <Input className="js__input-error" placeholder={ this.context.test } />
                            </Field>
                        </div>
                        <div className="field__element-wrap">
                            <Field validate={ ['required', 'email'] }>
                                <Input iconPosition='left' placeholder='Email'>
                                    <Icon name='at' />
                                    <input />
                                </Input>
                            </Field>
                        </div>
                        <div className="field__element-wrap">
                            <Input type="password" placeholder='Введите пароль' />
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
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
        const emailInput = (
            <Input iconPosition='left' placeholder='Email'>
                <Icon name='at' />
                <input />
            </Input>
        )

        return (
            <div id="form-box">
                <h1>Регистрация</h1>
                <div className="field-block">
                    <Form>
                        <div className="field__element-wrap">
                            <Form.Field validate={ ['required', 'isNumber'] } name="login" component={ <Input/> }>
                                <div>test</div>
                            </Form.Field>
                        </div>
                        <div className="field__element-wrap">
                            <Form.Field validate={ ['required', 'email'] } name="email" component={ emailInput }>
                                <div>test</div>
                            </Form.Field>
                        </div>
                        <div className="field__element-wrap">
                            <Form.Field
                                validate={ (['isPasswordStrength']) }
                                name="password"
                                component={<Input type="password" placeholder='Введите пароль' />}
                            >
                                <div>test</div>
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
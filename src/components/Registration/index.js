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
        const emailInput = (props) => (
            <Input iconPosition='left' placeholder='Введите пароль' {...props}>
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
<<<<<<< HEAD
<<<<<<< HEAD
                            <Form.Field validate={ ['required', 'isNumber'] } name="login" component={ Input }>
                                <div>test</div>
                            </Form.Field>
                        </div>
                        {/* <div className="field__element-wrap">
                            <Form.Field validate={ ['required', 'email'] } name="email" component={ emailInput }>
                                <div>test</div>
                            </Form.Field>
=======
                            <Form.Field 
                                validate={ ['required', 'isNumber'] } 
                                name="login" 
                                placeholder='Введите имя'
                                component={Input}
                            />
                        </div>
=======
                            <Form.Field 
                                validate={ ['required', 'isNumber'] } 
                                name="login" 
                                placeholder='Введите имя'
                                component={Input}
                            />
                        </div>
>>>>>>> 4e72100c355eff7eff08bce2c3ba02a9ff6cd149
                        <div className="field__element-wrap">
                            <Form.Field 
                                validate={ ['required', 'email'] }
                                name="email"
                                component={ emailInput }
                            />
<<<<<<< HEAD
>>>>>>> 4e72100c355eff7eff08bce2c3ba02a9ff6cd149
=======
>>>>>>> 4e72100c355eff7eff08bce2c3ba02a9ff6cd149
                        </div>
                        <div className="field__element-wrap">
                            <Form.Field
                                validate={ (['isPasswordStrength']) }
                                name="password"
<<<<<<< HEAD
<<<<<<< HEAD
                                component={<Input type="password" placeholder='Введите пароль' />}
                            >
                                <div>test</div>
                            </Form.Field>
                        </div> */}
=======
=======
>>>>>>> 4e72100c355eff7eff08bce2c3ba02a9ff6cd149
                                placeholder='Введите пароль'
                                component={Input}
                            />
                        </div>
>>>>>>> 4e72100c355eff7eff08bce2c3ba02a9ff6cd149
                        <div className="field__element-wrap">
                        <Form.Field
                                validate={ (['isPasswordStrength']) }
                                name="password"
                                placeholder='Введите пароль еще раз'
                                component={Input}
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
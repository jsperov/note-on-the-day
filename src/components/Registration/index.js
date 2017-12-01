import React from 'react'
import { Button, Checkbox, Icon, Input } from 'semantic-ui-react'
import './registration.css'

export default class Registration extends React.Component {
    render() {
        return (
            <div id="form-box">
                <h1>Регистрация</h1>
                <div className="field-block">
                    <form id="field__form">
                        <div className="field__element-wrap">
                            <Input placeholder='Введите имя' />
                        </div>
                        <div className="field__element-wrap">
                            <Input iconPosition='left' placeholder='Email'>
                                <Icon name='at' />
                                <input />
                            </Input>
                        </div>
                        <div className="field__element-wrap">
                            <Input type="password" placeholder='Введите пароль' />
                        </div>
                        <div className="field__element-wrap">
                            <Input type="password" placeholder='Введите пароль еще раз' />
                        </div>
                        <div className="field__element-wrap">
                            <Checkbox label={<label>Я подписываюсь на все</label>} />
                        </div>
                        <div className="field__element-wrap">
                            <Button type="submit">
                                Зарегистрироваться
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
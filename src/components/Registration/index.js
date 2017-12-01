import React from 'react'
import { Button, Checkbox, Icon, Input } from 'semantic-ui-react'
import './registration.css'

export default class Registration extends React.Component {
    render() {
        return (
            <div id="registration">
                <h1>Регистрация</h1>
                <div className="registration-block">
                    <form id="registration-block__form">
                        <div className="registration-block__element-wrap">
                            <Input placeholder='Введите имя' />
                        </div>
                        <div className="registration-block__element-wrap">
                            <Input iconPosition='left' placeholder='Email'>
                                <Icon name='at' />
                                <input />
                            </Input>
                        </div>
                        <div className="registration-block__element-wrap">
                            <Input type="password" placeholder='Введите пароль' />
                        </div>
                        <div className="registration-block__element-wrap">
                            <Input type="password" placeholder='Введите пароль еще раз' />
                        </div>
                        <div className="registration-block__element-wrap">
                            <Checkbox label={<label>Я подписываюсь на все</label>} />
                        </div>
                        <div className="registration-block__element-wrap">
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
import React from 'react'
import { Button, Checkbox, Input } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';

export default class Login extends React.Component {
    render() {
        return (
            <div id="registration">
                <h1>Вход</h1>
                <div className="field-block">
                    <form id="field-block__form">
                        <div className="field__element-wrap">
                            <Input placeholder='Введите имя' />
                        </div>
                        <div className="field__element-wrap">
                            <Input type="password" placeholder='Введите пароль' />
                        </div>
                        <div className="field__element-wrap">
                            <Checkbox label={<label>Запомнить меня</label>} />
                        </div>
                        <div className="field__element-wrap">
                            <Button type="submit">
                                Войти
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
import React from 'react'
import { Link } from 'react-router-dom'
import Logo from './task.svg'
import './home.css'
import { Button } from 'semantic-ui-react'

export default class Home extends React.Component {
    render() {
        return (
            <div id="introduction">
                <header>
                    <div className="h-left-zone">
                        <div className="logo">
                            <img src={Logo} alt="logo"/>
                        </div>
                    </div>
                    <div className="h-right-zone">
                        <Button>
                            <Link to="/login">Login</Link>
                        </Button>
                        <Button>
                            <Link to="/registration">Registration</Link>
                        </Button>
                    </div>
                </header>
                <main>
                    <div className="product-desc">
                        <h2 className="product-desc__title">Tasker - это бесплатный, гибкий и наглядный способ организовать что угодно с кем угодно.</h2>
                        <div className="product-desc__description">Выбросьте длинные цепочки электронных писем, устаревшие таблицы, не такие уж и клейкие стикеры и неуклюжие программы для управления проектами. Trello помогает увидеть все детали проекта с первого взгляда.</div>
                        <div className="product-desc__description">Это доска Trello. Это перечень списков, заполненных карточками, используемыми вашей командой или непосредственно вами.</div>
                    </div>
                </main>
            </div>
        )
    }
} 
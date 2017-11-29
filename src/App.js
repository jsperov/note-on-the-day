import React from 'react'
import { Switch , Route } from 'react-router-dom'
import { LocalStorage, CustomPromise } from "./db"
import Home from './components/Home'
import { Login } from './components/Login' 
import './app.css'

const App = () => (
    <Switch>
        <Route path="/" component={Home} />
        <Route path="/login" exact component={Login} /> 
    </Switch>
)

export default App


import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home } from './components/Home';
import Task from './components/Task';
import { Login } from './components/Login';
import { Registration } from './components/Registration';
import './app.css';

const App = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/login" component={Login} />
    <Route path="/task" component={Task} />
    <Route path="/registration" component={Registration} />
  </Switch>
);

export default App;

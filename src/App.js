import React, { Component } from 'react';
import {BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import Users from './components/Users'
import UserForm from './components/Userform'
import Login from './components/login'
import Userdetails from './components/Userdetails'
import UpdateUser from './components/Update'
import WebGenerator from './components/WebGenerator'
import ReactHook from './components/react-hook'

import './App.css';
import NavBar from './components/NavBar'

class App extends Component {
  render(){
    return (
      <BrowserRouter>
        <div className="App">
            <NavBar/>
            <Switch>
              <Route exact path='/' component ={Home}/>
              <Route path='/users' component ={Users}/>
              <Route path='/new' component ={UserForm}/>
              <Route path='/login' component ={Login}/>
              <Route exact path='/user/:id' component ={Userdetails}/>
              <Route path='/user/edit/:id' component ={UpdateUser}/>
              <Route exact path='/web' component ={WebGenerator}/>
              <Route path='/reacthook' component ={ReactHook}/>
            </Switch>
        </div>
      </BrowserRouter>
    );
  }
}



export default App;

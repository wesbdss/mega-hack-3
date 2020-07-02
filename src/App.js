import React from 'react';
import Animation from './routes/Animation.js';
import Login from './routes/Login.js';
import Homepage from './routes/Homepage.js';
import Erro from './routes/Erro.js';
import Dashboard from './routes/Dashboard.js';
import Perfil from './routes/Perfil';
import Online from './routes/Online.js';


import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import './App.css';

export default class App extends React.Component {


  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <Switch>
              <Route path="/mega-hack-3/dashboard/ajuda">
                <Dashboard />
              </Route>
              <Route path="/mega-hack-3/dashboard/online">
                <Online />
              </Route>
              <Route path="/mega-hack-3/perfil">
                <Perfil />
              </Route>
              <Route path="/mega-hack-3/login">
                <Login />
              </Route>
              <Route path='/mega-hack-3/dashboard'>
                <Dashboard />
              </Route>
              <Route path="/mega-hack-3/anima">
                <Animation />
              </Route>
              <Route path="/mega-hack-3/">
                <Homepage />
              </Route>
              <Route path='/'>
                <Erro />
              </Route>


            </Switch>
          </header>
        </div>
      </Router >

    );
  }
}



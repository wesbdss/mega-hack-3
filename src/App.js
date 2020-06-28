import React from 'react';
import Animation from './routes/Animation.js';
import Login from './routes/Login.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Switch>
            <Route path="/">
              <Animation />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
          </Switch>
        </header>
      </div>
      </Router >

  );
}

export default App;

import React from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Button from './components/Button';
import Card from './components/Card';
import CardTwo from './components/Cardtwo';
import Form from './components/Form';
import Navigation from './components/Navigation';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App-container">
        <div>
          <CardTwo />
        </div>
      <Switch>
        <Route path="/Button" component={Button} />
        <Route path="/Card" component={Card} />
        <Route path="/Form" component={Form} />
        <Route path="/Navigation" component={Navigation} />
      </Switch>
      </div>
    </Router>
  );
}

export default App;

import React from 'react';
import logo from './logo.svg';
import './App.css';
import Homepage from './Homepage';
import { Switch, Route } from 'react-router-dom';
import AllBeers from './AllBeers';
import RandomBeers from './RandomBeers';
import NewBeer from './NewBeer';
import Beer from './Beer';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/beers" component={AllBeers} />
        <Route exact path="/random-beer" component={RandomBeers} />
        <Route exact path="/new-beer" component={NewBeer} />
        <Route exact path="/beers/:id" component={Beer} />
      </Switch>
    </div>
  );
}

export default App;

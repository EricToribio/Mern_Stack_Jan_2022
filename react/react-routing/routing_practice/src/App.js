import React from 'react';
import './App.css';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import Welcome from './components/Welcome';
import WordPlusColor from './components/WordPlusColor';

function App() {
  return (
    <BrowserRouter>
    
    <Switch>
      <Route path="/home">
        <Welcome/>
      </Route>
      <Route exact path="/:input">
        <WordPlusColor/>
      </Route>
      <Route path="/:input/:color1/:color2">
        <WordPlusColor/>
      </Route>
    </Switch>
    </BrowserRouter>
  );
}

export default App;

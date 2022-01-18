import React from 'react';
import './App.css';
import Form from './components/Form';
import Display from './components/Display';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import Wrapper from './components/Wrapper';

function App() {

  return (
    <BrowserRouter>
      <Wrapper>
        <Form />
        <Switch>
          <Route path="/:param/:id">
            <Display />
          </Route>
        </Switch>
      </Wrapper>
    </BrowserRouter>

  );
}

export default App;

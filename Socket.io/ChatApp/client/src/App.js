import React from 'react';
import './App.css';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom"
import UserView from './views/UserView';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './views/Dashboard';
import { RoomsView } from './views/RoomsView';

function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/">
      <UserView>
        <Login/>
      </UserView>
      </Route>
      <Route exact path="/register">
      <UserView>
        <Register/>
      </UserView>
      </Route>
      <Route exact path="/DashBoard">
          <Dashboard/>
      </Route>
      <Route exact path="/:room/:id">
        <RoomsView/>
        </Route>
    </Switch>
    </BrowserRouter>
    
  
  );
}

export default App;
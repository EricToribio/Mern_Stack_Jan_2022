import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom"
import UserView from './views/UserView';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
function App() {
  return (
    <div className="App">
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
        <UserView>
          <Dashboard/>
        </UserView>
      </Route>
    </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;

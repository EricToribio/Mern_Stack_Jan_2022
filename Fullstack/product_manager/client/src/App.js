
import './App.css';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";

import Main from './views/Main';

import ShowOneProduct from './views/ShowOneProduct';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
      <Route exact path="/">
      <Main/>
      </Route>
        <Route exact path="/:id">
        <ShowOneProduct/>
        </Route>
      </Switch>
      
      
      </BrowserRouter>
    
    </div>
  );
}

export default App;

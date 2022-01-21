
import './App.css';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";

import Main from './views/Main';

import ShowOneProduct from './views/ShowOneProduct';
import UpdateProducts from './components/UpdateProducts';

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
        <Route exact path="/:id/edit">
          <UpdateProducts/>
        </Route>
      </Switch>
      
      
      </BrowserRouter>
    
    </div>
  );
}

export default App;

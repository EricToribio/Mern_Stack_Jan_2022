
import './App.css';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";

import Main from './views/Main.jsx';
import AuthorForm from './components/NewAuthor';
import UpdateAuthorForm from './components/UpdateAuthor';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
      <Route exact path="/">
      <Main/>
      </Route>
        <Route exact path="/new">
          <AuthorForm/>
        </Route>
        <Route exact path="/:id/edit">
          <UpdateAuthorForm/>
        </Route>
      </Switch>
      
      
      </BrowserRouter>
    
    </div>
  );
}

export default App;

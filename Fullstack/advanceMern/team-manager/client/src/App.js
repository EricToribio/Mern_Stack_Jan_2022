
import './App.css';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import Main from './views/Main';

import Header from './components/Header';

import Wrapper from './components/Wrapper';
import PlayerView from './views/PlayerView';
import AddPlayerView from './views/AddPlayerView';
import { PlayerStatusView } from './views/PlayerStatusView';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header>
          <Switch>
            <Route exact path="/">
              <Main />
            </Route>
            <Route exact path="/players/list">
              <Wrapper>
                <PlayerView/>
              </Wrapper>
            </Route>
            <Route exact path="/players/addplayer">
              <Wrapper>
                <AddPlayerView/>
              </Wrapper>
            </Route>
            <Route exact path="/status/game">
            <PlayerStatusView/>
            </Route>
          </Switch>
        </Header>
      </BrowserRouter>

    </div>
  );
}

export default App;

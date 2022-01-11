import React from 'react';
import './App.css';
import Header from './Components/Header';
import Navigation from './Components/Navigation';
import Main from './Components/Main';
import Advertisement from './Components/Advertisement';
import SubContents from './Components/SubContents';


function App() {
  return (
    <div className="app">
      <Header />
      <div className='row'>
        <Navigation />
        <Main>
          <div className='row'>
          <SubContents />
          <SubContents />
          <SubContents />
          </div>
          <Advertisement/>
        </Main>

      </div>
    </div>
  );
}

export default App;


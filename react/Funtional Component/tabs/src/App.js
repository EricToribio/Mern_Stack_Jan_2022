import logo from './logo.svg';
import './App.css';
import Tabs from './components/tabs';

function App() {
  const tabs = [
    {idx : 0,name: 'Tab 1', content : "You've clicked tab 1"},
    {idx : 1,name: 'Tab 2', content : "You've clicked tab 2"},
    {idx : 2,name: "Tab 3", content : "You've clicked tab 3"}
]

  return (
    <div className="App">
      <Tabs tabs={tabs}/>
    </div>
  );
}

export default App;

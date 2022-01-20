
import './App.css';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import ProductForm from './components/ProductForm';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <ProductForm/>
      
      </BrowserRouter>
    
    </div>
  );
}

export default App;

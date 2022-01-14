import React, {useState} from 'react';
import './App.css';
import Wrapper from './components/Wrapper';
import Navbar from './components/Navbar';
import FormWrapper from './components/FormWrapper';
import UserContext from './context/UserContext';


function App() {
  const [val, setVal] = useState("")
 
  console.log(val)
  return (
    <div className='bg-secondary'>
      <UserContext.Provider value={{val,setVal}}>
        <Wrapper>
          <Navbar />
          <FormWrapper />
        </Wrapper>
      </UserContext.Provider>
    </div>

  );
}

export default App;

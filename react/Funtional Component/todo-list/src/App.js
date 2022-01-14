import React, {useState} from 'react';
import './App.css';
import TodoList from './components/ToDoList';
import UserForm from './components/UserForm';

function App() {
  const [list , setList] = useState([])
  
  const updateList =( newTodo) => {
// spread operator needs [] brackets
    setList([...list, newTodo])
  }

    console.log(list)
  
  const newList = (list) => {
    setList(list)
  }

  

  return (
    <div className="card col-5 mx-auto">
      <UserForm 
      listUpdate={updateList}/>
      <TodoList 
      todo = {list}
      setNewList={newList}
      />
    </div>
  );
}

export default App;

import './App.scss';
import './variables.scss';
import { useState } from 'react';
import {TodoCounter} from './TodoCounter.js'
import {TodoSearch} from './TodoSearch.js'
import {TodoList} from './TodoList.js'
import {TodoItem} from './TodoItem.js'
import {CreateTodoButton} from './CreateTodoButton.js'
let defaultTodos = [
  {text: 'comprar comida', completed: false},
  {text: 'Hacer el almuerzo', completed: false},
  {text: 'Estudiar', completed: false},
  {text: 'Hacer ejercicio', completed: true},
  {text: 'Dormir temprano', completed: true},
  {text: 'Entrenar', completed: true},
  {text: 'Cenar', completed: true}
]

function App() {

  const [searchValue, setSearchValue] = useState("");
  const [todos, setTodos] = useState(defaultTodos);
  console.log("se ejecuta APP")
  const completedTodos = todos.filter(todo => todo.completed === true).length;
  const totalTodos = todos.length;
  let searchedTodos = [];
  if(searchValue.length < 1){
    searchedTodos = todos;
  }else{
    searchedTodos = todos.filter(todo =>{
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }
  return (
    <div className="App">
      <div className='Todo'>
        <TodoCounter 
          total={totalTodos}
          completed={completedTodos}
        />
        <TodoSearch 
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
        <TodoList>
          {searchedTodos.map(todo => (
            <TodoItem 
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              todos={todos}
              setTodos={setTodos}
            />
          ))}
        </TodoList>
        <CreateTodoButton />
      </div>
    </div>
  );
}

export {App};

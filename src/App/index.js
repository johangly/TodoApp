import './App.scss';
import { useLocalStorage } from '../Hooks/useLocalStorage';
import { useState ,useEffect} from 'react';
import AppUI from './AppUI'
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
  const {item:todos, saveItem:saveTodos, loading} = useLocalStorage("TODOS_V1",[]);
  console.log(todos)
  const [searchValue, setSearchValue] = useState("");
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
    //! aqui le mandas a la interfaz todos los datos que requiere
    <AppUI 
      total={totalTodos}
      completed={completedTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      todos={todos}
      saveTodos={saveTodos}
      searchedTodos={searchedTodos}
      loading={loading}
    />
  );
}

export {App};

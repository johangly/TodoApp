import { useState } from 'react'
import { useLocalStorage } from './useLocalStorage';

function useTodos(props) {
    const {item:todos, saveItem:saveTodos, loading} = useLocalStorage("TODOS_V1",[]);
    const [cannotAddTodo,setCannotAddTodo]=useState({error:false,errorMessage:""});
    const addTodo = (text)=>{
        let Todo = { text:text, completed:false};
        let newTodo = [...todos];
        if(!(newTodo.find(todo => todo.text.toLowerCase() === text.toLowerCase()))){    
            setCannotAddTodo({error:false,errorMessage:""});
            newTodo.unshift(Todo)
            saveTodos(newTodo)
        }else{
            setCannotAddTodo({error:true,errorMessage:"Ese Todo ya existe"});
        }
    }
    const [openModal, setOpenModal] = useState(false);
    const [searchValue, setSearchValue] = useState("");
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

    return {
        totalTodos,
        completedTodos,
        searchValue,
        setSearchValue,
        todos,
        saveTodos,
        searchedTodos,
        loading,
        openModal,
        setOpenModal,
        addTodo,
        cannotAddTodo,
        setCannotAddTodo,
    };
}

export {useTodos};
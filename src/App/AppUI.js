import React from 'react'
import { useContext } from 'react'
import {TodoCounter} from '../TodoCounter/index.js'
import {TodoSearch} from '../TodoSearch/index.js'
import {TodoList} from '../TodoList/index.js'
import {TodoItem} from '../TodoItem/index.js'
import {CreateTodoButton} from '../CreateTodoButton/index.js'
import {TodoContext} from '../TodoContext'
import {Modal} from '../Modal/index.js'

function AppUI() {
    const {
        error,
        loading,
        searchedTodos,
        todos,
        saveTodos,
        openModal,
        setOpenModal,
        addTodo,
        cannotAddTodo,
        setCannotAddTodo,
    } = useContext(TodoContext)
    return (
        <div className="App">
            <div className='Todo'>
                <TodoCounter />
                <TodoSearch />
                <TodoList>
                    {error && <p>Desesperate, hubo un error...</p>}
                    {loading && <p>Estamos cargando, no desesperes...</p>}
                    {(loading === false && !searchedTodos.length) && <p>Crea tu primer Todo! :D</p>}
                    {searchedTodos.map(todo => (
                        <TodoItem 
                        key={todo.text}
                        text={todo.text}
                        completedTodo={todo.completed}
                        todos={todos}
                        saveTodos={saveTodos}
                        />
                    ))}
                </TodoList>
                {openModal && 
                    <Modal setOpenModal={setOpenModal} addTodo={addTodo} cannotAddTodo={cannotAddTodo} setCannotAddTodo={setCannotAddTodo}/>
                }
                
                <CreateTodoButton setOpenModal={setOpenModal}/>
            </div>
        </div>
    )
}

export default AppUI;
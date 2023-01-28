import React from 'react'
import {TodoCounter} from '../TodoCounter/index.js'
import {TodoSearch} from '../TodoSearch/index.js'
import {TodoList} from '../TodoList/index.js'
import {TodoItem} from '../TodoItem/index.js'
import {CreateTodoButton} from '../CreateTodoButton/index.js'

function AppUI({
    total,
    completed,
    searchValue,
    setSearchValue,
    todos,
    saveTodos,
    searchedTodos,
    loading,
    error
}) {
    console.log(loading,searchedTodos)
    return (
        <div className="App">
            <div className='Todo'>
                <TodoCounter 
                total={total}
                completed={completed}
                />
                <TodoSearch 
                searchValue={searchValue}
                setSearchValue={setSearchValue}
                />
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
                <CreateTodoButton />
            </div>
        </div>
    )
}

export default AppUI;
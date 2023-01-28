import React from 'react'
import { createContext } from 'react'

const TodoContext = createContext();

function TodoProvider(props) {
    return (
        <div>
            <TodoContext.Provider value={{
                
            }}>
                {props.children}
            </TodoContext.Provider>
        </div>
    )
}


<TodoContext.Consumer></TodoContext.Consumer>